import React, { useState } from "react";

const FluidFlowCalculations = () =>{

    const [initialdiameter,setInitialDiameter] = useState('');
    const [finaldiameter,setFinalDiameter] = useState('');
    const [flowrate,setFlowRate] = useState('');
    const [headLoss,setHeadLoss] = useState('');


    const calculateHeadLoss = () => {

        const D1 = parseFloat(initialdiameter)
        const D2 = parseFloat(finaldiameter)
        const Q = parseFloat(flowrate)

        if(D1 && D2 && Q){
            const Π = 3.14
            const g = 9.81

            const A1 =(Π*(D1)**2)/4
            const A2 =(Π*(D2)**2)/4

            const V1 = Q/A1
            const V2 = Q/A2

            const Hf = ((V1-V2)**2)/(2*g)

            setHeadLoss(Hf.toFixed(4))

        }
        else{
            
            setHeadLoss("Invalid Input")

        }

       
        

        

    }

    return(
        <div>

            <br></br>
             <div>
             <p>
                <h1 className="text-2xl "> 1.Head Loss( When pipe diameter is suddenly enlarged)</h1>
                Formula Used:(V<sub>1</sub>-V<sub>2</sub>)<sup>2</sup>/2g
             </p>
       

            <br></br>
       
            <label>
              Intial Diameter, D1(m):
              <input className='outline' type="number" value={initialdiameter} onChange={(e) => setInitialDiameter(e.target.value)} />
            </label> 

            <label>
              Final Diameter, D2(m):
              <input className='outline' type="number" value={finaldiameter} onChange={(e) => setFinalDiameter(e.target.value)} />
            </label> 

            <label>
              Flow Rate, Q(m<sup>3</sup>/s):
              <input className='outline' type="number" value={flowrate} onChange={(e) => setFlowRate(e.target.value)} />
            </label> 

            
           

            <button onClick={calculateHeadLoss}>Calculate Head Loss</button>
            <div>
                Head Loss,H<sub>f</sub>(m): {headLoss}
           </div> 

          

           </div>
            
        </div>

    )

}

export default FluidFlowCalculations