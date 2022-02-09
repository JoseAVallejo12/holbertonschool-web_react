import logo from './holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className="App-title">School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <form className='form-group'>
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" />
          <label htmlFor="password">PassWord: </label>
          <input type="text" id="password" />
          <button type='submit'>ok</button>
        </form>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
