import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearch, users, sortBy }) => {
    const [term, setTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (term) {
            setSuggestions(
                users.filter((user) =>
                    user[sortBy].toLowerCase().includes(term.toLowerCase())
                )
            );
        } else {
            setSuggestions([]);
        }
    }, [term, users, sortBy]);

    const handleSearch = (searchTerm) => {
        onSearch(searchTerm);
        setTerm("");
        setSuggestions([]);
    };

    return (
        <div className="relative w-full">
            <input
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder={`Search by ${sortBy}`}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
                onClick={() => handleSearch(term)}
                className="absolute inset-y-0 right-0 px-4 py-2 bg-indigo-600 text-white rounded-r-md"
            >
                Search
            </button>
            {suggestions.length > 0 && (
                <ul className="absolute z-10 left-0 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                    {suggestions.map((user) => (
                        <li
                            key={user.id}
                            onClick={() => handleSearch(user[sortBy])}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        >
                            {user[sortBy]}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
