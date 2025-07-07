// // דף התחברות

// LoginRegisterPage.tsx
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Tabs, Tab } from '@mui/material';
import { login, register } from '../services/authService'; // ודאי שהנתיב נכון
import { useNavigate } from 'react-router-dom';

const LoginRegisterPage = () => {
  const [loginMode, setLoginMode] = useState(0); // 0=login, 1=register

  const [formRegister, setFormRegister] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    fileImageProfile: null as File | null
  });

  const [formLogin, setFormLogin] = useState({
    name: '',
    password: '',
    email:''
  });

const navigate= useNavigate();

  const handleChangeTab = (_event: any, newValue: number) => {
    setLoginMode(newValue);
    if (newValue === 1)
      setFormRegister({ id: '', name: '', email: '', password: '', fileImageProfile: null });
    else
      setFormLogin({ name: '', password: '',email:'' });
  };

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;

  //   if (loginMode === 1) {
  //     setFormRegister(prev => ({ ...prev, [name]: value }));
  //   } else {
  //     setFormLogin(prev => ({ ...prev, [name]: value }));
  //   }
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value, files } = e.target;
  if (loginMode === 1) {
    if (name === 'fileImageProfile' && files && files.length > 0) {
      setFormRegister(prev => ({ ...prev, fileImageProfile: files[0] }));
    } else {
      setFormRegister(prev => ({ ...prev, [name]: value }));
    }
  } else {
    setFormLogin(prev => ({ ...prev, [name]: value }));
  }
};

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (loginMode === 1) {
    // Register
    if (!formRegister.email || !formRegister.password || !formRegister.name) {
      alert('Please fill all required fields');
      return;
    }

    try {
      await register(formRegister);
      alert('Registration successful!');
      navigate('/Home');  // מעבר לדף הבית אחרי רישום
    } catch (error) {
      alert('Registration failed.');
      console.error(error);
    }
  } else {
    // Login
    if (!formLogin.name || !formLogin.password) {
      alert('Please enter name and password');
      return;
    }

    try {
      const result = await login(formLogin);
      localStorage.setItem('token', result.token);
      alert('Login successful!');
      navigate('/Home');  // מעבר לדף הבית אחרי התחברות
    } catch (error) {
      alert('Login failed.');
      console.error(error);
    }
  }
};


  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {loginMode === 0 ? 'Login' : 'Register'}
        </Typography>

        <Tabs value={loginMode} onChange={handleChangeTab}>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          {loginMode === 1 && (
            <TextField
              label="Email"
              name="email"
              fullWidth
              margin="normal"
              value={formRegister.email}
              onChange={handleInputChange}
            />
          )}

          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            value={loginMode === 1 ? formRegister.name : formLogin.name}
            onChange={handleInputChange}
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            value={loginMode === 1 ? formRegister.password : formLogin.password}
            onChange={handleInputChange}
          />

          {loginMode === 1 && (
            <TextField
              fullWidth
              label="Profile Image"
              margin="normal"
              variant="outlined"
              name="fileImageProfile"
              type="file"
              InputLabelProps={{ shrink: true }}
              onChange={handleInputChange}
            />
          )}

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            {loginMode === 0 ? 'Login' : 'Register'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginRegisterPage;


// import React, { useState } from 'react';
// import { Container, TextField, Button, Typography, Box, Tabs, Tab } from '@mui/material';
// import { login, register } from '../services/authService'

// const LoginRegisterPage = () => {
//   const [loginMode, setLoginMode] = useState(0); // 0=login, 1=register
//   const [formRegister, setFormRegister] = useState({
//     id: '',
//     name: '',
//     email: '',
//     password: '',
//     profileImage: '',
//   });
//   const [formLogin, setFormLogin] = useState({
//     name: '',
//     password: '',
//     email:''
//   });

//   const handleChangeTab = (_event: any, newValue: number) => {
//     setLoginMode(newValue);
//     if (newValue === 1)
//       setFormRegister({ name: '', email: '', password: '', profileImage: '', id: '' }); // reset form
//     else
//       setFormLogin({ name: '', password: '',email:'' });

//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormRegister((prev) => ({ ...prev, [name]: value }));
//   };
//   //a new function "handle-submit" that connecting to the server
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (loginMode === 1) {
//       // Register
//       if (!formRegister.email || !formRegister.password || !formRegister.name) {
//         alert('Please fill all required fields');
//         return;
//       }

//       try {
//         await register(formRegister);
//         alert('Registration successful. You can now log in.');
//         setLoginMode(0); // Switch to login tab
//       } catch (error) {
//         alert('Registration failed');
//         console.error(error);
//       }

//     } else {
//       // Login
//       if (!formLogin.name || !formLogin.password) {
//         alert('Please enter name and password');
//         return;
//       }

//       try {
//         const result = await login(formLogin);
//         localStorage.setItem('token', result.token); // שומר את הטוקן
//         alert('Login successful!');
//         // פה אפשר להפנות לדף הבית או פרופיל:
//         // navigate('/home'); ← אם יש לך useNavigate
//       } catch (error: unknown) {
//         if (error instanceof Error) {
//           alert('Login failed: ' + error.message);
//         } else {
//           alert('Login failed: unknown error');
//         }
//       }
//     };
//   }
  

//     // const handleSubmit = (e: React.FormEvent) => {
//     //   e.preventDefault();
//     //   if (login === 1) {
//     //     // Register
//     //     if (!formRegister.email || !formRegister.password || !formRegister.name) {
//     //       alert('Please fill all required fields');
//     //       return;
//     //     }

//     //     const user = {
//     //       id:formRegister.id,
//     //       name: formRegister.name,
//     //       email: formRegister.email,
//     //       password: formRegister.password,
//     //       profileImage: formRegister.profileImage,
//     //     };
//     //     console.log(sessionStorage.getItem.toString());

//     //     console.log("reg : "+ formRegister.name);
//     //     console.log("login : "+ formLogin.name);

//     //     // sessionStorage.setItem(`user_${formRegister.email}`, JSON.stringify(user));
//     //     alert('Registration successful. You can now log in.');
//     //     setLogin(0); // Switch to login tab
//     //   } else {
//     //     // Login
//     //     console.log("lll: "+sessionStorage.getItem.toString());

//     //     const stored_pass_reg = sessionStorage.getItem(`user_${formRegister.password}`);
//     //     const stored_name_reg = sessionStorage.getItem(`user_${formRegister.name}`);


//     //     // const stored_email = sessionStorage.getItem(`user_${form.email}`);
//     //     console.log(stored_pass_reg);
//     //     console.log(stored_name_reg);
//     //     // console.log(stored_email);
//     //     //
//     //     console.log(formLogin.password);
//     //     console.log(formLogin);
//     //     const stored_pass_log = sessionStorage.getItem(`user_${formLogin.password}`);
//     //     const stored_name_log = sessionStorage.getItem(`user_${formLogin.name}`);

//     //     if (stored_name_reg !== stored_name_log && stored_pass_reg !==  stored_pass_log) {
//     //       alert('User not found.');
//     //       return;
//     //     }
//     //     else{
//     //       alert('connected!!');
//     //     }

//     //     // const storedUser = JSON.parse(stored_pass?.toString());
//     //     // if (storedUser.password !== form.password) {
//     //     //   alert('Incorrect password.');
//     //     //   return;
//     //     // }

//     //     // localStorage.setItem('loggedUser', JSON.stringify(storedUser));
//     //     // alert(`Welcome, ${storedUser.name}!`);
//     //   }
//     // };

//     return (
//       <Container maxWidth="sm">
//         <Box sx={{ mt: 4 }}>
//           <Typography variant="h4" component="h1" gutterBottom>
//             {loginMode === 0 ? 'Login' : 'Register'}
//           </Typography>

//           <Tabs value={loginMode} onChange={handleChangeTab}>
//             <Tab label="Login" />
//             <Tab label="Register" />
//           </Tabs>

//           <Box component="form" sx={{ mt: 2 }} onSubmit={handleSubmit}>
//             {loginMode === 1 && (
//               <TextField
//                 fullWidth
//                 label="Email"
//                 margin="normal"
//                 variant="outlined"
//                 name="email"
//                 type="email"
//                 value={formRegister.email}
//                 onChange={handleInputChange}
//               />
//             )}
//             <TextField
//               fullWidth
//               label="Name"
//               margin="normal"
//               variant="outlined"
//               name="name"
//               value={formRegister.name}
//               onChange={handleInputChange}
//             />
//             <TextField
//               fullWidth
//               label="Password"
//               margin="normal"
//               variant="outlined"
//               name="password"
//               type="password"
//               value={formRegister.password}
//               onChange={handleInputChange}
//             />
//             {loginMode === 1 && (
//               <TextField
//                 fullWidth
//                 label="Profile Image"
//                 margin="normal"
//                 variant="outlined"
//                 name="profileImage"
//                 value={formRegister.profileImage}
//                 onChange={handleInputChange}
//               />)}

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               sx={{ mt: 2 }}
//             >
//               {loginMode === 0 ? 'Login' : 'Register'}
//             </Button>
//           </Box>
//         </Box>
//       </Container>
//     );
//   };
//   export default LoginRegisterPage;