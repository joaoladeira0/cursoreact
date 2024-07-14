
import './App.css';
import Cars from './components/Cars';

function App() {

  const cars = [
    { id: 1, name: "Ferrari", brand: "Ferrari", km: 100000, color: "Verde", newCar: false },
    { id: 2, name: "Peugeot 206", brand: "Peugeot", km: 0, color: "Verde", newCar: true },
    { id: 3, name: "Picasso", brand: "Citröen", km: 1000, color: "Preto", newCar: false },
  ]

  return (
    <div className="App">
      <h1 className='app-title'>Desafio 5</h1>
      <div className="car-container">
        {cars.map((car) => (
          <Cars car={car} />
        ))}
      </div>


    </div>
  );
}

export default App;
