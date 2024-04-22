import './style/App.css'
import InsertTarget from './insertTarget';
import RemoveTarget from './removeTarget';
import InsertIpTitle from './insertIpTitle';
import RemoveIpTitle from './removeIpTitle';
import TargetsWindow from './loadTargets';

function App() {
  return (
    <div className="App">
      <InsertIpTitle />
      <InsertTarget />
      <RemoveIpTitle />
      <RemoveTarget />
      <TargetsWindow />
    </div>
  );
}

export default App;
