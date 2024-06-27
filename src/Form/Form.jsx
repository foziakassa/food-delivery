import Button from "../Button/Button"
import './Form.css'
import { useState } from "react"
export default function Form(){
    const [Name , setName]=useState('');
    const [Age , setAge]=useState(0);
    const [IsSubmit , SetIsSubmit]=useState(false);
    var x =`${Name} (yeets ${Age})`

    function nameChangeHandeler(e){

        setName(e.target.value)
    }
    function ageChaangeHandler(e){
        setAge(e.target.value)
    }
    function formHandler(e){
        e.preventDefault();
        SetIsSubmit(true);
        if(Age<0){
            alert('')
        }
        
        
    }
    return(
        <div className="Form" onSubmit={formHandler}>
            <form action="">
                <label htmlFor="">
                    <b>User Name{Name}</b>
                </label>
                <input type="text"
                placeholder={Name}
                value={Name}
                onChange={nameChangeHandeler} 
                 />
                
                <label htmlFor="">
                    <b>Age (Years)</b>
                </label>
                <input type="number"
                value={Age}
                placeholder={Age}
                 onChange={ageChaangeHandler} 
                 />

                <Button/>
            </form>
            {IsSubmit?(<section>
                <input type="text"  placeholder={x}/>
                <h1>hello welcome {Name}</h1>


</section>):(null)}
            

        </div>
    )
}