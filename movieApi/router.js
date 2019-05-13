'use strict';
const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/genres', (req, res) => {
    api.setGenres()
        .then(genres => {
            console.log(genres.data.genres);
            res.status(200).json(genres.data.genres);
        })
        .catch(err => res.status(500).json({ message: 'Internal server error' }));
});

router.get('/playing', (req, res) => {
    api.fetchPlaying()
        .then(playing => {
            console.log(playing.data.results);
            res.status(200).json(playing.data.results);
        })
        .catch(err => res.status(500).json({ message: 'Internal server error' }));
});

router.get('/upcoming', (req, res) => {
    api.fetchUpcoming()
        .then(upcoming => {
            console.log(upcoming.data.results);
            res.status(200).json(upcoming.data.results);
        })
        .catch(err => res.status(500).json({ message: 'Internal server error' }));
});

router.get('/popular', (req, res) => {
    api.fetchPopular()
        .then(popular => {
            console.log(popular.data.results);
            res.status(200).json(popular.data.results);
        })
        .catch(err => res.status(500).json({ message: 'Internal server error' }));
});

router.get('/top', (req, res) => {
    api.fetchTop()
        .then(top => {
            console.log(top.data.results);
            res.status(200).json(top.data.results);
        })
        .catch(err => res.status(500).json({ message: 'Internal server error' }));
});

router.get('/recon/:id', (req, res) => {
    const id = req.params.id;
    api.fetchRecon(id)
        .then(recon => {
            console.log(recon.data.results);
            res.status(200).json(recon.data.results);
        })
        .catch(err => res.status(500).json({ message: 'Internal server error' }));
});

router.get('/movie/:id', (req, res) => {
    const id = req.params.id;
    api.fetchMovieDetails(id)
        .then(details => {
            console.log(details.data);
            res.status(200).json(details.data);
        })
        .catch(err => res.status(500).json({ message: 'Internal server error' }));
});

router.get('/cast/:id', (req, res) => {
    const id = req.params.id;
    api.fetchActors(id)
        .then(cast => {
            console.log(cast.data.cast);
            res.status(200).json(cast.data.cast);
        })
        .catch(err => res.status(500).json({ message: 'Internal server error' }));
});

router.get('/trailer/:id', (req, res) => {
    const id = req.params.id;
    api.fetchMovieTrailer(id)
        .then(trailer => {
            console.log(trailer.data.results);
            res.status(200).json(trailer.data.results[0]);
        })
        .catch(err => res.status(500).json({ message: 'Internal server error' }));
});

router.get('/search/:id', (req, res) => {
    const id = req.params.id;
    api.searchMovie(id)
        .then(search => {
            console.log(search.data.results);
            res.status(200).json(search.data.results);
        })
        .catch(err => res.status(500).json({ message: 'Internal server error' }));
});

module.exports = { router };