import { useEffect, useState } from "react";
import { decryptData } from "../../../utils/functions";
// Adjust the import path as necessary

export default function QrVerification() {
  const [qrCode, setQrCode] = useState();

  useEffect(() => {
    const loadLocalStorageData = localStorage.getItem("redirect");
    if (!loadLocalStorageData) {
      window.location.href = "/register";
      return;
    }
    const perseData = JSON.parse(loadLocalStorageData);
    const decryptedData = decryptData(perseData);
    setQrCode(JSON.parse(decryptedData));
  }, []);

  console.log(qrCode?.canRedirect);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={qrCode?.qr} alt="app logo" className="h-auto w-[10rem]" />

      
    </div>
  );
}
