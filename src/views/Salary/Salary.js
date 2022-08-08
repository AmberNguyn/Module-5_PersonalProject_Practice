import Alert from 'react-bootstrap/Alert';

function Salary() {
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}


<Alert key='success' variant='success'>
        Added successfully!
      </Alert>



    </>
  );
}

export default Salary;