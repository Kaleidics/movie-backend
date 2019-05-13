const axios = require('axios');

const APIKEY = process.env.API_KEY;

const api = {

    setGenres: function() {
        const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKEY}&language=en-US`;
        return axios.get(url)
            .then(response => response)
            .catch(err => console.log(err));
    },

    fetchPlaying: function() {
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`;
        return axios.get(url)
            .then(response => response)
            .catch(err => console.log(err));
    },

    fetchUpcoming: function() {
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`;
        return axios.get(url)
            .then(response => response)
            .catch(err => console.log(err));
    },

    fetchPopular: function() {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`;
        return axios.get(url)
            .then(response => response)
            .catch(err => console.log(err))
    },

    fetchTop: function() {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`;
        return axios.get(url)
            .then(response => response)
            .catch(err => console.log(err))
    },

    fetchRecon: function(id) {
        const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${APIKEY}&language=en-US&page=1`;
        return axios.get(url)
            .then(response => response)
            .catch(err => console.log(err))
    },

    fetchMovieDetails: function(id) {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`;
        return axios.get(url)
            .then(response => response)
            .catch(err => console.log(err))
    },

    fetchActors: function(id) {
        const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}`;
        return axios.get(url)
            .then(response => response)
            .catch(err => console.log(err));
    },

    fetchMovieTrailer: function(id) {
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}&language=en-US`;
        return axios.get(url)
            .then(response => response)
            .catch(err => console.log(err));
    },

    searchMovie: function(searchTerm) {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${searchTerm}`;
        return axios.get(url)
            .then(response => response)
            .catch(err => console.log(err));
    }

}

module.exports = api;