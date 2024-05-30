import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const UserDetails = ({ user }) => {
    const [isDetailsVisible, setIsDetailsVisible] = useState(true);

    

    return (
        <div className="bg-white p-4 rounded-lg shadow-md mt-4 w-full">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{user.name}</h2>
                <button onClick={() => setIsDetailsVisible(!isDetailsVisible)} className="text-2xl">
                    {isDetailsVisible ? <FaAngleUp /> : <FaAngleDown />}
                </button>
                
            </div>
            {isDetailsVisible && (
                <div className="mt-2">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
