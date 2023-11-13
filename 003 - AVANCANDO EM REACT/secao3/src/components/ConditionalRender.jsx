import React, { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(false)
    
    const [name, setName] = useState("Cleiton")

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Se x for false, não!</p>}

        <h1>if ternario</h1>
        {/* sintaxe: condição ? bloco1 : bloco2 */}
        {name === "João" ? (
            <div>
                <p>O nome é {name}!</p>
            </div>
        ) : (
            <div>
                <p>O nome não é João, mas sim {name}!</p>
            </div>
        )}
        <button onClick={() => setName("João")}>Para mudar o nome para João, clique aqui!</button>
    </div>
  )
}

export default ConditionalRender