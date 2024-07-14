import "./MyForm.css"
import React from 'react'

import { useState } from 'react'

const MyForm = ( {user} ) => {

  // gerenciamento de dados

  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");
  
  const handleName = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando o formulario ")
    console.log(name, email, bio, role)
    setName("")
    setEmail("");
    setBio("")
  }




  return (
    <div>
      {/* Criação do form */}
      <form onSubmit={handleSubmit}> 
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="" id="" placeholder='Digite o seu nome' onChange={handleName} value={name}/>
        </div>
        {/* label envolvendo input - recomendado pelo react */}
        <label>
          <span>E-mail</span>
          <input type="email" placeholder="Digite o seu e-mail aqui" onChange={(e) => setEmail(e.target.value)} value={email}/>
        </label>
        {/*  Text-area */}
        <label>
          <span>Bio:</span>
          <textarea name="bio" placeholder="Descrição" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>
        {/* SELECT */}
        <label>
          <span>Função do Sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
          <option value="user">Usuario</option>
          <option value="editor">Editor</option>
          <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />

      </form>
    </div>
  )
}

export default MyForm