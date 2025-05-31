import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Paper, CircularProgress, Alert } from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';
import { generateQRCode, downloadQRCodePNG, downloadQRCodePDF } from '../services/qrService';
import { Helmet } from 'react-helmet';

const Home = () => {
  const [url, setUrl] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [linkId, setLinkId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      // التحقق من صحة الرابط
      try {
        new URL(url);
      } catch (err) {
        throw new Error('الرجاء إدخال رابط صحيح');
      }

      // إنشاء رمز QR
      const response = await generateQRCode(url);
      setQrCode(response.qrCode);
      setLinkId(response.linkId);
      setSuccess(true);
    } catch (error) {
      setError(error.message || 'حدث خطأ أثناء إنشاء رمز QR');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPNG = async () => {
    try {
      const blob = await downloadQRCodePNG(linkId, url);
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `qrcode-${linkId}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      setError('حدث خطأ أثناء تنزيل رمز QR بصيغة PNG');
    }
  };

  const handleDownloadPDF = async () => {
    try {
      const blob = await downloadQRCodePDF(linkId, url);
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `qrcode-${linkId}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      setError('حدث خطأ أثناء تنزيل رمز QR بصيغة PDF');
    }
  };

  return (
    <Container maxWidth="md">
      <Helmet>
        <title>ChangToQr - حول الروابط إلى رموز QR بسهولة</title>
        <meta name="description" content="قم بتحويل أي رابط إلى رمز QR وتنزيله بصيغة PNG أو PDF بسهولة وسرعة" />
        <meta name="keywords" content="QR code, تحويل روابط, رمز الاستجابة السريعة, تنزيل QR, PNG, PDF" />
      </Helmet>

      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          ChangToQr
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          حول الروابط إلى رموز QR بسهولة
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="أدخل الرابط هنا"
            variant="outlined"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            required
            sx={{ mb: 2, direction: 'ltr' }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            disabled={loading}
            sx={{ py: 1.5 }}
          >
            {loading ? <CircularProgress size={24} /> : 'إنشاء رمز QR'}
          </Button>
        </form>

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        {success && qrCode && (
          <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" gutterBottom>
              تم إنشاء رمز QR بنجاح!
            </Typography>
            <Box sx={{ my: 2, p: 3, border: '1px solid #eee', borderRadius: 2 }}>
              <img src={qrCode} alt="QR Code" style={{ width: '200px', height: '200px' }} />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button variant="contained" color="primary" onClick={handleDownloadPNG}>
                تنزيل بصيغة PNG
              </Button>
              <Button variant="outlined" color="primary" onClick={handleDownloadPDF}>
                تنزيل بصيغة PDF
              </Button>
            </Box>
          </Box>
        )}
      </Paper>

      <Paper elevation={2} sx={{ p: 3, mb: 4, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>
          كيفية الاستخدام
        </Typography>
        <Typography variant="body1" paragraph>
          1. أدخل الرابط الذي تريد تحويله إلى رمز QR في الحقل أعلاه.
        </Typography>
        <Typography variant="body1" paragraph>
          2. انقر على زر "إنشاء رمز QR" وانتظر لحظات.
        </Typography>
        <Typography variant="body1" paragraph>
          3. بعد إنشاء الرمز، يمكنك تنزيله بصيغة PNG أو PDF.
        </Typography>
        <Typography variant="body1">
          4. استخدم الرمز في مطبوعاتك أو شاركه مع الآخرين!
        </Typography>
      </Paper>
    </Container>
  );
};

export default Home;
