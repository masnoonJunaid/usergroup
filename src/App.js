import './App.css';
import CreateGroup from './components/CreateGroup'
import UserCard from './components/UserCard'
import {UserProvider} from './context'

function App() {
  return (
    <div className="app">
      <h1 className="head-text">Create Group</h1>
      <CreateGroup/>
      <UserCard/>
    </div>
  );
}

export default App;
