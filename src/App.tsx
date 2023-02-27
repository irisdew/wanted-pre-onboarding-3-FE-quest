import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div id="app">
      <Header />
      <div id="container">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
