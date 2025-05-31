import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// خدمة إنشاء رمز QR
export const generateQRCode = async (url) => {
  try {
    const response = await axios.post(`${API_URL}/links/generate-qr`, { url });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'حدث خطأ أثناء إنشاء رمز QR' };
  }
};

// خدمة تنزيل رمز QR بصيغة PNG
export const downloadQRCodePNG = async (linkId, url) => {
  try {
    const response = await axios.get(`${API_URL}/links/${linkId}/download-png`, {
      params: { url },
      responseType: 'blob'
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'حدث خطأ أثناء تنزيل رمز QR بصيغة PNG' };
  }
};

// خدمة تنزيل رمز QR بصيغة PDF
export const downloadQRCodePDF = async (linkId, url) => {
  try {
    const response = await axios.get(`${API_URL}/links/${linkId}/download-pdf`, {
      params: { url },
      responseType: 'blob'
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'حدث خطأ أثناء تنزيل رمز QR بصيغة PDF' };
  }
};
