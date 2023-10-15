import React, { useState } from "react";
import { AdminButton } from "..";

const Input = () => {
  const [number, setNumber] = useState<any>("");
  const [nechilik, setNechilik] = useState<any>("");
  const [binaryNumber, setBinaryNumber] = useState<any>("");

  const toBinary = (decimal: any) => {
    if (decimal === 0) {
      return "0";
    }

    let binary = "";
    while (decimal > 0) {
      binary = (decimal % (nechilik == 0 ? 2 : nechilik)) + binary;
      decimal = Math.floor(decimal / (nechilik == 0 ? 2 : nechilik));
    }

    return binary;
  };

  const handleConvert = () => {
    if (nechilik === 0) {
      setBinaryNumber("Xato");
    } else {
      const decimalNumber = Number(number);
      const binary = toBinary(decimalNumber);
      setBinaryNumber(binary);
    }
  };

  return (
    <>
      <div className="form-control my-3 text-center border rounded-xl p-3 border-b-0">
        <label>10 lik sanoq sistemasidagi sonni kiriting:</label>

        <input
          className="input input-alt"
          placeholder="Kiritish majburiy..."
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <span className="input-border input-border-alt"></span>
      </div>
      <div className="form-control text-center  border rounded-xl p-3 border-b-0">
        <label>
          <span className="text-blue-500">{number ? number : "N"}</span> ni
          nechilik sanoq sistemasiga o`tgazmoqchisiz?
        </label>

        <input
          className="input input-alt"
          placeholder="Bu yerda 1 yoki 0 ni kiritmang!"
          type="text"
          value={nechilik}
          onChange={(e) => setNechilik(e.target.value)}
        />
        <span className="input-border input-border-alt"></span>
      </div>
      {binaryNumber.length >= 1 &&
        (nechilik == 0 ? (
          <p>
            <span className="text-red-500">
              {nechilik.length ? nechilik : "..."}
            </span>{" "}
            kiritmang!
          </p>
        ) : (
          <p className={`text-yellow-100 py-3`}>
            10 lik sanoq sistemasidagi{" "}
            <span className="text-blue-500">{number}</span> soni{" "}
            <span className="text-blue-500">{nechilik}</span> lik sanoq
            sistemasida: <span className="text-red-500">{binaryNumber}</span>{" "}
            bo`ladi.
          </p>
        ))}
      <button type="submit" className="mt-10" onClick={handleConvert}>
        Yuborish
      </button>
    </>
  );
};

export default Input;
