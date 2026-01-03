import { About } from "./pages/About";
import { Home } from "./pages/home";
import { Service } from "./pages/Service";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import "./style/App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Service />
      </main>
      <Footer />
    </>
  );
}

export default App;
