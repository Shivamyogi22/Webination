import React from "react";

const SearchHistory = ({ history, onSearch, onRemove }) => {
    return (
        <div className="bg-gray-300 p-4 rounded-lg shadow-lg w-[300px]">
            <h3 className="text-lg font-semibold mb-2">Search History</h3>
            <ul>
                {history.map((term, index) => (
                    <li key={index} className="flex justify-between items-center cursor-pointer hover:bg-gray-200 p-2 rounded-md transition-colors">
                        <span onClick={() => onSearch(term)}>{term}</span>
                        <button onClick={() => onRemove(term)} className="ml-2 text-red-500">✕</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchHistory;
