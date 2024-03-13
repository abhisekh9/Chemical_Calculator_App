
import React, { useState } from 'react';


const ReactionKinetics = () => {

//   1
  const [temperature1, setTemperature1] = useState('');
  const [time1, setTime1] = useState('');
  const [temperature2, setTemperature2] = useState('');
  const [time2, setTime2] = useState('');
  const [activationEnergy, setActivationEnergy] = useState('');

//   2
  const [rateconstant, setRateConstant] = useState('');
  const [concentration1, setConcentration1] = useState('');
  const [orderofreaction1, setOrderofReaction1] = useState('');
  const [concentration2, setConcentration2] = useState('');
  const [orderofreaction2, setOrderofReaction2] = useState('');
  const [rateOfReaction, setRateOfReaction] = useState('')

// 3
  const [intialconc, setInitialConc] = useState('')
  const [finalconc, setFinalConc] = useState('')
  const [time, setTime] = useState('')
  const [rateconst,setRateConst] = useState('')

  
//   1
  const calculateActivationEnergy = () => {
    const T1 = parseFloat(temperature1);
    const t1 = parseFloat(time1);
    const T2 = parseFloat(temperature2);
    const t2 = parseFloat(time2);

    if (T1 && t1 && T2 && t2) {

      const R = 8.314;
      const lnRatio = Math.log(t1 / t2);
      const Ea = (R * lnRatio)/(1/T1 - 1/T2);

      setActivationEnergy(Ea.toFixed(2));
    } else {
      // Handle invalid input
      setActivationEnergy('Invalid input');
    }
  };


// 2
  const calculateRateOfReaction = () => {
    const k = parseFloat(rateconstant)
    const C1 = parseFloat(concentration1)
    const m= parseFloat(orderofreaction1)
    const C2 = parseFloat(concentration2)
    const n = parseFloat(orderofreaction2)

    if(k && C1 && m && C2 && n){

        const rA =  k * (C1**m) * (C2**n)
      

        setRateOfReaction(rA)
    }
    else{
        setRateOfReaction('Invalid input');
    }

    }

// 3

    const calculateRateConst = () => {

        const Ca = parseFloat(finalconc)
        const Cao = parseFloat(intialconc)
        const t = parseFloat(time)

        if(Ca && Cao && t){
            const lnRatio = Math.log(Cao/Ca);
            const k = lnRatio/t

            setRateConst(k.toFixed(4))
        }
        else{
            setRateConst('Invalid input');
        }


      



    }




  

  return (
    <div >


        {/* 1 */}

        <br></br>

        <div>

            <div>
                <p>
                  <h1 className='text-2xl'>1.Calculate Rate Of Equations </h1>
                  Formula Used: -r<sub>A</sub> = kC<sub>A</sub><sup>m</sup>C<sub>B</sub><sup>n</sup>
                </p>

                <label>
                    Rate Constant(k):
                    <input className='outline' type="number" value={rateconstant} onChange={(e) => setRateConstant(e.target.value)} />
                </label>

                <label>
                    Concentration Of A(mol/lit):
                    <input className='outline' type="number" value={concentration1} onChange={(e) => setConcentration1(e.target.value)} />
                </label>

                <label>
                    Order of reaction of A(m):
                    <input className='outline' type="number" value={orderofreaction1} onChange={(e) => setOrderofReaction1(e.target.value)} />
                </label>

                <label>
                    Concentration Of B(mol/lit):
                    <input className='outline' type="number" value={concentration2} onChange={(e) => setConcentration2(e.target.value)} />
                </label>

                <label>
                    Order of reaction of B(n):
                    <input className='outline' type="number" value={orderofreaction2} onChange={(e) => setOrderofReaction2(e.target.value)} />
                </label>
                <button onClick={calculateRateOfReaction}>Calculate Rate Of Reactions</button>
                <div>
                    Rate Of Reactions: {rateOfReaction}
                </div>
                

            


            </div>

        </div>



        {/* 2 */}

        <br></br>

        <div>

<div>
    <p>
      <h1 className='text-2xl'>2.Calculate Rate Constant of Irreversible Unimolecular First  Reaction </h1>
      A -> product
      <br></br>
      Formula Used: k = [ln(C<sub>A</sub><sub>o</sub>/C<sub>A</sub>)]/t
    </p>

    <label>
        Intial Concentration of A(mol/lit):
        <input className='outline' type="number" value={intialconc} onChange={(e) => setInitialConc(e.target.value)} />
    </label>

    <label>
        Final Concentration of A(mol/lit):
        <input className='outline' type="number" value={finalconc} onChange={(e) => setFinalConc(e.target.value)} />
    </label>

    <label>
        Time(s):
        <input className='outline' type="number" value={time} onChange={(e) => setTime(e.target.value)} />
    </label>

    <button onClick={calculateRateConst}>Calculate Rate Constant</button>
    <div>
        Rate Constant: {rateconst}
    </div>





</div>

        </div>  

         {/*3  */}
        
        <br></br>

        <div>

          <p>
            <h1 className="text-2xl "> 3.Activation Energy</h1>
            Formula Used:Ea = (R * ln(t1/t2))/(1/T1 - 1/T2)
          </p>
       


        <br></br>

      
      <label>
        Temperature 1 (K):
        <input className='outline' type="number" value={temperature1} onChange={(e) => setTemperature1(e.target.value)} />
      </label>
      <label>
        Time 1 (min):
        <input className='outline' type="number" value={time1} onChange={(e) => setTime1(e.target.value)} />
      </label>
      <label>
        Temperature 2 (K):
        <input className='outline' type="number" value={temperature2} onChange={(e) => setTemperature2(e.target.value)} />
      </label>
      <label>
         Time 2 (min):
        <input className='outline' type="number" value={time2} onChange={(e) => setTime2(e.target.value)} />
      </label>
      <button onClick={calculateActivationEnergy}>Calculate Activation Energy</button>
      <div>
        Activation Energy: {activationEnergy}
      </div>

        </div>



      


    </div>

       
  


  );
}

export default ReactionKinetics;