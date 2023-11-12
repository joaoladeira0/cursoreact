const Challenge = () => {

    const n1 = 3
    const n2 = 3
    let n3 = 0

    const handleSomar = () => {
        n3 = n1 + n2
        console.log(n3)
    }

    return(
        <div>
            <h2>Numero 1: {n1}</h2>
            <h2>Numero 2: {n2}</h2>
            <button onClick={handleSomar}>SOMAR</button>
        </div>
    )
}



export default Challenge