import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Table = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([
        { Daysleft: "Contest started", model: "Celica", price: 35000 },
        
    ]);

    return (
        <div className="ag-theme-alpine" style={{ height: 270, width: 200 }}>
            <AgGridReact
                rowData={rowData}>
                <AgGridColumn field="Daysleft"></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default Table;