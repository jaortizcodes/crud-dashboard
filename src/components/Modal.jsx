import React from "react";
import { Modal, Box, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
export default function ModalComponent({ open, onClose, component, width }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { width },
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <IconButton
          onClick={onClose}
          style={{ position: "absolute", top: 5, right: 5 }}
        >
          <CloseIcon />
        </IconButton>
        {component}
      </Box>
    </Modal>
  );
}
