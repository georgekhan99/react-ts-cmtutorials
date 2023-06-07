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
import { httpClient } from "../../../utils/httpClient";
import { server } from "../../../Constant";
import * as registerActions from "../../../actions/register.action";
import { useDispatch, useSelector } from "react-redux";
import { RootReducers } from "../../../reducers";
import { useAppispatch } from "../../..";
type RegisterPageProps = {
  //
};

const RegisterPage: React.FC<any> = () => {
  const registerReducer = useSelector(
    (state: RootReducers) => state.registerReducer
  );

  const dispatch = useAppispatch();
  const Navigate = useNavigate();
  const [account, SetAccount] = React.useState({ username: "", password: "" });

  const classes: SxProps<Theme> | any = {
    root: {
      display: "flex",
      justifyContent: "center",
    },
  };

  const showFormV1 = ({
    handleSubmit,
    handleChange,
    isSubmitting,
    values,
  }: FormikProps<any>) => {
    return (
      <form onSubmit={handleSubmit}>
        <label>Username : </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="USERNAME"
          onChange={handleChange}
          value={values.username}
        />
        <br />
        <label>Password : </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="USERNAME"
          onChange={handleChange}
          value={values.password}
        />
        <br />
        <span> Debug : {JSON.stringify(account)} </span>
        <button disabled={isSubmitting} type="submit">
          {" "}
          Submit{" "}
        </button>
      </form>
    );
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
            onClick={() => Navigate(-1)}
            type="button"
            fullWidth
            variant="outlined"
          >
            Login
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

  const initialvalues: User = { username: "admin", password: "112233" };

  return (
    <>
      <Box sx={classes.root}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Register
            </Typography>
            <Formik
              onSubmit={async (values, { setSubmitting }) => {
                dispatch(registerActions.register(values));
              }}
              initialValues={initialvalues}
            >
              {(props) => showFormV2(props)}
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default RegisterPage;
