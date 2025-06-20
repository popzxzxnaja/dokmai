import { useState } from 'react';

const flowers = ['🌹 Rose', '🌻 Sunflower', '🌷 Tulip', '💐 Mix'];

function App() {
  const [selected, setSelected] = useState([]);

  const toggle = (flower) => {
    setSelected(prev =>
      prev.includes(flower)
        ? prev.filter(f => f !== flower)
        : [...prev, flower]
    );
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>กล่องดอกไม้เรซิ่น</h1>
      <p>เลือกดอกไม้ที่ต้องการใส่ลงกล่อง</p>
      {flowers.map(flower => (
        <div key={flower}>
          <label>
            <input
              type="checkbox"
              checked={selected.includes(flower)}
              onChange={() => toggle(flower)}
            />
            {flower}
          </label>
        </div>
      ))}
      <h2 style={{ marginTop: 20 }}>คุณเลือก:</h2>
      <p>{selected.length > 0 ? selected.join(', ') : 'ยังไม่ได้เลือก'}</p>
    </div>
  );
}

export default App;
