"use client";

import { useState } from 'react';

export default function Home() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const soma = parseFloat(num1) + parseFloat(num2);
    setResultado(soma);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1>Somar Dois Números</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Digite o primeiro número"
          style={{ margin: '5px 0', padding: '8px', width: '200px' }}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Digite o segundo número"
          style={{ margin: '5px 0', padding: '8px', width: '200px' }}
        />
        <button type="submit" style={{ margin: '10px 0', padding: '8px 16px' }}>Somar</button>
      </form>
      {resultado !== null && <h2>Resultado: {resultado}</h2>}
    </div>
  );
}
