import { React, useState } from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";

import AddForm from "../../pages/distributors/components/AddForm";
import ButtonComponent from "../../components/Button";
import ModalComponent from "../../components/Modal";
import DistributorsTable from "./components/DistributorsTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function Distributors() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const addForm = <AddForm closeModal={closeModal} />;

  return (
    <QueryClientProvider client={queryClient}>
      <Box m="20px 20px 0 20px">
        <Header title="Distributors" description="Manage your distributors" />
        <Box display="flex" justifyContent="end">
          <ButtonComponent
            action={openModal}
            label="Add Distributor"
            color="secondary"
            variant="contained"
          />
        </Box>
        <ModalComponent
          open={isModalOpen}
          onClose={closeModal}
          width={800}
          component={addForm}
        />

        <Box>
          <DistributorsTable />
        </Box>
      </Box>
    </QueryClientProvider>
  );
}
