import './App.css'
import InsertTarget from './insertTarget';
import RemoveTarget from './removeTarget';
import InsertIpTitle from './insertIpTitle';
import RemoveIpTitle from './removeIpTitle';

function App() {
  return (
    <div className="App">
      <InsertIpTitle />
      <InsertTarget />
      <RemoveIpTitle />
      <RemoveTarget />
    </div>
  );
}

export default App;
