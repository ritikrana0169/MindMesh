import './App.css';
import Navbar from './components/Navbar';
import MainRoutes from './components/MainRoutes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
