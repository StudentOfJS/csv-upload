import { Table } from './Table';
import { useCsvUpload } from './useCsvUpload';

function TailwindTable() {
  const { rowData, columnDefs, isReady, handleUpload } = useCsvUpload({});
  return (
    <section>
      <h2 className="text-2xl">Upload CSV for basic tailwind table</h2>
      <h3 className="text-l">
        * must include a header in this example and use any common delimiter
      </h3>
      <div className="card">
        <input type="file" onChange={handleUpload} />
      </div>
      {isReady && rowData && columnDefs ? (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
          <Table rowData={rowData} columnDefs={columnDefs}></Table>
        </div>
      ) : null}
    </section>
  );
}

export default TailwindTable;
