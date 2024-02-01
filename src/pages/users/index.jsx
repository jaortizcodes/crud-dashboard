import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import ButtonComponent from "../../components/Button";
import ModalComponent from "../../components/Modal";
import UserForm from "./components/UserForm";
import UsersTable from "./components/UsersTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function Users() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const userForm = <UserForm closeModal={closeModal} />;
  return (
    <QueryClientProvider client={queryClient}>
      <Box m="20px 20px 0 20px">
        <Header title="Distributors" description="Manage your distributors" />
        <Box display="flex" justifyContent="end">
          <ButtonComponent
            action={openModal}
            label="Add User"
            color="secondary"
            variant="contained"
          />
        </Box>
        <ModalComponent
          open={isModalOpen}
          onClose={closeModal}
          width={800}
          component={userForm}
        />

        <Box>
          <UsersTable />
        </Box>
      </Box>
    </QueryClientProvider>
  );
}
