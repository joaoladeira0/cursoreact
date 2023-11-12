import MyComponent from "./MyComponent";

const TemplateExpressions = () => {
    const name = "João"
    const data = {
        age: 23,
        job: "Planejamento e Controle de Produção"
    }

    return (
        <div>
            <MyComponent />
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{4 + 4}</p>
        </div>
    );
};

export default TemplateExpressions
