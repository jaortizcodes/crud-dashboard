import React, { useState } from "react";
import ButtonComponent from "../../../components/Button";
import { Box } from "@mui/material";
import ModalComponent from "../../../components/Modal";
import { UserService } from "../../../services/DatabaseService";
import { Delete } from "@mui/icons-material";
import { toast } from "react-toastify";
import useGetAllUsers from "../hooks/getAllUsers";

export default function UserDeleteButton({ params }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box>
      <ButtonComponent
        type="button"
        action={openModal}
        color="primary"
        variant="contained"
        label={<Delete />}
      ></ButtonComponent>
      <ModalComponent
        open={isModalOpen}
        onClose={closeModal}
        width={400}
        component={DeletePrompt(closeModal, (params = { params }))}
      />
    </Box>
  );
}

function DeletePrompt(closeModal, params) {
  const { refetch } = useGetAllUsers();
  const confirmDelete = async () => {
    await UserService.remove(params.params.row.id.toString());

    toast.success("Data deleted successfully");
    console.log("Deleted");
    await refetch();
    closeModal();
  };
  return (
    <Box>
      <h3>Do you really want to delete this data?</h3>
      <p>ID: {params.params.row.id}</p>
      <p>Lastname: {params.params.row.lastName}</p>
      <p>Firstname: {params.params.row.firstName}</p>
      <Box display="flex" justifyContent="end" gap="20px">
        <ButtonComponent
          type="button"
          action={confirmDelete}
          color="secondary"
          variant="contained"
          label="Yes"
          disabled={false}
        ></ButtonComponent>
        <ButtonComponent
          type="button"
          action={closeModal}
          color="primary"
          variant="contained"
          label="No"
        ></ButtonComponent>
      </Box>
    </Box>
  );
}
