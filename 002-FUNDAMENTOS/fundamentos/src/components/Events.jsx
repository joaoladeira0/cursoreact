const Events = () => {
    const handleMyEvents = (e) => {
        console.log(e);

        console.log("Ativou o evento");
    };

    const renderSomething = (x) => {
        if(x) {

            return <h1>Renderizando isso!</h1>;
        } else {
            return <h1>Também posso renderizar isso!</h1>;
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvents}>Clique Aqui</button>
            </div>

            <div>
                <button onClick={() => console.log("Clicou")}>Clique Aqui</button>
            </div>

            <div>
                <button onClick={() => {
                    if (true) {
                        console.log("Isto não deveria existir");

                    }
                }}
                >
                    Clique Aqui</button>
            </div>

            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events