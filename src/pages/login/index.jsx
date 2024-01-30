import { Box, Button, Card, CardContent, TextField } from "@mui/material";
import * as yup from "yup";
import { useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { Formik } from "formik";

export default function Login() {
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
    console.log(values);
    // //oauth
    // const { data, error } = await supabase.auth.signInWithOAuth({
    //   provider: "github",
    //   options: {
    //     redirectTo: "https://localhost:3000/dashboard",
    //   },
    // });
    // console.log(error, data);
  };
  //oauth
  // async function getSession() {
  //   const {
  //     data: { session },
  //   } = await supabase.auth.getSession();
  //   console.log(session);
  // }
  // useEffect(() => {
  //   getSession();
  // }, []);

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
                    type="text"
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
