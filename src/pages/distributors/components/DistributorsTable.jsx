import React from "react";
import Table from "../../../components/Table";
import { Box } from "@mui/material";
import useGetAllDistributors from "../hooks/getAllDistributors";
import ButtonGroupComponent from "../../../components/ButtonGroup";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
export default function DistributorsTable() {
  const { isPending, error, data } = useGetAllDistributors();

  const groupButtons = (params) => (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      gap="20px"
    >
      <EditButton params={params} />
      <DeleteButton params={params} />
    </Box>
  );

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
      cellclassName: "name-column--cell",
    },
    {
      field: "lastName",
      headerName: "Last  Name",
      flex: 1,
      cellclassName: "name-column--cell",
    },

    {
      field: "phoneNo",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address1",
      headerName: "Address 1",
      flex: 1,
    },
    {
      field: "address2",
      headerName: "Address 2",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        <Box>
          <ButtonGroupComponent component={groupButtons(params)} />
        </Box>
      ),
    },
  ];

  if (isPending)
    return (
      <Box display="flex" justifyContent="center">
        <h3>Loading Table...</h3>
      </Box>
    );

  if (error) return "An error has occurred: " + error.message;

  return <Table rows={data} columns={columns} />;
}
