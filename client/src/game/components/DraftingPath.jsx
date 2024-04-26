import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function DraftingPath() {
    const [visibility, setVisibility] = useState('private');
    const [collaboratorName, setCollaboratorName] = useState('');
    const [collaborators, setCollaborators] = useState([]);

    const handleVisibilityChange = (e) => {
        setVisibility(e.target.value);
    };

    const handleCollaboratorChange = (e) => {
        setCollaboratorName(e.target.value);
    };

    const handleAddCollaborator = () => {
        if (collaboratorName.trim() !== '') {
            setCollaborators([...collaborators, collaboratorName]);
            setCollaboratorName('');
        }
    };

    return (
        <nav className="dark:bg-transparent bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg fixed left-0 z-20 h-full w-full md:w-80 flex flex-col justify-center overflow-y-auto py-8 md:py-20 px-4 md:px-10 border-r-4 border-primary">
            <div className="max-w-screen-xl mx-auto">
                <form>
                    {/* Hunt Info */}
                    <div className="mb-6">
                        <label htmlFor="huntInfo" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                            Hunt Info
                        </label>
                        <input
                            type="text"
                            id="huntInfo"
                            placeholder="Hunt Title"
                            className="w-full h-10 px-4 py-2 rounded-md bg-white bg-opacity-30 dark:bg-opacity-30 text-gray-900 dark:text-white focus:outline-none focus:ring focus:ring-blue-300 focus:border-transparent"
                        />
                        <textarea
                            id="description"
                            placeholder="Add a description"
                            className="w-full h-24 px-4 py-2 mt-2 rounded-md bg-white bg-opacity-30 dark:bg-opacity-30 text-gray-900 dark:text-white focus:outline-none focus:ring focus:ring-blue-300 focus:border-transparent resize-none"
                        ></textarea>
                    </div>
                    {/* Point Stages */}
                    <div className="mb-6">
                        <label htmlFor="pointStages" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                            Point Stages
                        </label>
                        <div className="relative mt-2">
                            <input
                                type="text"
                                id="pointStages"
                                placeholder="Exact coordinates"
                                className="w-full h-10 px-4 py-2 pr-10 rounded-md bg-white bg-opacity-30 dark:bg-opacity-30 text-gray-900 dark:text-white focus:outline-none focus:ring focus:ring-blue-300 focus:border-transparent"
                            />
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        <label htmlFor="radius" className="block text-sm font-medium text-gray-700 dark:text-white mt-2">
                            Radius 
                        </label>
                        <input
                            type="range"
                            id="radius"
                            min="0"
                            max="50"
                            defaultValue="0"
                            className="w-full h-10 mt-2 bg-white bg-opacity-30 dark:bg-opacity-30 text-gray-900 dark:text-white focus:outline-none focus:ring focus:ring-blue-300 focus:border-transparent"
                        />
                    </div>
                    {/* Visibility */}
                    <div className="mb-6">
                        <label htmlFor="visibility" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                            Visibility
                        </label>
                        <div className="flex items-center space-x-4">
                            <label htmlFor="private" className="inline-flex items-center">
                                <input
                                    type="radio"
                                    id="private"
                                    name="visibility"
                                    value="private"
                                    checked={visibility === 'private'}
                                    onChange={handleVisibilityChange}
                                    className="form-radio text-blue-500 focus:ring-blue-300"
                                />
                                <span className="ml-2 text-gray-900 dark:text-white">Private</span>
                            </label>
                            <label htmlFor="public" className="inline-flex items-center">
                                <input
                                    type="radio"
                                    id="public"
                                    name="visibility"
                                    value="public"
                                    checked={visibility === 'public'}
                                    onChange={handleVisibilityChange}
                                    className="form-radio text-blue-500 focus:ring-blue-300"
                                />
                                <span className="ml-2 text-gray-900 dark:text-white">Public</span>
                            </label>
                        </div>
                        {visibility === 'public' && (
                            <input
                                type="number"
                                id="seekers"
                                placeholder="Number of seekers"
                                className="w-full h-10 px-4 py-2 mt-2 rounded-md bg-white bg-opacity-30 dark:bg-opacity-30 text-gray-900 dark:text-white focus:outline-none focus:ring focus:ring-blue-300 focus:border-transparent"
                            />
                        )}
                    </div>
                    {/* Collaborators */}
                    <div className="mb-6">
                        <div className="flex justify-between space-x-1">
                            <button type="button" className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:border-transparent">
                                Save Draft
                            </button>
                            <div className="w-4"></div>
                            <button type="button" className="flex-1 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 focus:border-transparent">
                                Publish
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </nav>
    );
}
