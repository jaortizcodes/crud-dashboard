import React, { useState } from "react";
import ButtonComponent from "../../../components/Button";
import { Edit } from "@mui/icons-material";
import { Box } from "@mui/material";
import ModalComponent from "../../../components/Modal";
import UserForm from "./UserForm";

export default function UserEditButton({ params }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isEditing = true;
  const openModal = () => {
    setIsModalOpen(true);
    console.log(params.row.lastName.toString());
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
        label={<Edit />}
      ></ButtonComponent>
      <ModalComponent
        open={isModalOpen}
        onClose={closeModal}
        width={800}
        component={
          <UserForm
            closeModal={closeModal}
            params={params}
            isEditing={isEditing}
          />
        }
      />
    </Box>
  );
}
