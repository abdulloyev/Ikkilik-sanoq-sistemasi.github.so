import React, { useState } from "react";
import { AdminButton } from "..";

const Input = () => {
  const [number, setNumber] = useState("");
  const [binaryNumber, setBinaryNumber] = useState("");

  const toBinary = (decimal: any) => {
    if (decimal === 0) {
      return "0";
    }

    let binary = "";
    while (decimal > 0) {
      binary = (decimal % 2) + binary;
      decimal = Math.floor(decimal / 2);
    }

    return binary;
  };

  const handleConvert = () => {
    const decimalNumber = Number(number);
    const binary = toBinary(decimalNumber);
    setBinaryNumber(binary);
  };

  return (
    <>
      <div className="form-control text-center">
        <input
          className="input input-alt"
          placeholder="Sonni bu yerda kiriting!"
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <span className="input-border input-border-alt"></span>
      </div>
      {binaryNumber.length >= 1 && (
        <p className={`text-yellow-100 py-3`}>
          10 lik sanoq sistemasidagi{" "}
          <span className="text-red-500">{number}</span> soni 2 lik sanoq
          sistemasida: <span className="text-red-500">{binaryNumber}</span>
        </p>
      )}
      <button className="mt-10" onClick={handleConvert}>
        Yuborish
      </button>
    </>
  );
};

export default Input;
