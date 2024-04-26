import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import SettingsModal from './SettingsModal';
import Time from './Clock';
import DraftingPath from './DraftingPath';
import { faHouse, faToolbox, faRankingStar, faMapLocationDot, faEllipsis, faCompassDrafting, faUsersRays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function HUD({ showDraftingPanel, setShowDraftingPanel }) {
    // State for showing/hiding modal
    const [showSettingsModal, setShowSettingsModal] = useState(false); 

    //Handle Open setting modal when clicked
    const handleOpenSettingsModal = () => {
        setShowSettingsModal(true);
    };

    const handleCloseSettingsModal = () => {
        setShowSettingsModal(false);
    };

    const handleToggleDraftingPanel = () => {
        setShowDraftingPanel(prevState => {
            console.log('HUD showDraftingPanel changed:', !prevState);
            return !prevState; // Toggle the drafting panel state
        });
    };

    return (
        <>
        <nav className="fixed w-full z-20 top-0 start-0 max-w-[1280px] mx-auto left-0 right-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button 
                        type="button" 
                        className="rounded-full px-1 py-2 bg-blue-500 bg-opacity-50 text-white shadow-lg transition-colors duration-300 hover:bg-opacity-75 focus:outline-none focus:bg-opacity-75"
                        onClick={handleToggleDraftingPanel}
                    >
                        <FontAwesomeIcon icon={faCompassDrafting} className="w-12 h-8" />
                    </button>
                    <button 
                        type="button" 
                        className="rounded-full px-1 py-2 bg-blue-500 bg-opacity-50 text-white shadow-lg transition-colors duration-300 hover:bg-opacity-75 focus:outline-none focus:bg-opacity-75"
                        onClick={handleOpenSettingsModal}
                    >
                        <FontAwesomeIcon icon={faMapLocationDot} className="w-12 h-8" />
                    </button>
                    <button 
                        type="button" 
                        className="rounded-full px-1 py-2 bg-blue-500 bg-opacity-50 text-white shadow-lg transition-colors duration-300 hover:bg-opacity-75 focus:outline-none focus:bg-opacity-75"
                        onClick={handleOpenSettingsModal}
                    >
                        <FontAwesomeIcon icon={faUsersRays} className="w-12 h-8" />
                    </button>
                    <button 
                        type="button" 
                        className="rounded-full px-1 py-2 bg-blue-500 bg-opacity-50 text-white shadow-lg transition-colors duration-300 hover:bg-opacity-75 focus:outline-none focus:bg-opacity-75"
                        onClick={handleOpenSettingsModal}
                    >
                        <FontAwesomeIcon icon={faEllipsis} className="w-12 h-8" />
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                        <li className="relative flex items-center rounded-full bg-gray-200 backdrop-filter backdrop-blur-md bg-opacity-30">
                            <Time></Time>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
        {showDraftingPanel ? (
            <DraftingPath></DraftingPath>
        ) : (
            <nav className="dark:bg-transparent bg-opacity-0 fixed bottom-0 z-20"> 
            <div className="max-w-screen-xl flex flex-wrap mx-auto"> 
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 relative pl-20 pr-6" id="navbar-sticky">
                    <div className="font-medium dark:text-white text-left pt-7 z-20">
                        <div className="text-4xl">Achikatz</div>
                            <div>
                                <div className="flex items-center">
                                    <img src="src/game/assets/icons/coins.png" alt="coins" className="w-8 h-10 mr-2 z-20" />
                                    <div className="text-2xl text-gray-500 pr-2 dark:text-gray-400 z-20">12,503</div>
                                    <ul className="flex space-x-4 text-center font-secondary z-20">
                                        <li className="flex flex-col items-center">
                                            <Link to="/map">
                                                <FontAwesomeIcon icon={faHouse} className="w-10 h-6" />
                                            </Link>
                                        </li>
                                        <li className="flex flex-col items-center">
                                            <Link to="/inventory">
                                                <FontAwesomeIcon icon={faToolbox} className="w-10 h-6" />
                                            </Link>
                                        </li>
                                        <li className="flex flex-col items-center">
                                            <Link to="/leaderboards">
                                                <FontAwesomeIcon icon={faRankingStar} className="w-10 h-6" />
                                            </Link>
                                        </li>
                                    </ul>                            
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-white"></div>
                            </div>
                    </div>
                </div>
                <Link to="/profile" className="absolute top-1 ml-18 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <img className="w-32 h-34" src="src/_shared/assets/avatar/3davatar.png" alt="Girl with eyeglasses avatar"/>
                </Link>
            </div>
            </div>
        </nav>
        )}
        
        {showSettingsModal && <SettingsModal handleClose={handleCloseSettingsModal} />}
    </>      
    )
}
