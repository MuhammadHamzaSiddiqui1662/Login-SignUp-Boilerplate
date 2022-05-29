import { useFormik } from "formik";
import * as yup from "yup";
import axios from 'axios';
import SubmitButton from "./../SubmitButton/SubmitButton";
import Input from "../Textarea/Textarea";
import { style } from "./Login.style.js";
import { withStyles } from '@mui/styles';
import {
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string("Enter Your Name")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter Your Password")
    .min(8, "Password Should be of min length of 8")
    .required("Password is required"),
});

const Login = ({ classes }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      verifyUser(values);
    },
  });
  const verifyUser = async ({ email, password }) => {
    const user = await axios.get(`http://localhost:5000/todo?email=${email}&password=${password}`);
    console.log(user);
  }
  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <Grid className={classes.container} container sm={12} spacing={2}>
        <Grid item sm={12}>
          <Typography variant="h3" component="h2" color='primary'>
            Login
          </Typography>
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
        <Grid item sm={12} style={{
          fontSize: '13px',
          color: '#666'
        }}>
          Forgot Passwors? <Link to="/"><b>Reset</b></Link> now!
        </Grid>
        <Grid item sm={12}>
          <SubmitButton fullWidth >Verify</SubmitButton>
        </Grid>
        <Grid item sm={12}>
          <p>Don't have any account? <Link to="/signup"><b>Register</b></Link> here.</p>
        </Grid>
      </Grid>
    </form>
  );
};
export default withStyles(style)(Login);