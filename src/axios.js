// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.1.7:3001/apidoc', // URL tương đối để gửi yêu cầu tới proxy
  // Thêm các tùy chọn khác nếu cần
});

export default instance;
