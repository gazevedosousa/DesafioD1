import axios from "axios";

const chaveAPI = ''

const pegaFilmes = async() => {
    let result = []
    for(let i=1;i<=2;i++){
        const getFilmes = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${chaveAPI}&language=en-US&page=${i}`).then(resp => {
            resp.data.results.forEach(element => {
                result.push(element)
            });
            
        })
    }
    return result
}

const filmes = await pegaFilmes()

export default filmes