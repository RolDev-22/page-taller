import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Service } from "./pages/Service";
import { Contact } from "./pages/Contact";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Form from "./components/Form/form";
import Map from "./components/Map/map";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />

        <Service />

        <About />

        <Contact formContact={<Form />} mapContact={<Map />} />
      </main>
      {/*<Footer />*/}
    </>
  );
}

export default App;
