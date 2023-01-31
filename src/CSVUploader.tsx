import { parse } from 'papaparse';
import { useEffect, useState } from 'react';
import { Table } from '../Table';

interface CsvData {
  data: Array<Array<string | number>>;
  errors: Array<{
    type: string;
    code: string;
    message: string;
    row: number;
  }>;
  meta: {
    delimiter: string;
    linebreak: string;
    aborted: boolean;
    truncated: boolean;
    cursor: number;
  };
}

export const CSVUploader: React.FC = () => {
  const [csvData, setCsvData] = useState<Array<Array<string | number>>>();
  const [includesHeader, setIncludesHeader] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    file &&
      parse(file as any, {
        // @ts-ignore worker, type definitions missing worker option
        worker: true,
        stream: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (results: CsvData) => {
          setCsvData(results.data);
        },
      });
  };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <label>
        <input
          type="checkbox"
          checked={includesHeader}
          onChange={(e) => setIncludesHeader(e.target.checked)}
        />
        Includes header
      </label>
      {csvData && <Table data={csvData} includesHeader={includesHeader} />}
    </div>
  );
};
