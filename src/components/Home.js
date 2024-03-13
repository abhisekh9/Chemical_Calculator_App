import React from "react";
import { Link} from "react-router-dom";


const Home = () => {

  

   
    return(
        
  



        <div>

            <div  >

                <Link to="/">
                    <nav className="text-center text-3xl font-bold">
                        <h1>Chemical Engineering Calculators</h1>
                    </nav>
                </Link>

            </div>



            
        
            <div className="flex justify-cente justify-evenly ">

             <ul className=" flex ml-5 mr-3 gap-5 text-2xl ">
  
                <li >
                    <Link to="/reactionkinetics" >Reaction Kinetics</Link>

                </li>
            
                <li>
                    <Link to="/masstransfer">Mass Transfer</Link>
                </li>
                <li>
                    <Link to="/heattransfer">Heat Transfer</Link>
                </li>
                <li>
                    <Link to="/thermodynamics">Thermodynamics</Link>
                </li>
                <li>
                    <Link to="/fluidflowcalculations">Fluid Flow Calculations</Link>
                </li>
                <li>
                    <Link to="/reactordesign">Reactor Design</Link>
                </li>
             
                
              </ul>

              </div>

            </div>
           
    

    )
}

export default Home