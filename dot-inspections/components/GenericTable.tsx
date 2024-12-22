interface GenericTableProps {
  fields: string[];
  values: (string | number | boolean)[][];
}

export function GenericTable(props: GenericTableProps) {
  return (
    <table>
      <thead>
        <tr>
          {props.fields.map((field) => <th>{field}</th>)}
        </tr>
      </thead>
      <tbody>
        {props.values.map((dataValues) => {
          return (
            <tr>
              {
                dataValues.map((value: string | number | boolean) => (
                  <th>{`${value}`}</th>
                ))
              }
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
