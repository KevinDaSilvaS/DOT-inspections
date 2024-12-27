interface PageControlsProps {
  path: string;
  sort: string;
  field: string;
  page: number;
  limit: number;
  filter: string;
}

export function PageControls(props: PageControlsProps) {
  return (
    <div class="flex flex-row">
      <div class="basis-1/4 p-2">
        <a class="rounded-md bg-orange-600 text-xs/6 font-semibold text-gray-100 p-2 shadow-md"
          href={`/${props.path}?filter=${props.filter}&field=${props.field}&sort=${props.sort}&page=${
            props.page > 1 ? props.page - 1 : 1
          }&limit=${props.limit}`}
        >
          Previous
        </a>
      </div>

      <div class="basis-1/2"></div>
      <div class="basis-1/4 text-right p-2">
        <a class="rounded-md bg-orange-600 text-xs/6 font-semibold text-gray-100 p-2 shadow-md"
          href={`/${props.path}?filter=${props.filter}&field=${props.field}&sort=${props.sort}&page=${
            props.page + 1
          }&limit=${props.limit}`}
        >
          Next
        </a>
      </div>
    </div>
  );
}
