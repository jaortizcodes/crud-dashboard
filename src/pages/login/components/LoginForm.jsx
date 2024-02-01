import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as yup from "yup";
import { UserService } from "../../../services/DatabaseService";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { Box, Button, TextField, Card, CardContent } from "@mui/material";
import { toast } from "react-toastify";

export default function LoginForm() {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };
  const loginSchema = yup.object().shape({
    username: yup.string().required("Required"),
    password: yup.string().required("Required"),
  });
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const handleLoginFormSubmit = async (values) => {
    try {
      const result = await UserService.signInAuth(values);
      console.log(result);
      if (result !== "400") {
        toast.success("Login successfully");
        const token = result.accessToken;
        const displayName = result.displayName;
        localStorage.setItem("authToken", token);
        localStorage.setItem("displayName", displayName);

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else toast.error("Error: Login failed.");
    } catch (error) {
      toast.error("Error: Login failed.");
    }
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Card sx={{ width: "30%" }}>
        <CardContent sx={{ textAlign: "center" }}>
          <h1>Login</h1>
          <Formik
            onSubmit={handleLoginFormSubmit}
            initialValues={initialValues}
            validationSchema={loginSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.username}
                    name="username"
                    error={!!touched.username && !!errors.username}
                    helperText={touched.username && errors.username}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="password"
                    label="Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    error={!!touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    sx={{ gridColumn: "span 4" }}
                  />
                </Box>
                <Box display="flex" justifyContent="center" mt="20px">
                  <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    fullWidth
                    style={{ maxHeight: "50px", minHeight: "50px" }}
                  >
                    Login
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Box>
  );
}
