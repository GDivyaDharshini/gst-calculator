import { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [gst, setGst] = useState(18);

  const gstAmount = (amount * gst) / 100;
  const cgst = gstAmount / 2;
  const sgst = gstAmount / 2;
  const totalAmount = Number(amount) + gstAmount;

  return (
    <div className="container">
      <div className="card">
        <h1>GST Calculator</h1>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select value={gst} onChange={(e) => setGst(Number(e.target.value))}>
          <option value={5}>5%</option>
          <option value={12}>12%</option>
          <option value={18}>18%</option>
          <option value={28}>28%</option>
        </select>

        <div className="result">
          <h3>GST Amount: ₹{gstAmount.toFixed(2)}</h3>
          <h3>CGST: ₹{cgst.toFixed(2)}</h3>
          <h3>SGST: ₹{sgst.toFixed(2)}</h3>
          <h2>Total Amount: ₹{totalAmount.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;