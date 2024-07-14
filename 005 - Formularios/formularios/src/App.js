import MyForm from './components/MyForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>FORMS</h1>
      <MyForm user={{name: "João Paulo", email: "joao@gmail.com", bio: "Ronaldo" }}/>
    </div>
  );
}

export default App;
