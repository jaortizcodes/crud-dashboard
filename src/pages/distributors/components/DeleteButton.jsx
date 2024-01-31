import { React, useState } from "react";
import ButtonComponent from "../../../components/Button";
import { Delete } from "@mui/icons-material";
import { Box } from "@mui/material";
import ModalComponent from "../../../components/Modal";
import { DistributorService } from "../../../services/DatabaseService";
import { toast } from "react-toastify";
import useGetAllDistributors from "../hooks/getAllDistributors";

export default function DeleteButton({ params }) {
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
  const { refetch } = useGetAllDistributors();
  const confirmDelete = async () => {
    await DistributorService.remove(params.params.row.id.toString());

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
