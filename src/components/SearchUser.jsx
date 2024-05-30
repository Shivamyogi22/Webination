import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import SearchHistory from "./SearchHistory";
import UserDetails from "./UserDetails";
import UserList from "./UserList";

const SearchUser = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchHistory, setSearchHistory] = useState([]);
    const [sortBy, setSortBy] = useState("name");
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    useEffect(() => {
        const savedSession = sessionStorage.getItem("userSession");
        const savedHistory = localStorage.getItem("searchHistory");
        if (!savedSession) {
            sessionStorage.setItem("userSession", "active");
            localStorage.removeItem("searchHistory");
        } else if (savedHistory) {
            setSearchHistory(JSON.parse(savedHistory));
        }
    }, []);

    const updateSearchHistory = (term) => {
        const updatedHistory = [
            term,
            ...searchHistory.filter((item) => item !== term),
        ];
        setSearchHistory(updatedHistory);
        localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
        updateSearchHistory(term);
        setSelectedUser(null);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleSelectUser = (user) => {
        setSelectedUser(user);
    };

    const clearSelectedUser = () => {
        setSelectedUser(null);
    };

    const handleRemoveHistoryItem = (term) => {
        const updatedHistory = searchHistory.filter((item) => item !== term);
        setSearchHistory(updatedHistory);
        localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    };

    return (
        <div className="flex flex-col items-center p-4 space-y-4 bg-peach-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4 text-peach-700">User Info</h1>
            <SearchBar onSearch={handleSearch} users={users} sortBy={sortBy} />
            <div className="flex space-x-4">
                <label htmlFor="sortBy" className="text-lg text-peach-700">
                    Search by:
                </label>
                <select
                    id="sortBy"
                    value={sortBy}
                    onChange={handleSortChange}
                    className="px-2 py-1 border rounded-md focus:outline-none focus:ring-peach-500 focus:border-peach-500"
                >
                    <option value="name">Name</option>
                    <option value="username">Username</option>
                    <option value="email">Email</option>
                </select>
            </div>
            <SearchHistory
                history={searchHistory}
                onSearch={handleSearch}
                onRemove={handleRemoveHistoryItem}
            />
            <h2 className="text-2xl font-bold text-peach-700">Result</h2>
            <div className="flex justify-center space-x-4 w-full">
                <div className="w-full md:w-1/2 lg:w-1/3">
                    {selectedUser ? (
                        <UserDetails
                            user={selectedUser}
                            clearSelectedUser={clearSelectedUser}
                        />
                    ) : (
                        <UserList
                            searchTerm={searchTerm}
                            sortBy={sortBy}
                            onSelectUser={handleSelectUser}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchUser;
