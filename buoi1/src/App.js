import logo from './logo.svg';
import './App.css';
import {Hello, HelloPerson, Hello2} from './Hello';
import Header from './Header';
import Car from './car';
import Login from './Login';
import UserInfo from './UserInfor';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello/>
        <HelloPerson name="Tran" />
        <Header />
        <Hello2 />
        <Car />
        <Login />
        <UserInfo />
      </header>
    </div>
  );
}
export default App;
