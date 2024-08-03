import React, { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import CustomDataGrid from "./CustomDataGrid"; // Adjust the path as needed
import CustomFilter from "./CustomFilter";
const columns: GridColDef[] = [
  {
    field: "Created_DT",
    headerName: "Created_DT",
    width: 150,
    align: "center",
  },
  {
    field: "Modifed_DT",
    headerName: "Modifed_DT",
    width: 150,
    align: "center",
  },
  {
    field: "Operating_status",
    headerName: "Operating status",
    width: 150,
    align: "center",
  },
  {
    field: "Legal_name",
    headerName: "Legal name",
    width: 150,
    align: "center",
  },
  { field: "DBA_name", headerName: "DBA name", width: 150, align: "center" },
  {
    field: "Physical_address",
    headerName: "Physical address",
    width: 150,
    align: "center",
  },
  { field: "Phone", headerName: "Phone", width: 150, align: "center" },
  { field: "DOT", headerName: "DOT", width: 150, align: "center" },
  { field: "MC_MX_FF", headerName: "MC/MX/FF", width: 150, align: "center" },
  {
    field: "Power_units",
    headerName: "Power units",
    width: 110,
    align: "center",
  },
  {
    field: "Out_of_service_date",
    headerName: "Out of service date",
    width: 110,
    align: "center",
  },
  {
    field: "Action",
    headerName: "Action",
    width: 110,
    align: "center",
  },
];

const rows = [
  {
    id: 1,
    Created_DT: "2023-11-16 12:00:05+00",
    Modifed_DT: "2024-07-23 01:47:50+00",
    Operating_status: "NOT AUTHORIZED",
    Legal_name: "THOMAS WALDRUM",
    DBA_name: "SOUTH MOUNTAIN TRUCKING",
    Physical_address: "1176 MOUNTAIN ROAD AMITY, AR 71921",
    Phone: "(870) 828-2056",
    DOT: "729700",
    MC_MX_FF: "729700",
    Power_units: "1",
    Out_of_service_date: "02/03/2024",
    Action:"Delete",
  },
  {
    id: 2,
    Created_DT: "2023-10-25 11:00:06+00",
    Modifed_DT: "2024-23-23 01:47:50+00",
    Operating_status: "NOT AUTHORIZED",
    Legal_name: "Nazar",
    DBA_name: "SOUTH MOUNTAIN TRUCKING",
    Physical_address: "1176 MOUNTAIN ROAD AMITY, AR 71921",
    Phone: "(870) 828-2056",
    DOT: "729700",
    MC_MX_FF: "729700",
    Power_units: "1",
    Out_of_service_date: "02/03/2024",
    Action:"Edit",

  },
  {
    id: 3,
    Created_DT: "2023-11-16 12:00:05+00",
    Modifed_DT: "2024-07-23 01:47:50+00",
    Operating_status: "NOT AUTHORIZED",
    Legal_name: "Arshad",
    DBA_name: "SOUTH MOUNTAIN TRUCKING",
    Physical_address: "1176 MOUNTAIN ROAD AMITY, AR 71921",
    Phone: "(870) 828-2056",
    DOT: "729700",
    MC_MX_FF: "729700",
    Power_units: "14",
    Out_of_service_date: "02/03/2024",
  },
  {
    id: 4,
    Created_DT: "2023-11-16 12:00:05+00",
    Modifed_DT: "2024-07-23 01:47:50+00",
    Operating_status: "NOT AUTHORIZED",
    Legal_name: "Qasim",
    DBA_name: "Eeast MOUNTAIN ",
    Physical_address: "1176 MOUNTAIN ROAD AMITY, AR 71921",
    Phone: "(870) 828-2056",
    DOT: "729700",
    MC_MX_FF: "729700",
    Power_units: "8",
    Out_of_service_date: "02/03/2024",
    Action:"Edit",
  },
  {
    id: 5,
    Created_DT: "2023-11-16 12:00:05+00",
    Modifed_DT: "2024-07-23 01:47:50+00",
    Operating_status: "NOT AUTHORIZED",
    Legal_name: "THOMAS WALDRUM",
    DBA_name: "west MOUNTAIN TRUCKING",
    Physical_address: "1176 MOUNTAIN ROAD AMITY, AR 71921",
    Phone: "(870) 828-2056",
    DOT: "729700",
    MC_MX_FF: "729700",
    Power_units: "13",
    Out_of_service_date: "02/03/2024",
  },
  {
    id: 6,
    Created_DT: "2023-11-16 12:00:05+00",
    Modifed_DT: "2024-07-23 01:47:50+00",
    Operating_status: "NOT AUTHORIZED",
    Legal_name: "THOMAS WALDRUM",
    DBA_name: "north MOUNTAIN TRUCKING",
    Physical_address: "1176 MOUNTAIN ROAD AMITY, AR 71921",
    Phone: "(870) 828-2056",
    DOT: "729700",
    MC_MX_FF: "729700",
    Power_units: "9",
    Out_of_service_date: "02/03/2024",
  },
  {
    id: 7,
    Created_DT: "2023-11-16 12:00:05+00",
    Modifed_DT: "2024-07-23 01:47:50+00",
    Operating_status: "NOT AUTHORIZED",
    Legal_name: "THOMAS WALDRUM",
    DBA_name: "sOUTH MOUNTAIN TRUCKING",
    Physical_address: "1176 MOUNTAIN ROAD AMITY, AR 71921",
    Phone: "(870) 828-2056",
    DOT: "729700",
    MC_MX_FF: "729700",
    Power_units: "5",
    Out_of_service_date: "02/03/2024",
  },
  {
    id: 8,
    Created_DT: "2023-11-16 12:00:05+00",
    Modifed_DT: "2024-07-23 01:47:50+00",
    Operating_status: "NOT AUTHORIZED",
    Legal_name: "THOMAS WALDRUM",
    DBA_name: "east MOUNTAIN TRUCKING",
    Physical_address: "1176 MOUNTAIN ROAD AMITY, AR 71921",
    Phone: "(870) 828-2056",
    DOT: "729700",
    MC_MX_FF: "729700",
    Power_units: "20",
    Out_of_service_date: "02/03/2024",
  },
  {
    id: 9,
    Created_DT: "2023-11-16 12:00:05+00",
    Modifed_DT: "2024-07-23 01:47:50+00",
    Operating_status: "NOT AUTHORIZED",
    Legal_name: "THOMAS WALDRUM",
    DBA_name: "SOUTH MOUNTAIN TRUCKING",
    Physical_address: "1176 MOUNTAIN ROAD AMITY, AR 71921",
    Phone: "(870) 828-2056",
    DOT: "729700",
    MC_MX_FF: "729700",
    Power_units: "3",
    Out_of_service_date: "02/03/2024",
  },
  {
    id: 10,
    Created_DT: "2023-11-16 12:00:05+00",
    Modifed_DT: "2024-07-23 01:47:50+00",
    Operating_status: "NOT AUTHORIZED",
    Legal_name: "THOMAS WALDRUM",
    DBA_name: "west MOUNTAIN TRUCKING",
    Physical_address: "1176 MOUNTAIN ROAD AMITY, AR 71921",
    Phone: "(870) 828-2056",
    DOT: "729700",
    MC_MX_FF: "729700",
    Power_units: "1",
    Out_of_service_date: "02/03/2024",
  },
  {
    id: 11,
    Created_DT: "2023-11-16 12:00:05+00",
    Modifed_DT: "2024-07-23 01:47:50+00",
    Operating_status: "NOT AUTHORIZED",
    Legal_name: "THOMAS WALDRUM",
    DBA_name: "east MOUNTAIN TRUCKING",
    Physical_address: "1176 MOUNTAIN ROAD AMITY, AR 71921",
    Phone: "(870) 828-2056",
    DOT: "729700",
    MC_MX_FF: "729700",
    Power_units: "10",
    Out_of_service_date: "02/03/2024",
  },
  {
    id: 12,
    Created_DT: "2023-11-16 12:00:05+00",
    Modifed_DT: "2024-07-23 01:47:50+00",
    Operating_status: "NOT AUTHORIZED",
    Legal_name: "THOMAS WALDRUM",
    DBA_name: "SOUTH MOUNTAIN TRUCKING",
    Physical_address: "1176 MOUNTAIN ROAD AMITY, AR 71921",
    Phone: "(870) 828-2056",
    DOT: "729700",
    MC_MX_FF: "729700",
    Power_units: "7",
    Out_of_service_date: "02/03/2024",
  },
  {
    id: 13,
    Created_DT: "2023-11-16 12:00:05+00",
    Modifed_DT: "2024-07-23 01:47:50+00",
    Operating_status: "NOT AUTHORIZED",
    Legal_name: "THOMAS WALDRUM",
    DBA_name: "SOUTH MOUNTAIN TRUCKING",
    Physical_address: "1176 MOUNTAIN ROAD AMITY, AR 71921",
    Phone: "(870) 828-2056",
    DOT: "729700",
    MC_MX_FF: "729700",
    Power_units: "22",
    Out_of_service_date: "02/03/2024",
  },
  {
    id: 14,
    Created_DT: "2023-11-16 12:00:05+00",
    Modifed_DT: "2024-07-23 01:47:50+00",
    Operating_status: "NOT AUTHORIZED",
    Legal_name: "THOMAS WALDRUM",
    DBA_name: "north MOUNTAIN TRUCKING",
    Physical_address: "1176 MOUNTAIN ROAD AMITY, AR 71921",
    Phone: "(870) 828-2056",
    DOT: "729700",
    MC_MX_FF: "729700",
    Power_units: "33",
    Out_of_service_date: "02/03/2024",
  },
  {
    id: 15,
    Created_DT: "2023-11-16 12:00:05+00",
    Modifed_DT: "2024-07-23 01:47:50+00",
    Operating_status: "NOT AUTHORIZED",
    Legal_name: "THOMAS WALDRUM",
    DBA_name: "SOUTH MOUNTAIN TRUCKING",
    Physical_address: "1176 MOUNTAIN ROAD AMITY, AR 71921",
    Phone: "(870) 828-2056",
    DOT: "729700",
    MC_MX_FF: "729700",
    Power_units: "21",
    Out_of_service_date: "02/03/2024",
  },
  {
    id: 16,
    Created_DT: "2023-11-16 12:00:05+00",
    Modifed_DT: "2024-07-23 01:47:50+00",
    Operating_status: "NOT AUTHORIZED",
    Legal_name: "THOMAS WALDRUM",
    DBA_name: "SOUTH MOUNTAIN TRUCKING",
    Physical_address: "1176 MOUNTAIN ROAD AMITY, AR 71921",
    Phone: "(870) 828-2056",
    DOT: "729700",
    MC_MX_FF: "729700",
    Power_units: "34",
    Out_of_service_date: "02/03/2024",
  },
  {
    id: 17,
    Created_DT: "2023-11-16 12:00:05+00",
    Modifed_DT: "2024-07-23 01:47:50+00",
    Operating_status: "NOT AUTHORIZED",
    Legal_name: "THOMAS WALDRUM",
    DBA_name: "SOUTH MOUNTAIN TRUCKING",
    Physical_address: "1176 MOUNTAIN ROAD AMITY, AR 71921",
    Phone: "(870) 828-2056",
    DOT: "729700",
    MC_MX_FF: "729700",
    Power_units: "28",
    Out_of_service_date: "02/03/2024",
  },
];

const SampleTable = () => {
  const [record, setRecord] = useState(rows);
  const [filterQuery, setFilterQuery] = useState("");

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilterQuery(value);
    const newRecord = rows.filter((item) =>
      item.Legal_name.toLowerCase().startsWith(value.toLowerCase())
    );
    setRecord(newRecord);
  };

  const handleRowClick = (params: any) => {
    console.log("Row clicked:", params);
  };

  const handleRowEdit = () => {
    console.log("Row edit triggered");
  };

  const handleRowDelete = () => {
    console.log("Row delete triggered");
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <CustomFilter filterQuery={filterQuery} handleFilter={handleFilter} />
        <CustomDataGrid
          columns={columns}
          rows={record}
          onRowClick={handleRowClick}
          onRowEdit={handleRowEdit}
          onRowDelete={handleRowDelete}
        />
      </div>
    </>
  );
};

export default SampleTable;
