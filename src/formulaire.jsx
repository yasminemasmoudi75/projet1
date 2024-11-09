import { useState } from "react";

function Formulaire() {
  const [name, setName] = useState(""); 
  const [prenom, setPrenom] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [age, setAge] = useState(""); 
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log("le nom ",name,"le prenom",prenom," email",email,"age",age);
  }

  return (
    <>
      <div>
        Nom: <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </div>

      <div>{
        name ?<span> vous etes {name}</span>:null}
      </div>

      <div>
        prenom: <input type="text" value={prenom} onChange={(event) => setPrenom(event.target.value)} />
      </div>
      <div>{
        prenom ?<span> vous etes {prenom}</span>:null}
      </div>

      <div>
        Email: <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>{
        email ?<span> mon email est {email} ans</span>:null}
      </div>

      <div>
        age: <input type="text" value={age} onChange={(event) => setAge(event.target.value)} />
      </div>
      <div>{
        age ?<span> jai {age} ans</span>:null}
      </div>
      <div>
      <button className="btn btn-success"
        onClick={(event)=>handleSubmit(event)}>valider

      </button>
      </div>
      
    </>
  );
}

export default Formulaire;
