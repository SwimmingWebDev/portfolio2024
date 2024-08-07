import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <main className="container">
      <Navbar />
      <Hero />
      <Work />
      <Contact />
    </main>
  );
};

export default App;
