import { AgGridReact } from 'ag-grid-react';
import { useCsvUpload } from './useCsvUpload';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function SpecificUsageAG() {
  const { rowData, columnDefs, isReady, handleUpload } = useCsvUpload({});
  return (
    <section className="mb-10">
      <h2 className="text-2xl">Upload CSV for ag-grid with custom hook</h2>
      <h3 className="text-l">
        * must include a header in this example and use any common delimiter
      </h3>
      <div className="card">
        <input type="file" onChange={handleUpload} />
      </div>
      {isReady ? (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
          <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
        </div>
      ) : null}
    </section>
  );
}

export default SpecificUsageAG;
