import React from "react";
import qrCode from "../../assets/QR.png";

export const DonateUPI: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center gap-4 p-5 rounded-2xl glass shadow-lg transition-all duration-300 hover:scale-[1.01]"
      style={{
        background: "rgba(255, 255, 255, 0.02)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <h3 className="text-[10px] font-bold tracking-[3px] uppercase text-white/70">
        Enjoyed the game? Buy me a coffee ☕
      </h3>

      <a
        href="upi://pay?pa=9033640100@upi&pn=Prince&cu=INR&tn=Support%20ModiLander"
        className="w-full flex justify-center items-center py-3 rounded-xl transition-all duration-300 active:scale-[0.98] shadow-md hover:shadow-xl"
        style={{
          background: "linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9))",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        <span className="text-xs font-bold tracking-[4px] uppercase text-white drop-shadow-md">
          Pay via UPI
        </span>
      </a>

      <div className="flex flex-col items-center gap-2 mt-1 w-full">
        <div className="p-2 bg-white/95 rounded-xl shadow-inner">
          <img
            src={qrCode}
            alt="UPI QR Code"
            className="w-20 h-20 object-contain rounded-md"
          />
        </div>
        
        <div className="flex flex-col items-center gap-1.5">
          <p className="text-[9px] font-bold tracking-[2px] text-white/60 uppercase">
            9033640100@upi
          </p>
          <p className="text-[7px] font-medium tracking-[1px] text-white/30 uppercase">
            Scan QR if button doesn’t work
          </p>
        </div>

        <a
          href={qrCode}
          download="ModiLander_Support_QR.png"
          className="mt-1 w-full flex justify-center items-center py-2 rounded-lg transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <span className="text-[9px] font-bold tracking-[2px] uppercase text-white/60">
            Download QR
          </span>
        </a>
      </div>
    </div>
  );
};
