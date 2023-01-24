import React from "react";
import Hellow from "./conpnent/Hellow";
import App from "./conpnent/App"

//function App() {
  //return (
    // <h1>welcome react</h1>
  //)
//}

class app extends React.Component {
 render() {
  return (
  
    <div >
      <Hellow name="daadir quule" />
     <App /> 
     <footer />  
    </div>
  )
 }
}

export default app; 