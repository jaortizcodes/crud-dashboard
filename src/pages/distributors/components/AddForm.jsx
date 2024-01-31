import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Formik } from "formik";
import { Box, Button, TextField, Typography } from "@mui/material";
import { DistributorService } from "../../../services/DatabaseService";
import { toast } from "react-toastify";
import { distributorSchema } from "../../../utils/schema";
import useGetAllDistributors from "../hooks/getAllDistributors";

export default function AddForm({ closeModal, isEditing, params }) {
  const { refetch } = useGetAllDistributors();
  const isNotMobile = useMediaQuery("(min-width: 600px)");
  const modalHeader = isEditing ? "Edit Distributor" : "Add Distributor";
  const initialValues = isEditing
    ? {
        id: params.row.id,
        firstName: params.row.firstName.toString(),
        lastName: params.row.lastName.toString(),
        email: params.row.email.toString(),
        phoneNo: params.row.phoneNo.toString(),
        address1: params.row.address1.toString(),
        address2: params.row.address2.toString(),
      }
    : {
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        address1: "",
        address2: "",
      };
  const handleFormSubmit = async (values, { resetForm }) => {
    if (isEditing) {
      try {
        console.log(values.id);
        await DistributorService.update(values.id, values);

        toast.success("Distributor data is updated successfully");
        resetForm();
        refetch();
        closeModal();
      } catch (error) {
        toast.error("Error: Something went wrong.");
      }
    } else {
      try {
        console.log(values);
        await DistributorService.create(values);

        toast.success("Distributor created successfully");
        resetForm();
        refetch();
        closeModal();
      } catch (error) {
        toast.error("Error: Something went wrong.");
      }
    }
  };
  return (
    <Box m="20px">
      <Typography variant="h3" fontWeight="bold" my="20px">
        {modalHeader}
      </Typography>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={distributorSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": {
                  gridColumn: isNotMobile ? undefined : "span 4",
                },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phoneNo}
                name="phoneNo"
                error={!!touched.phoneNo && !!errors.phoneNo}
                helperText={touched.phoneNo && errors.phoneNo}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                disabled={isSubmitting}
              >
                Create
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}
