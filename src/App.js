import './App.css';
import CreateGroup from './components/CreateGroup'
import UserCard from './components/UserCard'
import {UserConsumer} from './context'

function App() {
  return (
    <div className="app">
      <h1 className="head-text">Create Group</h1>
      <CreateGroup/>
      <div className="user-list">
      <UserConsumer>
      {value => {
        return value.users.map(user => {
          return <UserCard
          key={user.id}
          user={user}
          />
        })
      }}
      </UserConsumer>
      </div>
      <ul className="button-list">
        <button id="update" className="buttons">Update</button>
        <button id="remove" className="buttons">Remove</button>
      </ul>
    </div>
  );
}

export default App;
