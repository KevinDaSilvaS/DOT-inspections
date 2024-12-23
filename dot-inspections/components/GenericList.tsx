interface GenericListProps {
    values: (string | number | boolean)[];
}
  
export function GenericList(props: GenericListProps) {
  return (
    <ul class="p-5 w-full bg-slate-100 rounded-md shadow-md">
        { props.values.map(value => ( <li class="text-slate-900 text-m pl-3">{ `${value}` }</li> )) }
    </ul>
  );
}
