// // import React, { useState } from 'react';
// // import {
// //   Box,
// //   Button,
// //   FormControl,
// //   FormHelperText,
// //   Input,
// //   InputAdornment,
// //   InputLabel,
// // //   makeStyles,
// //   MenuItem,
// //   Select,
// //   SelectChangeEvent,
// //   TextField,
// //   Typography,
// // } from '@mui/material';
// // // import { Visibility, VisibilityOff } from '@material-ui/icons';


// import {
//   Box,
//   Button,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   SelectChangeEvent,
//   TextField,
//   Typography,
// } from "@mui/material";

// import { useState } from "react";

// import { makeStyles } from '@material-ui/core';

// const useStyles = makeStyles((theme:any) => {
//   return {
//     root: {
//       display: 'flex',
//       position:'relative',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent:'center',
//       marginTop: theme.spacing(10),
//       marginBottom:"8rem"
//     },
//     form: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       width: '100%',
//       maxWidth: 400,
//       padding: theme.spacing(2),
//       borderRadius: theme.shape.borderRadius,
//       backgroundColor: theme.palette.background.paper,
//       boxShadow: theme.shadows[4],
//     },
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     submitButton: {
//       marginTop: theme.spacing(2),
//     },
//   }
 
// });

// // interface User {
// //   name: string;
// //   age: number;
// //   gender: string;
// //   username: string;
// //   password: string;
// //   confirmPassword: string;
// // }

// // export default function SignupPage() {
// //   const classes =useStyles();
// //   const [user, setUser] = useState<User>({
// //     name: '',
// //     age: 0,
// //     gender: '',
// //     username: '',
// //     password: '',
// //     confirmPassword: '',
// //   });
// //   const [errors, setErrors] = useState<string[]>([]);
// //   const [showPassword, setShowPassword] = useState<boolean>(false);
// //   const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

// //   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = event.target;
// //     setUser({ ...user, [name]: value });
// //   };
// //   const handleChange = (event: SelectChangeEvent) => {
// //     const value=event.target.value;
// //     setUser({ ...user, gender: value });
// //   };

// //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
// //     event.preventDefault();
// //     const validationErrors: string[] = [];

// //     if (!user.name) {
// //       validationErrors.push('Name is required.');
// //     }

// //     if (!user.age) {
// //       validationErrors.push('Age is required.');
// //     }

// //     if (!user.gender) {
// //       validationErrors.push('Gender is required.');
// //     }

// //     if (!user.username) {
// //       validationErrors.push('Username is required.');
// //     }

// //     if (!user.password) {
// //       validationErrors.push('Password is required.');
// //     } else if (user.password !== user.confirmPassword) {
// //       validationErrors.push('Passwords do not match.');
// //     }

// //     setErrors(validationErrors);

// //     if (validationErrors.length === 0) {
// //       // Submit the form
// //     }
// // };

// //   return (
// //     <Box className={classes.root}>
// //       <Typography variant="h5" component="h1">
// //         Sign Up
// //       </Typography>

// //       <form onSubmit={handleSubmit} className={classes.form}>
// //         <TextField
// //           id="name"
// //           name="name"
// //           label="Name"
// //           value={user.name}
// //           onChange={handleInputChange}
// //           margin="normal"
// //           required
// //         />

// //         <TextField
// //           id="age"
// //           name="age"
// //           label="Age"
// //           type="number"
// //           value={user.age}
// //           onChange={handleInputChange}
// //           margin="normal"
// //           required
// //         />
// //           <FormControl sx={{width:210}}>
// //             <InputLabel id="demo-simple-select-label">Gender</InputLabel>
// //             <Select
// //                 labelId="gender"
// //                 id="Gender"
// //                 value={user.gender}
// //                 label="Gender"
// //                 onChange={handleChange}
// //             >
// //                 <MenuItem value="Male">Male</MenuItem>
// //                 <MenuItem value="Female">Female</MenuItem>
// //                 <MenuItem value="Others">Others</MenuItem>
// //             </Select>
// //           </FormControl>

// //           <TextField
// //           id="username"
// //           name="username"
// //           label="Username"
// //           value={user.username}
// //           onChange={handleInputChange}
// //           margin="normal"
// //           required
// //         />
// //             <TextField
// //           id="password"
// //           name="password"
// //           label="Password"
// //           type="password"
// //           value={user.password}
// //           onChange={handleInputChange}
// //           margin="normal"
// //           required
// //         />
// //             <TextField
// //           id="confirmPassword"
// //           name="confirmPassword"
// //           label="Confirm Password"
// //           type="password"
// //           value={user.confirmPassword}
// //           onChange={handleInputChange}
// //           margin="normal"
// //           required
// //         />
// //         <Button>Submit</Button>
// //         </form>
// //         </Box>
// //   )
// // };

// export default function SignupPage() {
//   const classes=useStyles();
//   const [user, setUser] = useState({
//     name: "",
//     age: 0,
//     gender: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setUser({ ...user, [name]: value });
//   };
//     const handleChange = (event: SelectChangeEvent) => {
//     const value=event.target.value;
//     setUser({ ...user, gender: value });
//   };

//   return (
//     <Box
//     className={classes.root}
//     //   sx={{ display: "flex", flexDirection: "column", alignItems: "center",
//     //   position:'relative',
//     //   justifyContent:'center',
//     //   // marginTop: 10,
//     // paddingBottom:"8rem" }}
//     >
//       <Typography>Sign Up</Typography>
//       <form
//       className={classes.form}
//         // style={{
//         //   display: "flex",
//         //   flexDirection: "column",
//         //   alignItems: "center",
//         //   width: '100%',
//         //   maxWidth: 400,
//         //   padding: 2,
//         //   borderRadius: 2,
//         //   backgroundColor: '',
//         //   // boxShadow: 2,
//         // }}
//       >
//         {/* <Box className={styles.form}>

//         </Box> */}
//         <TextField
//           id="name"
//           name="name"
//           label="Name"
//           value={user.name}
//           onChange={handleInputChange}
//           margin="normal"
//           required
//         />
//         <TextField
//           id="age"
//           name="age"
//           label="Age"
//           value={user.age}
//           onChange={handleInputChange}
//           margin="normal"
//           required
//         />
//         <FormControl sx={{ width: 210 }}>
//           <InputLabel id="demo-simple-select-label">Gender</InputLabel>
//           <Select
//             labelId="gender"
//             id="Gender"
//             value={user.gender}
//             label="Gender"
//             onChange={handleChange}
//           >
//             <MenuItem value="Male">Male</MenuItem>
//             <MenuItem value="Female">Female</MenuItem>
//             <MenuItem value="Others">Others</MenuItem>
//           </Select>
//         </FormControl>
//         <TextField
//           id="username"
//           name="username"
//           label="Username"
//           value={user.username}
//           onChange={handleInputChange}
//           margin="normal"
//           required
//         />
//         <TextField
//           id="password"
//           name="password"
//           label="password"
//           type="password"
//           value={user.password}
//           onChange={handleInputChange}
//           margin="normal"
//           required
//         />
//         <TextField
//           id="confirmpassword"
//           name="confirmPassword"
//           label="Confirm Password"
//           type="password"
//           value={user.confirmPassword}
//           onChange={handleInputChange}
//           margin="normal"
//           required
//         />
//          <Button>Submit</Button>
//       </form>
//     </Box>
//   );
// }





import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width:'100%',
            maxWidth:400,
            paddingY:theme.spacing(2),
            paddingX:theme.spacing(4),
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
