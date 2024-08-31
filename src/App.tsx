import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersonListView } from './components/PersonListView';
import Navbar from './components/Navbar';
import LoginPanel from './components/LoginPanel';

function App() {
  return (
    <div className="App">
        <Navbar />
        <LoginPanel />
        <PersonListView />
    </div>
  );
}

export default App;
