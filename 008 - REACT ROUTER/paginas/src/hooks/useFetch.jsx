import {useState, useEffect} from 'react'

// 4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null) //o tipo esta como null pois nao sabemos o tipo de dado que será recebido

    // 5 - refatorando post
    const [config, setConfig] = useState(null) //configura o post e cabeçalhos
    const [method, setMethod] = useState(null) //vai dizer qual o metodo estamos utilizando (get ou post)
    const [callFetch, setCallFetch] = useState(false) //será mapeado, sempre que for alterado vai chamar o fetch para atualizar os dados
    
    // 6 - loading
    const [loading, setLoading] = useState(false)

    //7 - tratando erros
    const [error, setError] = useState(null)

    // 8 - desafio
    const [itemId, setItemId] = useState(null)

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data),
            });

            setMethod(method);
        } else if (method === "DELETE") {
                setConfig({
                    method,
                    headers: {
                        "Content-type": "application/json"
                    },
                });
                setMethod(method);
                setItemId(data)
        }
    }

    useEffect(() => {
        const fetchData = async () => {

            //6 - loading
            setLoading(true);

            try {
                const res = await fetch(url);

                const json = await res.json();

                setData(json);
            } catch (error) {
                console.log(error.message);

                setError("Houve algum erro ao carregar os dados!");
            };


            setLoading(false);
        };

        fetchData();

    }, [url, callFetch]);

    // 5 refatorando post
    useEffect(() => {
        

        const httpRequest = async () => {

            let json

            if(method ==="POST") {
            
                let fetchOptions = [url, config];
    
                const res = await fetch(...fetchOptions);
    
                json = await res.json();
    
  
            } else if (method === "DELETE") {

                const deleteUrl = `${url}/${itemId}`

                const res = await fetch(deleteUrl, config)

                json = await res.json()

            }

            setCallFetch(json);
        }

        httpRequest();

    }, [config, method, url])

    return {data, httpConfig, loading, error};
}