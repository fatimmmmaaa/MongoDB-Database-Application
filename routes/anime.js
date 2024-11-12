import express from 'express';
import Anime from '../models/anime.js'; 

const router = express.Router();

// GET all 
router.get('/', async (req, res) => {
    try {
        const animeCharacters = await Anime.find();
        res.json(animeCharacters);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// GET
router.get('/:id', async (req, res) => {
    try {
        const animeCharacter = await Anime.findById(req.params.id);
        if (!animeCharacter) {
            return res.status(404).json({ error: 'Anime character not found' });
        }
        res.json(animeCharacter);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// POST 
router.post('/', async (req, res) => {
    try {
        const anime = new Anime(req.body);
        await anime.save();
        res.status(201).json(anime);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// PUT 
router.put('/:id', async (req, res) => {
    try {
        const anime = await Anime.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!anime) {
            return res.status(404).json({ error: 'Anime not found' });
        }
        res.json(anime);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// DELETE 
router.delete('/:id', async (req, res) => {
    try {
        const deletedAnimeCharacter = await Anime.findByIdAndDelete(req.params.id);
        if (!deletedAnimeCharacter) {
            return res.status(404).json({ error: 'Anime character not found' });
        }
        res.json({ message: 'Anime character deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
