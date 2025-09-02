
import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
    const interactiveClasses = onClick 
        ? 'cursor-pointer transition-all duration-300 ease-in-out hover:bg-bkg-lighter hover:shadow-lg hover:-translate-y-1' 
        : '';
        
    return (
        <div
            className={`bg-bkg-light border border-bkg-lighter rounded-lg p-6 shadow-md ${interactiveClasses} ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Card;
