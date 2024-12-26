import { Application, Router } from "@oak/oak";
import {
  fetchInspectionDetails,
  fetchInspections,
} from "./controllers/inspections.ts";

const router = new Router();

router.get("/inspections/", async (ctx) => {
  const url = ctx.request.url;
  const sort = url.searchParams.get("sort") ?? "";
  const field = url.searchParams.get("field") ?? "";
  const filter = url.searchParams.get("filter") ?? "";
  const page = url.searchParams.get("page") ?? "1";
  const limit = url.searchParams.get("limit") ?? "10";
  const { code, data } = await fetchInspections(
    parseInt(page),
    parseInt(limit),
    sort,
    field,
    filter,
  );
  ctx.response.headers.append("Content-Type", "application/json");
  ctx.response.status = code;
  ctx.response.body = data;
});

router.get("/inspections/:inspection_number", async (ctx) => {
  const { code, data } = await fetchInspectionDetails(
    ctx.params.inspection_number,
  );
  ctx.response.headers.append("Content-Type", "application/json");
  ctx.response.status = code;
  ctx.response.body = data;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 3000 });
