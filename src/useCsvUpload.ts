import { ChangeEvent, useCallback, useState } from 'react';

const reader = new FileReader();

export const useCsvUpload = (headers?: Array<string>) => {
  const [columnDefs, setColumnDefs] = useState<Array<{ field: string }>>();
  const [rowData, setRowData] =
    useState<Array<Record<string, string | number | boolean | Date>>>();

  const csvFileToArray = useCallback(
    (str: string) => {
      const csvHeader = headers ?? str.slice(0, str.indexOf('\n')).split(',');
      setColumnDefs(csvHeader.map((field) => ({ field })));
      const csvRows = str
        .slice(str.indexOf('\n') + (headers ? 0 : 1))
        .split('\n')
        .map((row) => {
          let values = row.split(',').map((val, i) => [csvHeader[i], val]);
          return Object.fromEntries(values);
        });
      setRowData(csvRows);
    },
    [headers]
  );
  function handleUpload(e: ChangeEvent<HTMLInputElement>) {
    let files = e.target?.files;
    if (files?.length) {
      let file = files[0];
      reader.onload = function (event) {
        const text = event.target?.result;
        text && csvFileToArray(text.toString());
      };
      reader.readAsText(file);
    }
  }
  return { rowData, columnDefs, isReady: rowData && columnDefs, handleUpload };
};
