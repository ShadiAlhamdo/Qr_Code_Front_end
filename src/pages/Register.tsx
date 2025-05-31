import React from 'react';
import { Container, Typography, Box, Paper, TextField, Button, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Register: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>إنشاء حساب جديد | ChangToQr</title>
        <meta name="description" content="قم بإنشاء حساب جديد في ChangToQr لتحويل الروابط إلى رموز QR بسهولة وتنزيلها بصيغة PNG أو PDF" />
      </Helmet>
      <Container maxWidth="sm">
        <Box sx={{ mt: 8, mb: 8 }}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                إنشاء حساب جديد
              </Typography>
              <Typography variant="body1" color="text.secondary">
                أنشئ حسابك الآن للاستفادة من خدمات ChangToQr
              </Typography>
            </Box>
            
            <form noValidate>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="اسم المستخدم"
                    name="username"
                    autoComplete="username"
                    variant="outlined"
                    dir="rtl"
                  />
                </Grid>
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
                    autoComplete="new-password"
                    variant="outlined"
                    dir="rtl"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="تأكيد كلمة المرور"
                    type="password"
                    id="confirmPassword"
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
                إنشاء حساب
              </Button>
              
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
                size="large"
                sx={{ mb: 2, py: 1.5 }}
              >
                التسجيل باستخدام جوجل
              </Button>
              
              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="body2">
                  لديك حساب بالفعل؟{' '}
                  <Link component={RouterLink} to="/login" variant="body2">
                    تسجيل الدخول
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

export default Register;
