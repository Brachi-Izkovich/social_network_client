// דף התחברות


import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Tabs, Tab } from '@mui/material';

const LoginRegisterPage = () => {
  const [login, setLogin] = useState(0); // 0=login, 1=register
  const [form, setForm] = useState({
    id:'',
    name: '',
    email: '',
    password: '',
    profileImage: '',
  });

  const handleChangeTab = (_event: any, newValue: number) => {
    setLogin(newValue);
    setForm({ name: '', email: '', password: '', profileImage: '' ,id:''}); // reset form
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login === 1) {
      // Register
      if (!form.email || !form.password || !form.name) {
        alert('Please fill all required fields');
        return;
      }

      const user = {
        id:form.id,
        name: form.name,
        email: form.email,
        password: form.password,
        profileImage: form.profileImage,
      };

      localStorage.setItem(`user_${form.email}`, JSON.stringify(user));
      alert('Registration successful. You can now log in.');
      setLogin(0); // Switch to login tab
    } else {
      // Login
      const stored_pass = localStorage.getItem(`user_${form.password}`);
      const stored_name = localStorage.getItem(`user_${form.name}`);
      console.log(stored_pass);
      console.log(stored_name);
      

      if (!stored_pass && !stored_name) {
        alert('User not found.');
        return;
      }

      const storedUser = JSON.parse(stored_pass?.toString());
      if (storedUser.password !== form.password) {
        alert('Incorrect password.');
        return;
      }

      localStorage.setItem('loggedUser', JSON.stringify(storedUser));
      alert(`Welcome, ${storedUser.name}!`);
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
              value={form.email}
              onChange={handleInputChange}
            />
          )}
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            variant="outlined"
            name="name"
            value={form.name}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            variant="outlined"
            name="password"
            type="password"
            value={form.password}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="Profile Image"
            margin="normal"
            variant="outlined"
            name="profileImage"
            value={form.profileImage}
            onChange={handleInputChange}
          />

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