import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.5rem'
            }}
          >
            ChangToQr
          </Typography>
          <Box>
            <Button
              component={RouterLink}
              to="/login"
              color="inherit"
              sx={{ mr: 2 }}
            >
              تسجيل الدخول
            </Button>
            <Button
              component={RouterLink}
              to="/register"
              variant="contained"
              color="secondary"
            >
              إنشاء حساب
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
