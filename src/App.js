// import the components and css file
import "./styles.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Manual from "./components/Manual";

export default function App() {
  return (
    // calling the developed components to display them in the website
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Manual />
    </div>
  );
}
