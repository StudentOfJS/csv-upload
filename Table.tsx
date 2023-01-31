interface TableInterface {
  data: Array<Array<string | number>>;
  includesHeader: boolean;
}

export const Table: React.FC<TableInterface> = ({ data, includesHeader }) => {
  return (
    <table>
      {includesHeader && (
        <thead>
          <tr>
            {data[0].map((colName) => (
              <th scope="col" key={colName}>
                {colName}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {data.slice(includesHeader ? 1 : 0).map((row, i) => (
          <tr key={i}>
            {row?.map((value, j) => (
              <td key={`${data[0][j]}-${j}`}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
