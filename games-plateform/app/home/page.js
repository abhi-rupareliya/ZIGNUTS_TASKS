'use client';

import { useState, useEffect } from 'react';
import Game from './Game';

export default function GamingPlatform() {
    const [games, setGames] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredGames, setFilteredGames] = useState([]);
    const [platform, setPlatform] = useState('');
    const [genre, setGenre] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setGames(data.slice(1));
                setFilteredGames(data.slice(1));
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, []);

    useEffect(() => {
        const filtered = games.filter((game) => {
            const matchesTitle = game.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesPlatform = platform ? game.platform === platform : true;
            const matchesGenre = genre ? game.genre.includes(genre) : true;
            return matchesTitle && matchesPlatform && matchesGenre;
        });

        setFilteredGames(filtered);

        if (searchQuery) {
            const searchSuggestions = games.filter((game) =>
                game.title.toLowerCase().includes(searchQuery.toLowerCase())
            ).map((game) => game.title);
            setSuggestions(searchSuggestions);
        } else {
            setSuggestions([]);
        }
    }, [searchQuery, platform, genre, games]);

    const platforms = [...new Set(games.map((game) => game.platform))].filter((plat) => plat !== '' && !plat.includes(','));
    const genres = [...new Set(games.map((game) => game.genre))].filter((gen) => gen !== '' && !gen.includes(','));

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
        setSuggestions([]);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-center">Gaming Platform</h1>

            <div className="bg-white p-4 shadow-md rounded-lg flex flex-wrap gap-4 items-center justify-center">
                <div className="relative w-full max-w-sm">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for a title..."
                        className="w-full border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {suggestions.length > 0 && (
                        <div className="absolute top-full left-0 w-full bg-white border mt-1 max-h-60 overflow-y-auto shadow-lg">
                            {suggestions.map((suggestion, index) => (
                                <div
                                    key={index}
                                    className="p-2 cursor-pointer hover:bg-gray-200"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <select
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">All Platforms</option>
                    {platforms.map((plat, index) => (
                        <option key={index} value={plat}>
                            {plat}
                        </option>
                    ))}
                </select>

                <select
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">All Genres</option>
                    {genres.map((gen, index) => (
                        <option key={index} value={gen}>
                            {gen}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Editor's Choice</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredGames.filter((game) => game.editors_choice === 'Y').length > 0 ? (
                        filteredGames.filter((game) => game.editors_choice === 'Y').map((game, index) => (
                            <Game
                                key={index}
                                title={game.title}
                                platform={game.platform}
                                genre={game.genre}
                                score={game.score}
                                editors_choice={game.editors_choice}
                            />
                        ))
                    ) : (
                        <p className="text-gray-500">No Editor's Choice games found.</p>
                    )}
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Other Games</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredGames.filter((game) => game.editors_choice !== 'Y').length > 0 ? (
                        filteredGames.filter((game) => game.editors_choice !== 'Y').map((game, index) => (
                            <Game
                                key={index}
                                title={game.title}
                                platform={game.platform}
                                genre={game.genre}
                                score={game.score}
                                editors_choice={game.editors_choice}
                            />
                        ))
                    ) : (
                        <p className="text-gray-500">No other games found.</p>
                    )}
                </div>
            </div>

        </div>
    );
}
