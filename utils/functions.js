import CryptoJS from "crypto-js";

const secretKey = `${import.meta.env.VITE_SECRET_KEY}`;

// Function to encrypt data
export function encryptData(data) {
  return CryptoJS.AES.encrypt(data, secretKey).toString();
}

// Function to decrypt data
export function decryptData(encryptedData) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}
