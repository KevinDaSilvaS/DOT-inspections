interface GenericListProps {
    values: (string | number | boolean)[];
}
  
export function GenericList(props: GenericListProps) {
  return (
    <ul>
        { props.values.map(value => ( <li>{ `${value}` }</li> )) }
    </ul>
  );
}
