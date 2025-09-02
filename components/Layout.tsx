import React from 'react';
import { NAV_ITEMS } from '../constants';
import type { NavItemType } from '../types';

interface LayoutProps {
    children: React.ReactNode;
    activeNavItem: NavItemType;
    setActiveNavItem: (item: NavItemType) => void;
}

const Header: React.FC = () => (
    <header className="bg-bkg-light/50 backdrop-blur-sm p-4 border-b border-bkg-lighter sticky top-0 z-10 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-14.66l-.707.707M4.04 19.96l-.707.707M21 12h-1M4 12H3m16.96-7.96l-.707-.707M7.07 16.93l-.707-.707" />
        </svg>
        <h1 className="text-2xl font-bold text-gray-100">
            Muainishi Wa Viungo
        </h1>
    </header>
);

const Sidebar: React.FC<Omit<LayoutProps, 'children'>> = ({ activeNavItem, setActiveNavItem }) => {
    return (
        <aside className="w-64 bg-bkg-light p-4 flex flex-col fixed top-0 left-0 h-full pt-20">
            <nav className="flex-grow">
                <ul>
                    {NAV_ITEMS.map((item) => (
                        <li key={item.label}>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveNavItem(item);
                                }}
                                className={`flex items-center p-3 my-1 rounded-lg transition-colors duration-200 ${
                                    activeNavItem.label === item.label
                                        ? 'bg-primary-600 text-white font-semibold'
                                        : 'text-gray-300 hover:bg-bkg-lighter hover:text-white'
                                }`}
                            >
                                <span className="mr-4">{item.icon}</span>
                                <span>{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="text-center text-xs text-gray-500 p-4">
                <p>&copy; 2024 Bio-Informatics Core</p>
                <p>Powered by Neon & Netlify</p>
            </div>
        </aside>
    );
};

const Layout: React.FC<LayoutProps> = ({ children, activeNavItem, setActiveNavItem }) => {
    return (
        <div className="min-h-screen flex flex-col dark">
            <div className="pl-64">
                <Header />
            </div>
            <Sidebar activeNavItem={activeNavItem} setActiveNavItem={setActiveNavItem} />
            <main className="flex-grow p-8 pl-72">
                {children}
            </main>
        </div>
    );
};

export default Layout;