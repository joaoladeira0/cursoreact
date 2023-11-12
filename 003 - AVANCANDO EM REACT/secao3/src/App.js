import Img2 from './assets/img2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Seção 3</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem 1" />
      </div>
      <div>
        <img src={Img2} alt="Paisagem 2" />
      </div>
    </div>
    
  );
}

export default App;
