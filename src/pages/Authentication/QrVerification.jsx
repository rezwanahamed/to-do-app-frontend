import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useCrud from "../../../hooks/swrHooks";
import apiEndpoints from "../../../lib/config/api";
import { decryptData } from "../../../utils/functions";

export default function QrVerification() {
  const [qrCode, setQrCode] = useState();
  const [otp, setOtp] = useState("");
  const { create } = useCrud(apiEndpoints.register_code_verification); // Adjust the endpoint as necessary

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await create({
        userId: qrCode?.userId,
        twoFactorCode: otp,
      });

      if (response?.status === 200) {
        toast.success("OTP submitted successfully");
        localStorage.removeItem("redirect");
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Error submitting OTP:", error);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <img src={qrCode?.qr} alt="app logo" className="h-auto w-[10rem]" />
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col items-center">
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="mt-3 w-full cursor-pointer rounded-md bg-blue-500 py-2 text-center text-sm font-medium text-white duration-100 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
        >
          Submit OTP
        </button>
      </form>
    </div>
  );
}
