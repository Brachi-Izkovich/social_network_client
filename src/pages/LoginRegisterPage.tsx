// דף התחברות


import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Tabs, Tab } from '@mui/material';

const LoginRegisterPage = () => {
  const [login, setLogin] = useState(0); // 0=login, 1=register
  const [formRegister, setFormRegister] = useState({
    id:'',
    name: '',
    email: '',
    password: '',
    profileImage: '',
  });
  const [formLogin, setFormLogin] = useState({
    name: '',
    password: '',
  });

  const handleChangeTab = (_event: any, newValue: number) => {
    setLogin(newValue);
    if(newValue === 1)
      setFormRegister({ name: '', email: '', password: '', profileImage: '' ,id:''}); // reset form
    else
      setFormLogin({name: '', password: ''});

  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormRegister((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login === 1) {
      // Register
      if (!formRegister.email || !formRegister.password || !formRegister.name) {
        alert('Please fill all required fields');
        return;
      }

      const user = {
        id:formRegister.id,
        name: formRegister.name,
        email: formRegister.email,
        password: formRegister.password,
        profileImage: formRegister.profileImage,
      };
      console.log(sessionStorage.getItem.toString());

      console.log("reg : "+ formRegister.name);
      console.log("login : "+ formLogin.name);

      // sessionStorage.setItem(`user_${formRegister.email}`, JSON.stringify(user));
      alert('Registration successful. You can now log in.');
      setLogin(0); // Switch to login tab
    } else {
      // Login
      console.log("lll: "+sessionStorage.getItem.toString());
      
      const stored_pass_reg = sessionStorage.getItem(`user_${formRegister.password}`);
      const stored_name_reg = sessionStorage.getItem(`user_${formRegister.name}`);
      

      // const stored_email = sessionStorage.getItem(`user_${form.email}`);
      console.log(stored_pass_reg);
      console.log(stored_name_reg);
      // console.log(stored_email);
      //
      console.log(formLogin.password);
      console.log(formLogin);
      const stored_pass_log = sessionStorage.getItem(`user_${formLogin.password}`);
      const stored_name_log = sessionStorage.getItem(`user_${formLogin.name}`);

      if (stored_name_reg !== stored_name_log && stored_pass_reg !==  stored_pass_log) {
        alert('User not found.');
        return;
      }
      else{
        alert('connected!!');
      }

      // const storedUser = JSON.parse(stored_pass?.toString());
      // if (storedUser.password !== form.password) {
      //   alert('Incorrect password.');
      //   return;
      // }

      // localStorage.setItem('loggedUser', JSON.stringify(storedUser));
      // alert(`Welcome, ${storedUser.name}!`);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {login === 0 ? 'Login' : 'Register'}
        </Typography>

        <Tabs value={login} onChange={handleChangeTab}>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>

        <Box component="form" sx={{ mt: 2 }} onSubmit={handleSubmit}>
          {login === 1 && (
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              variant="outlined"
              name="email"
              type="email"
              value={formRegister.email}
              onChange={handleInputChange}
            />
          )}
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            variant="outlined"
            name="name"
            value={formRegister.name}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            variant="outlined"
            name="password"
            type="password"
            value={formRegister.password}
            onChange={handleInputChange}
          />
          {login === 1 &&(
          <TextField
            fullWidth
            label="Profile Image"
            margin="normal"
            variant="outlined"
            name="profileImage"
            value={formRegister.profileImage}
            onChange={handleInputChange}
          />)}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            {login === 0 ? 'Login' : 'Register'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginRegisterPage;