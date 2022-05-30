import { makeStyles } from '@mui/material';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Input from '../Textarea/Textarea';

const useStyle = makeStyles({
  container: {
    width: '70%',
    minHeight: '50%',
    boxShadow: '0px 0px 5px 5px black'
  }
});

function Todo({ user, setLoading }) {
  const classes = useStyle();
  if (!user._id) {
    return (<Navigate to="/login" />)
  }
  return (
    <div className={classes.container}>
      <Link to="/login" ><h1>Log Out</h1></Link>
      <Input />
    </div>
  );
}

export default Todo;