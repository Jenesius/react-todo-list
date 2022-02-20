import logo from '../../logo.svg';
import './App.css';

import UserCard from "../UserCard/user-card";
import List from "../List/List";

const state = {
    name: 'Jenesius'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <UserCard name = {state.name}/>
          
          <List/>
          
      </header>
    </div>
  );
}

export default App;
