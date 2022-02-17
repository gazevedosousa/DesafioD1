import api from '../Services/api.js'

const filmes = api

filmes.forEach(element => {
    console.log(element.title)
});
