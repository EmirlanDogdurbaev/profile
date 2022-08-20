import "./App.scss";
import Footer from "./components/footer/Footer/Footer";
import Header from "./components/header/Header/Header";
import Nav from "./components/navigation/Nav/Nav";

function App() {
  return (
  <div className="App">
    <Nav/>
    <Header/>
    <Footer/>
  </div>);
}

export default App;
