import { React, useState } from "react";
import { Box, Button, Modal, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Table from "../../components/Table";
import AddForm from "../../pages/distributors/AddForm";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { tokens } from "../../config/themes";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { DistributorService } from "../../services/DatabaseService";
import { mockDataTeam } from "../../data/mockData";
const queryClient = new QueryClient();
export default function Distributors() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const { data, status } = useQuery("distributors", DistributorService.getAll);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Full Name",
      flex: 1,
      cellclassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.pinkAccent[600]
                : colors.pinkAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.white[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const handleOpenCreateModal = () => setOpenCreateModal(true);
  const handleCloseCreateModal = () => setOpenCreateModal(false);
  return (
    <Box m="20px 20px 0 20px">
      <Header title="Distributors" description="Manage your distributors" />

      <Box display="flex" justifyContent="end">
        <Button
          type="button"
          onClick={handleOpenCreateModal}
          color="secondary"
          variant="contained"
        >
          Create New Distributor
        </Button>
      </Box>
      <Modal
        open={openCreateModal}
        onClose={handleCloseCreateModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddForm />
      </Modal>

      <Box>
        <Table rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
}
