import { useState } from "react";

export default function Customer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [diameter, setDiameter] = useState(6);
  const [quantity, setQuantity] = useState(1);

  const pricePerTon = 1000000;
  const total = quantity * pricePerTon;

  const handleSubmit = () => {
    const message = `طلب جديد من ${name}، هاتف: ${phone}, قطر: ${diameter} مم, كمية: ${quantity}, السعر الكلي: ${total} د.ع`;
    window.open(`https://wa.me/07732670436?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main>
      <h1>نموذج طلب العميل</h1>

      <label>
        الاسم:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        رقم الهاتف:
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>

      <label>
        اختر القطر:
        <select value={diameter} onChange={(e) => setDiameter(Number(e.target.value))}>
          <option value={6}>6 مم</option>
          <
