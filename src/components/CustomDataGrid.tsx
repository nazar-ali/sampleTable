import React from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

interface CustomDataGridProps {
  columns: GridColDef[];
  rows: GridRowsProp;
  onRowClick?: (params: any) => void;
  onRowEdit?: (params: any) => void;
  onRowDelete?: (params: any) => void;
}

const CustomDataGrid: React.FC<CustomDataGridProps> = ({
  columns,
  rows,
  onRowClick,
  onRowEdit,
  onRowDelete,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
        onRowClick={onRowClick}
        components={{
          Toolbar: () => (
            <div>
              {onRowEdit && <button onClick={onRowEdit}>Edit</button>}
              {onRowDelete && <button onClick={onRowDelete}>Delete</button>}
            </div>
          ),
        }}
      />
    </div>
  );
};

export default CustomDataGrid;
