import React from 'react'

const UserDetails = ({name, age, job}) => {


  return (
    <div>
        <h2>Esta é a lista de usuarios</h2>
        <p>Nome: {name}</p>
        <p>Idade: {age}</p>
        <p>Profissão: {job}</p>
        {age >= 18 ? (
            <p>Este usuario pode tirar carteira de habilitação por ter {age} anos</p>
        ) : (
            <p>Este usuario não pode tirar carteira de habilitação por ter {age} anos</p>
        )}
    </div>
  )
}

export default UserDetails