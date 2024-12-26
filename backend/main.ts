import { Application, Router } from "@oak/oak";
import { fetchInspections, fetchInspectionDetails } from "./controllers/inspections.ts"

const router = new Router();

router.get("/inspections/", (ctx) => {
  fetchInspections(ctx.request.url.toString())
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