import logo from './logo.svg';
import Login from './pages/Login';
import Plants from './pages/Plants';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Plants />
        <Login />
        <Signup />
      </header>
    </div>
  );
}

export default App;
