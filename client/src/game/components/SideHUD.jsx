import React from 'react';

export default function SidebarMap({ handleAddClick }) {
    return (
        <nav className="fixed top-0 right-0 h-full text-white w-32 flex flex-col justify-center items-center z-10">
            <div className="p-4 hover:bg-gray-700">Item 1</div>
            <div className="p-4 hover:bg-gray-700">Item 2</div>
            <div className="p-4 hover:bg-gray-700">Item 3</div>
            <div className="p-4 hover:bg-gray-700">Item 4</div>
            <button onClick={handleAddClick} className="p-4 bg-blue-500 text-white hover:bg-blue-700">Add Place</button>
        </nav>
    );
}
