/*React imports */

/*Custom imports */
import Container from './components/UI/container/Container';
import Summary from './components/summary/Summary';

/*CSS imports */
import './App.scss';

/*Assets imports */
import DUMMY_DATA from './data.json'

function App() {
  return (
    <div className="App">
      <Container>
        <Summary data = {DUMMY_DATA}/>
      </Container>
    </div>
  );
}

export default App;
