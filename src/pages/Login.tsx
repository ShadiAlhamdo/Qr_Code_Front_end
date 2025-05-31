import React from 'react';
import { Container, Typography, Box, Paper, TextField, Button, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Login: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>تسجيل الدخول | ChangToQr</title>
        <meta name="description" content="قم بتسجيل الدخول إلى حسابك في ChangToQr لتحويل الروابط إلى رموز QR بسهولة وتنزيلها بصيغة PNG أو PDF" />
      </Helmet>
      <Container maxWidth="sm">
        <Box sx={{ mt: 8, mb: 8 }}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                تسجيل الدخول
              </Typography>
              <Typography variant="body1" color="text.secondary">
                أهلاً بك مجدداً في ChangToQr
              </Typography>
            </Box>
            
            <form noValidate>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="البريد الإلكتروني"
                    name="email"
                    autoComplete="email"
                    variant="outlined"
                    dir="rtl"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="كلمة المرور"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    variant="outlined"
                    dir="rtl"
                  />
                </Grid>
              </Grid>
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 4, mb: 2, py: 1.5 }}
              >
                تسجيل الدخول
              </Button>
              
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
                size="large"
                sx={{ mb: 2, py: 1.5 }}
              >
                تسجيل الدخول باستخدام جوجل
              </Button>
              
              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="body2">
                  ليس لديك حساب؟{' '}
                  <Link component={RouterLink} to="/register" variant="body2">
                    إنشاء حساب جديد
                  </Link>
                </Typography>
              </Box>
            </form>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Login;
