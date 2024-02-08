import { useState } from "react";

function Form() {
    let [Name , setName] = useState("")
    let [Password , setPassword] = useState("")
    let [Gender , setGender] = useState("")

    const NameHandler = (value)=>{
        setName(value)
    }

    const PasswordHandler = (value)=>{
        setPassword(value)
    }

    const GenderHandler = (value)=>{
        setGender(value)
    }
     

    return(
        <form onSubmit={(e) =>{
            e.preventDefault()
            console.log('submited')
            console.log(
                {
                    Name,
                    Password,
                    Gender,
                }
            )
        }}>
          <label>Name</label>  
          <input type="text" placeholder="your name" onChange={(event) =>{
            setName(event.target.value)
          }}/>
          <br />
          <label>Password</label>
          <input type="password" placeholder="your password" onChange={(e) =>{
                PasswordHandler(e.target.value)
          }}/>
          <br />

            <label for="" class="form-label">Gender</label>
            <select className="form-select form-select-lg" onChange={(event)=>{
                GenderHandler(event.target.value)
            }}>
                <option value="">Male</option>
                <option value="">Female</option>
            </select>
            <button type="submit">SUBMIT</button>
        </form>
    )
}

export default Form;