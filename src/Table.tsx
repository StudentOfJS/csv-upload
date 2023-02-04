interface TableInterface {
  rowData: Array<Record<string, string | number | boolean | null>>;
  columnDefs: Array<{ field: string }>;
}

export const Table: React.FC<TableInterface> = ({ rowData, columnDefs }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  {columnDefs.map(({ field }) => (
                    <th
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      scope="col"
                      key={field}
                    >
                      {field}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rowData.map((row, i) => (
                  <tr
                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    key={i}
                  >
                    {Object.entries(row)?.map(([key, value], j) => (
                      <td
                        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        key={`${key}-${i}-${j}`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
