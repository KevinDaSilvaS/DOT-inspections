import { Application, Router } from "@oak/oak";
import { fetchInspections, fetchInspectionDetails } from "./controllers/inspections.ts"

const router = new Router();

router.get("/inspections/", async (ctx) => {
  const url = ctx.request.url
  const sort = url.searchParams.get("sort") ?? "";
  const field = url.searchParams.get("field") ?? "";
  const filter = url.searchParams.get("filter") ?? "";
  const page = url.searchParams.get("page") ?? "1";
  const limit = url.searchParams.get("filter") ?? "10";
  await fetchInspections(parseInt(page), parseInt(limit), sort, field, filter)
  console.log(ctx.request)
  ctx.response.headers.append('Content-Type', 'application/json')
  ctx.response.body = { hi: "Hello world" };
});

router.get("/inspections/:inspection_number", async (ctx) => {
  await fetchInspectionDetails(ctx.params.inspection_number)
  ctx.response.headers.append('Content-Type', 'application/json')
  ctx.response.body = { hi: "Hello world" };
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 3000 });