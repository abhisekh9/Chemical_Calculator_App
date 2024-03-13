// import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import ReactionKinetics from "./subjects/ReactionKinetics"
import MassTransfer from "./subjects/MassTransfer"
import HeatTransfer from "./subjects/HeatTransfer"
import Thermodynamics from "./subjects/Thermodynamics"
import FluidFlowCalculations from "./subjects/FluidFlowCalculations"
import ReactorDesign from "./subjects/ReactorDesign"



function App() {
  return (
    <div className='App' >

  
        
        <Home/>

        <Routes>
          <Route path="/reactionkinetics" element={<ReactionKinetics/>}></Route>

          <Route path="/masstransfer" element={<MassTransfer/>}></Route>
          <Route path="/heattransfer" element={<HeatTransfer/>}></Route>
          <Route path="/thermodynamics" element={<Thermodynamics/>}></Route>
          <Route path="/fluidflowcalculations" element={<FluidFlowCalculations/>}></Route>
          <Route path="/reactordesign" element={<ReactorDesign/>}></Route>

        </Routes > 
     
    </div>

    )

}

export default App;
