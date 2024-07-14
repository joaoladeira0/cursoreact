import { useState } from 'react';
import Img2 from './assets/img2.jpg';
import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChanceMessageState from './components/ChanceMessageState';
import UserDetails from './components/UserDetails';


function App() {
  // const name = "Joaquim"
  const [userName] = useState("Maria")

  function showMessage() {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg => {
    setMessage(msg);
  })

  const cars = [
    { id: 1, brand: "Ferrari", km: 100000, color: "Verde", newCar: false },
    { id: 1, brand: "Peugeot", km: 0, color: "Verde", newCar: true },
    { id: 1, brand: "Citröen", km: 1000, color: "Preto", newCar: false },
    { id: 1, brand: "VW", km: 98799, color: "Rosa", newCar: false },
  ]

  const users = [
    { id: 1, name: "João", age: 23, job: "Auxiliar de PCP"},
    { id: 2, name: "Ronaldo", age: 16, job: "Estudante"},
    { id: 3, name: "Marcos", age: 18, job: "Operador de Caixa"},
  ]

  return (
    <div className="App">
      <h1>Seção 3</h1>
      {/* <div>
        <img src="/img1.jpg" alt="Paisagem 1" />
      </div> */}
      <div>
        <img src={Img2} alt="Paisagem 2" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={userName} /> 
      <CarDetails brand="VW" km={105022} color="green" newCar={false} />
      <CarDetails brand="Ford" km={0} color="black" newCar={true} />
      <CarDetails brand="Fiat" km={1052322} color="pink" newCar={false} />

      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
      ))}

      <Fragments propFragment={"Teste"} />
      <Container myValue={"Testing"}>
        <p>E este é o conteudo</p>
      </Container>
      <Container myValue={"Testing 2"}>
        <h5>Testando o componente</h5>
      </Container>
      <ExecuteFunction myFunction={showMessage}/>
      <Message msg={message} />
      <ChanceMessageState handleMessage={handleMessage}/>
      
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} age={user.age} job={user.job}/>
      ))}
    </div>

  );
}

export default App;
