import React, { useState } from "react";

const HeatTransfer = () =>{

    const [thermalconductivity,setThermalConductivity] = useState("")
    const [area,setArea] = useState("")
    const [temperature1,setTemperature1] =useState("")
    const [temperature2,setTemperature2] =useState("")
    const [length,setLength] =useState("")
    const[rateOfHeatFlow,setRateOfHeatFlow]=useState("")

    const [temphot1,setTempHot1] = useState('')
    const [temphot2,setTempHot2] = useState('')
    const [tempcold1,setTempCold1] = useState('')
    const [tempcold2,setTempCold2] = useState('')
    const [lmtd,setLMTD] = useState('')


    const calculateRateOfHeatFlow = () => {

        const K = parseFloat(thermalconductivity)
        const A = parseFloat(area)
        const T1 = parseFloat(temperature1)
        const T2 = parseFloat(temperature2)
        const L = parseFloat(length)

        if(K && A && T1 && T2 && L ){
            const Q = (K*A*(T1-T2))/L

            setRateOfHeatFlow(Q)
        }
        else{
            setRateOfHeatFlow('Invalid input')
        }

    }

    const calculateLMTD = () => {

        const Th1 = parseFloat(temphot1)
        const Th2 = parseFloat(temphot2)
        const Tc1 = parseFloat(tempcold1)
        const Tc2 = parseFloat(tempcold2)

        if(Th1 && Th2 && Tc1 && Tc2){

            const ΔT1 = Th1 - Tc1
            const ΔT2 = Th2 - Tc2

            const lnRatio = Math.log(ΔT1/ΔT2 );

            const LMTD = (ΔT1 - ΔT2 )/lnRatio

            setLMTD(LMTD)

        }
        else{
            setLMTD('Invalid input');
        }



    
    }
    


    
    return(
        <div>

            

            <div>
            <p>
            <h1 className="text-2xl   "> 1.Fourier's Law</h1>
                Formula Used:Q = (K*A*(T1-T2))/L
            </p>
            <br></br>

            <label>
               Thermal Conductivity,K(W/m-k) :
               <input className='outline' type="number" value={thermalconductivity} onChange={(event) => setThermalConductivity(event.target.value)} />
            </label> 
            <label>
               Area of Cross-Section,A(m2) :
               <input className='outline' type="number" value={area} onChange={(event) => setArea(event.target.value)} />
            </label> 
            <label>
               Temperature1,T1(k) :
               <input className='outline' type="number" value={temperature1} onChange={(event) => setTemperature1(event.target.value)} />
            </label> 
       
            <label>
               Temperature2,T2(k) :
               <input className='outline' type="number" value={temperature2} onChange={(event) => setTemperature2(event.target.value)} />
            </label> 
            <label>
               Length,L(m) :
               <input className='outline' type="number" value={length} onChange={(event) => setLength(event.target.value)} />
            </label> 

            <button onClick={calculateRateOfHeatFlow}>Calculate Rate Of Heat Flow</button>

            <div>
                Rate Of Heat Flow,Q:{rateOfHeatFlow}
            </div>

            </div>


            <div>
            <p>
            <h1 className="text-2xl   "> 1.LMTD(Log Mean Temperature Difference)</h1>
                Formula Used: LMTD = (ΔT1 - ΔT2 )/ln(ΔT1/ ΔT2 )
            </p>
            <br></br>

            <label>
               Temperature of enterning hot fluid,T<sub>h</sub><sub>1</sub>:
               <input className='outline' type="number" value={temphot1} onChange={(event) => setTempHot1(event.target.value)} />
            </label> 

            <label>
               Temperature of leaving hot fluid,T<sub>h</sub><sub>2</sub>:
               <input className='outline' type="number" value={temphot2} onChange={(event) => setTempHot2(event.target.value)} />
            </label> 

            <label>
               Temperature of enterning cold fluid,T<sub>c</sub><sub>1</sub>:
               <input className='outline' type="number" value={tempcold1} onChange={(event) => setTempCold1(event.target.value)} />
            </label> 

            <label>
               Temperature of leaving cold fluid,T<sub>c</sub><sub>2</sub>:
               <input className='outline' type="number" value={tempcold2} onChange={(event) => setTempCold2(event.target.value)} />
            </label> 

            <select >
                <option>Parallel Type</option>
                <option>Counter Type</option>
            </select>
          

            <button onClick={calculateLMTD}>Calculate LMTD</button>

            <div>
                LMTD:{lmtd}
            </div>

            </div>

           
          
        </div>

    )

}



export default HeatTransfer