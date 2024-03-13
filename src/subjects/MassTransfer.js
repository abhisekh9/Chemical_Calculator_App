import React, { useState } from "react";

const MassTransfer = () =>{

    const[masstransferflux, setMassTransferFlux] = useState('');
    const[concentration,setConcentration] = useState("")
    const[molefractionofoneliquidinterface,setMoleFractionOfOneLiquidInterface] = useState("")
    const[molefractionofanotherliquidinterface,setMoleFractionOfAnotherLiquidInterface] = useState("")
    const[massTransferCoefficient,setMassTransferCoefficient] = useState("")

 

    const calculateMassTransferCoefficient = () => {

        const Na = parseFloat(masstransferflux);
        const C = parseFloat(concentration)
        const xAi = parseFloat(molefractionofoneliquidinterface)
        const xBi = parseFloat(molefractionofanotherliquidinterface)

        if(Na && C && xAi && xBi && xAi != xBi){

            const Kc =  Na/(C*(xAi-xBi))

            setMassTransferCoefficient(Kc);

        }
        else{

            setMassTransferCoefficient('Invalid input');

        }

     
        
    }





    return(

       
      

        <div>

            {/* 1 */}
          

           


            <div>

  
           <p>
             <h1 className="text-2xl "> 1.Film Theory</h1>
             Formula Used : Kc = (D<sub>AB</sub>)/d  =Na/C*(x<sub>Ai</sub> - x<sub>Bi</sub>)

            </p>

            <br></br>
            <br></br>

            <label>
               Mass Transfer Flux,Na(mol/cm2-s) :
               <input className='outline' type="number" value={masstransferflux} onChange={(event) => setMassTransferFlux(event.target.value)} />
            </label> 

            <label>
               Concentration,C(mol/cm3) :
             <input className='outline' type="number" value={concentration} onChange={(event) => setConcentration(event.target.value)} />
            </label>
            <label>
               Mole Fraction Of One Liquid Interface,x<sub>Ai</sub>:
               <input className='outline' type="number" value={molefractionofoneliquidinterface} onChange={(event) => setMoleFractionOfOneLiquidInterface(event.target.value)} />
           </label>
           <label>
              Mole Fraction Of another Liquid Interface,x<sub>Bi</sub>:
              <input className='outline' type="number" value={molefractionofanotherliquidinterface} onChange={(event) => setMoleFractionOfAnotherLiquidInterface(event.target.value)} />
            </label>

            <button onClick={calculateMassTransferCoefficient}> Calculate Mass Transfer Coefficient</button>
           <div>
               Mass Transfer Coefficient,Kc : {massTransferCoefficient}
           </div>

            </div>

    






        </div>

    )

}

export default MassTransfer