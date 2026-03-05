import { useState } from "react";

export default function Products() {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({
    6: 0,
    8: 0,
    10: 0,
    12: 0
  });

  const pricePerTon = 1000000;

  const handleChange = (diameter: number, value: number) => {
    setQuantities((prev) => ({ ...prev, [diameter]: value }));
  };

  const total = Object.entries(quantities).reduce(
    (acc, [diameter, qty]) => acc + qty * pricePerTon,
    0
  );

  return (
    <main>
      <h1>المنتجات – أسعار أقطار الحديد</h1>
      {([6, 8, 10, 12] as const).map((d) => (
        <div key={d}>
          <label>
            قطر {d} مم:
            <input
              type="number"
              value={quantities[d]}
              onChange={(e) => handleChange(d, Number(e.target.value))}
            />
          </label>
        </div>
      ))}
      <p>السعر الكلي: {total.toLocaleString()} د.ع</p>
    </main>
  );
}
