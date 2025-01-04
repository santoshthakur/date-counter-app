
import Counter from './components/Counter';
import { DateCounter } from './components/DateCounter';

function App() {
  return (

    <div className="App">
     <Counter />
    <div style={{marginTop:'40px'}}><DateCounter /></div> 
    </div>
  );
}

export default App;
