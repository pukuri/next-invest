import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './container/About/About';
import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
import Investments from './container/Investments/Investments';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Investments />
      <About />
      <Footer />
    </>
  );
}

export default App;
