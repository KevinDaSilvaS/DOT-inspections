interface SortButtonProps {
  path: string;
  fieldName: string;
  sortStyle: string;
  sortField: string;
  page: number;
  limit: number;
  filter: string;
}

export function SortButton(props: SortButtonProps) {
  const sortStyle = props.sortStyle ?? "desc";
  const options: Record<string, string> = {
    desc: "asc",
    asc: "desc",
  };

  const arrows: Record<string, string> = {
    desc: "⬇️",
    asc: "⬆️",
  };

  return (
    <div class="flex flex-col">
      <a
        href={`/${props.path}?filter=${props.filter}&field=${props.fieldName}&sort=${
          options[sortStyle]
        }&page=${props.page}&limit=${props.limit}`}
      >
        {props.sortField == props.fieldName ? arrows[sortStyle] : "🟦"}
      </a>
    </div>
  );
}
