import Button from '@mui/material/Button';

const SubmitButton = props => {
  return (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      style={{
        height: '50px',
      }}
      {...props}
    >
      {props.children}
    </Button>
  )
}

export default SubmitButton;