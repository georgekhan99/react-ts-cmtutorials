import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, Stack, SxProps, Theme } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { User } from "../../../types/user.type";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  const Navigate = useNavigate();
  const [account, SetAccount] = React.useState({ username: "", password: "" });

  const classes: SxProps<Theme> | any = {
    root: {
      display: "flex",
      justifyContent: "center",
    },
  };
  const showFormV2 = ({
    handleSubmit,
    handleChange,
    isSubmitting,
    values,
  }: FormikProps<User>) => {
    return (
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          onChange={handleChange}
          value={values.username}
          autoComplete="email"
          autoFocus
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          onChange={handleChange}
          value={values.password}
          type="password"
        />
        <br />

        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => Navigate("/register")}
            type="button"
            fullWidth
            variant="outlined"
          >
            Register
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Create
          </Button>
        </Stack>
      </form>
    );
  };

  const initialValues: User = { username: "lek", password: "xxxx" };

  return (
    <>
      <Box sx={classes.root}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Login
            </Typography>
            <Formik
              onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values));

                setTimeout(() => {
                  setSubmitting(false);
                }, 2000);
              }}
              initialValues={initialValues}
            >
              {(props) => showFormV2(props)}
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default LoginPage;
