import Home from "./components/Home";
import Header from "./components/Header";
import {BrowserRouter as Router} from "react-router-dom"
import About from "./components/About";

function app () {
  return (
  <>
  <Router>
     <div className="max-w-4xl	 mx-auto ">
      <Header />
      <About />
    </div>
    <Home />
  </Router>
   
  </>
  )
 }


export default app; 