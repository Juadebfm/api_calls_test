import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  console.log(window.location);
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/about":
      Component = About;
      break;
    case "/contact":
      Component = Contact;
      break;
    default:
      Component = Home; // Set a default component for unknown paths
  }
  return (
    <div className="App">
      <>
        <Navbar />
        <div className="container-fluid text-center">
          <Component />
        </div>
      </>
    </div>
  );
}

export default App;
