import "./styles.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import ContactForm from "./components/Contact";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <ContactForm />
    </div>
  );
}
