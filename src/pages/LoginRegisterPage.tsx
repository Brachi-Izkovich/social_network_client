// דף התחברות
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Tabs, Tab } from '@mui/material';

const LoginRegisterPage = () => {
  const [login, setLogin] = useState(0);

  const handleChange = (event:any, newValue:number) => {
    setLogin(newValue);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {login === 0 ? 'Login' : 'Register'}
        </Typography>
        
        <Tabs value={login} onChange={handleChange}>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>

        <Box component="form" sx={{ mt: 2 }}>
          {login === 1 && (
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              variant="outlined"
              type="email"
            />
          )}
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            variant="outlined"
            type="password"
          />
          <TextField
            fullWidth
            label="Profile image"
            margin="normal"
            variant="outlined"
          />

          <Button 
            fullWidth
            variant="contained" 
            color="primary" 
            sx={{ mt: 2 }}>
            {login === 0 ? 'Login' : 'Register'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginRegisterPage;