import "./MyComponent.css"
import React from 'react'

const MyComponent = () => {
  return (
    <div>
        <h1>Meu componente</h1>
        <p>Este é o paragrafo do meu componente</p>
        <p className="my-comp-paragraph">Este também é do componente</p>
    </div>
  )
}

export default MyComponent