
import './App.css';
import  Header  from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import GridProducts from './components/GridProducts';
function App() {


  return (
    <div className="App h-screen">
      <Header />
      <Banner />
      <GridProducts />
      <Footer />
    </div>
  );
}

export default App;
