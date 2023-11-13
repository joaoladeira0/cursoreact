import Img2 from './assets/img2.jpg';
import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';


function App() {
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
    </div>
    
  );
}

export default App;
