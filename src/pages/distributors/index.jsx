import { React, useState } from "react";
import { Box, Button, Modal, IconButton } from "@mui/material";
import Header from "../../components/Header";
import Table from "../../components/Table";
import AddForm from "../../pages/distributors/AddForm";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { DistributorService } from "../../services/DatabaseService";
import CloseIcon from "@mui/icons-material/Close";
const queryClient = new QueryClient();
export default function Distributors() {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const handleOpenCreateModal = () => setOpenCreateModal(true);
  const handleCloseCreateModal = () => setOpenCreateModal(false);
  return (
    <QueryClientProvider client={queryClient}>
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
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 800, // Set the width of the modal here
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            <IconButton
              onClick={handleCloseCreateModal}
              style={{ position: "absolute", top: 5, right: 5 }}
            >
              <CloseIcon />
            </IconButton>
            <AddForm />
          </Box>
        </Modal>

        <Box>
          <DistributorsTable />
        </Box>
      </Box>
    </QueryClientProvider>
  );
}

function DistributorsTable() {
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
  ];
  const { isPending, error, data } = useQuery({
    queryKey: ["getAllDistributors"],
    queryFn: DistributorService.getAll,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return <Table rows={data} columns={columns} />;
}
