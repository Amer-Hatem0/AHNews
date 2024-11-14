import React, { useState } from 'react';

const DropdownMenu1 = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <ul className="dropdown">
            <li
                className="dropdown-toggle"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                Hover me111
                {isHovered && (
                    <ul className="dropdown-menu">
                        <li>Option 1111</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                )}
            </li>
        </ul>
    );
};

const DropdownMenu = () => {
    return (
        <div>

            <DropdownMenu1 />
        </div>
    );
};

export default DropdownMenu;
