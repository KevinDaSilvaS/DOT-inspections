import { Application, Router } from "@oak/oak";
import { fetchInspections, fetchInspectionDetails } from "./controllers/inspections.ts"

const router = new Router();

router.get("/inspections/", (ctx) => {
  const sort = ctx.request.url.searchParams.get("sort") ?? "";
  const field = ctx.request.url.searchParams.get("field") ?? "";
  const filter = ctx.request.url.searchParams.get("filter") ?? "";
  const page = ctx.request.url.searchParams.get("page") ?? "1";
  const limit = ctx.request.url.searchParams.get("filter") ?? "10";
  fetchInspections(parseInt(page), parseInt(limit), sort, field, filter)
  console.log(ctx.request)
  ctx.response.headers.append('Content-Type', 'application/json')
  ctx.response.body = { hi: "Hello world" };
});

router.get("/inspections/:inspection_number", (ctx) => {
  fetchInspectionDetails(ctx.params.inspection_number)
  ctx.response.headers.append('Content-Type', 'application/json')
  ctx.response.body = { hi: "Hello world" };
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 3000 });