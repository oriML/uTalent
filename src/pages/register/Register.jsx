import { useState } from "react";
import TalentRegister from "./sub-cmps/TalentRegister";
import ConsumerRegister from "./sub-cmps/ConsumerRegister";

const Register = () => {

    const [toggleSelection, setToggleSelection] = useState(0)

    return(

        <section className="navigate-register-page">
            <div className="navigate-register-headline">
            {toggleSelection === 0 && <span>אני...</span>}
            </div>
                <div className="navigate-register">

                    {toggleSelection === 0 && <button className="btn-register-toggle" onClick={()=> setToggleSelection(1)}>Talent</button>}
                    {toggleSelection === 0 && <button className="btn-register-toggle" onClick={()=> setToggleSelection(2)}>Consumer</button>}
                    {toggleSelection !== 0 && <button className="btn-register-toggle" onClick={()=> setToggleSelection(0)}>Go Back</button>}
                    
                    {toggleSelection === 1 && <TalentRegister setToggleSelection={setToggleSelection}/>}
                    {toggleSelection === 2 && <ConsumerRegister setToggleSelection={setToggleSelection}/>}


                </div>
        </section>

        )
}

export default Register