import { PageProps } from "$fresh/server.ts";

export default function Details(props: PageProps) {
  return <div>Details {props.params.inspection_number}</div>;
}
