
import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15
  const [name] = useState("João");
  const blueTitle = true;

  return (
    <div className="App">
      {/* CSS GLOBAL */}
      <h1>REACT com CSS</h1>
      {/* CSS DE COMPONENTE */}
      <MyComponent />
      <p>Este é o paragrafo do APP.JS</p>
      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "9px", border: "2px solid red", backgroundColor: "lightblue" }}>Este é um elemento que foi estilizando com CSS INLINE</p>
      <p style={{ color: "blue", padding: "9px", border: "2px solid red", backgroundColor: "lightblue" }}>Este é um elemento que foi estilizando com CSS INLINE</p>
      {/* Inline dinamico CSS */}
      <h2 style={n < 10 ? ({ color: "green" }) : ({ color: "red" })}>INLINE DINAMICO</h2>
      <h2 style={n > 10 ? ({ color: "green" }) : ({ color: "red" })}>INLINE DINAMICO</h2>

      <h2 style={name === "João" ? ({ color: "green", background: "#000" }) : ({ color: "gold", background: "#999" })}>Teste nome</h2>
      {/* Classes dinamicas */}
      <h2 className={blueTitle ? "blue-title" : "title"}>Titulo</h2>
      {/* CSS SCOOPED */}
      <Title />
      <h2 className='my_title'>Testando</h2>
    </div>
  );
}

export default App;
