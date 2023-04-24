import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkModeButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-500"
            onClick={toggleDarkMode}
        >
            {isDarkMode ? (
                <FontAwesomeIcon icon={faSun} className='text-yellow-200' />
            ) : (
                <FontAwesomeIcon icon={faMoon} />
            )}
        </button>
    );
};

export default DarkModeButton;
