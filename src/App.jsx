import { About } from "./pages/About";
import { Home } from "./pages/home";
import { Service } from "./pages/Service";
import { Contact } from "./pages/Conatct";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import "./style/App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Service />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
