import React, { useState } from "react";

const ReactorDesign = () =>{

    const [valueofa,setValueOfa] = useState('')
    const [valueofb,setValueOfb] = useState('')
    const [valueofc,setValueOfc] = useState('')
    const [rateconstant,setRateConstant] = useState('')
    const [pressure,setPressure] = useState('')
    const [temperature,setTemperature] = useState('')
    const [molarflowrate,setMolarFlowRate] = useState('')
    const [conversionofA,setConversionofA] = useState('')
    const [volumeOfPFR,setVolumeOfPFR] = useState('')
    

    

    const calculateVolumeOfPFR = () => {

        const a = parseFloat(valueofa)
        const b = parseFloat(valueofb)
        const c= parseFloat(valueofc)
        const k = parseFloat(rateconstant)
        const Pa = parseFloat(pressure)
        const T = parseFloat(temperature)
        const Fa= parseFloat(molarflowrate)
        const Xa = parseFloat(conversionofA)

        if(a && b && c && k &&  Pa && T && Fa && Xa){

            const Ea = ((b+c)-a)/a
            const R = 8.314;
            const T1 = T + 273;
            const Ca = Pa/(R*T1);

            const lnRatio = Math.log(1/(1-Xa));

            const V = (Fa * ((1+Ea)*lnRatio -Ea*Xa))/(k*Ca)

            setVolumeOfPFR(V.toFixed(3))
        }
        else{
            setVolumeOfPFR('Invalid Input')
        }

        



    }


    return(
        <div>
           <div>
             <p>
                <h1 className="text-2xl "> 1.Plug Flow Reactor(First Order)</h1>
                aA -> bB + cC
                <br></br>
                -r<sub>A</sub> = (k/hr)C<sub>A</sub>
                <br></br>
                Formula Used: V =( F<sub>Ao</sub>*[(1+ε<sub>A</sub>)*ln(1/(1-X<sub>A</sub>)) - ε<sub>A</sub>X<sub>A</sub>])/kC<sub>Ao</sub>
             </p>
       

            <br></br>

      
            <label>
              a:
              <input className='outline' type="number" value={valueofa} onChange={(e) => setValueOfa(e.target.value)} />
            </label> 
            <label>
              b:
              <input className='outline' type="number" value={valueofb} onChange={(e) => setValueOfb(e.target.value)} />
            </label> 
            <label>
              c:
              <input className='outline' type="number" value={valueofc} onChange={(e) => setValueOfc(e.target.value)} />
            </label> 
            <label>
              Rate Constant(k/hr):
              <input className='outline' type="number" value={rateconstant} onChange={(e) => setRateConstant(e.target.value)} />
            </label> 
            <label>
              Pressure,P<sub>Ao</sub>:
              <input className='outline' type="number" value={pressure} onChange={(e) => setPressure(e.target.value)} />
            </label> 
            <label>
              Temperature(°C):
              <input className='outline' type="number" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
            </label> 
            <label>
              Molar Flow Rate,F<sub>Ao</sub>(mol/hr):
              <input className='outline' type="number" value={molarflowrate} onChange={(e) => setMolarFlowRate(e.target.value)} />
            </label> 
            <label>
              Conversion of A,X<sub>A</sub>:
              <input className='outline' type="number" value={conversionofA} onChange={(e) => setConversionofA(e.target.value)} />
            </label>

            <button onClick={calculateVolumeOfPFR}>Calculate Volume</button>
            <div>
               Volume Of PFR(m<sup>3</sup>): {volumeOfPFR}
           </div>

          

           </div>
           

            
        </div>

    )

}

export default ReactorDesign