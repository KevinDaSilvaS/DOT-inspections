interface GenericTableProps {
  fields: string[];
  values: (string | number | boolean)[][];
}

export function GenericTable(props: GenericTableProps) {
  return (
    <table class="border-collapse w-full p-2 shadow-md">
      <thead class="bg-slate-500 text-slate-100 p-5">
        <tr>
          {props.fields.map((field) => <th>{field}</th>)}
        </tr>
      </thead>
      <tbody>
        {props.values.map((dataValues) => {
          return (
            <tr>
              {dataValues.map((value: string | number | boolean) => (
                <td class="bg-slate-300 text-gray-900 p-5 text-center border-t-2 border-slate-500">{`${value}`}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
