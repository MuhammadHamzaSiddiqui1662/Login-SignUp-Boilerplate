import { useFormik } from "formik";
import * as yup from "yup";
import axios from 'axios';
import SubmitButton from "./../SubmitButton/SubmitButton";
import Input from "../Textarea/Textarea";
import { style } from "./SignUp.style.js";
import { withStyles } from '@mui/styles';
import {
  Grid,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter Your Firstname")
    .required("Firstname is required"),
  lastName: yup.string("Enter Your Lastname").required("Lastname is required"),
  email: yup
    .string("Enter Your Name")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter Your Password")
    .min(8, "Password Should be of min length of 8")
    .required("Password is required"),
});

const SignUp = ({ classes, setUser, setLoading }) => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      createUser(values);
    },
  });

  const createUser = async ({ firstName, lastName, email, password }) => {
    const res = await axios.get(`http://localhost:5000/todo?email=${email}`);
    if (res.data.length === 0) {
      const user = await axios.post('http://localhost:5000/todo/users', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      })
      setUser(user.data);
    }
    else {
      alert("User with this email already exist,\nTry with any other email.");
    }
    setLoading(false);
    navigate("/todo");
  }

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <Grid className={classes.container} container sm={12} spacing={2}>
        <Grid item sm={12}>
          <Typography variant="h3" component="h2" color='primary'>
            Sign Up
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Grid container sm={12} spacing={1}>
            <Grid item sm={12} md={6}>
              <Input
                id="firstName"
                name="firstName"
                label="Firstname"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <Input
                id="lastName"
                name="lastName"
                label="LastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={12}>
          <Input
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item sm={12}>
          <Input
            id="password"
            name="password"
            type="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={
              formik.touched.password && Boolean(formik.errors.password)
            }
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
        <Grid item sm={12}>
          <SubmitButton fullWidth >Create Account</SubmitButton>
        </Grid>
        <Grid item sm={12}>
          <p>Already has an account? <Link to="/login"><b>Login</b></Link> here.</p>
        </Grid>
      </Grid>
    </form>
  );
};
export default withStyles(style)(SignUp);