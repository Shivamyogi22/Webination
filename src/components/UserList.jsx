import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = ({ searchTerm, sortBy, onSelectUser }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    const filteredUsers = users
        .filter((user) =>
            user[sortBy].toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    if (!searchTerm) {
        return null; // Don't render the list if there's no search term
    }

    return (
        <div>
            <ul className="bg-white p-4 rounded-lg shadow-md space-y-2 font-bold">
                {filteredUsers.map((user) => (
                    <li
                        key={user.id}
                        className="px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                        onClick={() => onSelectUser(user)}
                    >
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
