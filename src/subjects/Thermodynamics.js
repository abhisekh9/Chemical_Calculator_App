import React, { useState } from "react";

const Thermodynamics = () =>{

    const [saturatedliquid,setSaturatedLiquid] = useState('')
    const [saturatedvapor,setSaturatedVapor] = useState('')
    const [overallSpecificVolume,setOverallSpecificVolume] = useState('')
    const [quality,setQuality] = useState('')

    const calculateOverallSpecificVolume = () => {

        const Vf = parseFloat(saturatedliquid)
        const Vfg = parseFloat(saturatedvapor)
        const x = parseFloat(quality)

        if(Vf && Vfg && x){

            const V = Vf + x*(Vfg)

            setOverallSpecificVolume(V)
        }

        else{
            setOverallSpecificVolume('Inavlid Input')
        }

    }
    return(
        <div>

<div>
             <p>
                <h1 className="text-2xl "> 1.Calculate Overall Specific Volume</h1>
                Formula Used: V = V<sub>f</sub> + xV<sub>fg</sub> = (1-x)V<sub>f</sub> + XV<sub>g</sub>
             </p>
       

            <br></br>
       
            <label>
              Specific volume of saturated liquid,V<sub>f</sub>(kg/m<sup>3</sup>):
              <input className='outline' type="number" value={saturatedliquid} onChange={(e) => setSaturatedLiquid(e.target.value)} />
            </label> 

            <label>
              Specific volume of saturated liquid w.r.t sat.vapor,V<sub>fg</sub>(kg/m<sup>3</sup>):
              <input className='outline' type="number" value={saturatedvapor} onChange={(e) => setSaturatedVapor(e.target.value)} />
            </label> 

            <label>
              Quality,x:
              <input className='outline' type="number" value={quality} onChange={(e) => setQuality(e.target.value)} />
            </label> 

        

           

            

            <button onClick={calculateOverallSpecificVolume}>Calculate Overall Specific Volume</button>
            <div>
                Calculate Overall Specific Volume,V(kg/m<sup>3</sup>): {overallSpecificVolume}
           </div> 

          

           </div>
            
        </div>

    )

}

export default Thermodynamics