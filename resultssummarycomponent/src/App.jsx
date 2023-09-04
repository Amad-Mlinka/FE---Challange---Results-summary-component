/*React imports */

/*Custom imports */
import Container  from './components/UI/container/Container';
import Summary    from './components/summary/Summary';

/*CSS imports */
import './App.scss';

/*Assets imports */
import DUMMY_DATA   from './data.json'
import iconReaction from './assets/images/icon-reaction.svg';
import iconMemory   from './assets/images/icon-memory.svg';
import iconVerbal   from './assets/images/icon-verbal.svg';
import iconVisual   from './assets/images/icon-visual.svg';

const categoryToImageMap = {
  "Reaction": iconReaction,
  "Memory"  : iconMemory,
  "Verbal"  : iconVerbal,
  "Visual"  : iconVisual,
};

const modifiedData = DUMMY_DATA.map(item => ({
  ...item,
  "icon": categoryToImageMap[item.category],
}));

function App() {
  const data = modifiedData
  return (
    <div className="App">
      <Container>
        <Summary data = {data}/>
      </Container>
    </div>
  );
}

export default App;
