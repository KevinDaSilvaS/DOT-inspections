interface SortButtonProps {
    path: string
    fieldName: string,
    sortStyle: string,
    sortField: string
}

export function SortButton(props: SortButtonProps) {
  const sortStyle = props.sortStyle ?? "desc";
  const options: Record<string, string> = {
    desc: "asc",
    asc: "desc"
  }

  const arrows: Record<string, string> = {
    desc: "⬇️",
    asc: "⬆️"
  }

  return (
    <div class="flex flex-col">
        <a href={`/${props.path}?field=${props.fieldName}&sort=${options[sortStyle]}`}>
            {props.sortField == props.fieldName ? arrows[sortStyle] : "🟦"}
        </a>
    </div>
  );
}
