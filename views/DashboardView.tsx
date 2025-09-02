import React from 'react';
import Card from '../components/Card';
import { NAV_ITEMS } from '../constants';
import type { NavItemType, AnalysisCardProps } from '../types';

const AnalysisCard: React.FC<AnalysisCardProps> = ({ item, onClick }) => (
    <Card onClick={onClick}>
        <div className="flex items-center mb-4">
            <div className="p-2 bg-primary-900/50 rounded-lg mr-4 text-primary-400">
                {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-100">{item.label}</h3>
        </div>
        <p className="text-gray-400">{item.description}</p>
    </Card>
);

const DashboardView: React.FC = () => {
    return (
        <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold mb-2 text-gray-100">Welcome to Muainishi Wa Viungo</h2>
            <p className="text-lg text-gray-400 mb-8">Your integrated platform for advanced bioinformatics analysis in transfusion science.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {NAV_ITEMS.filter(item => item.label !== 'Dashboard').map(item => (
                    <AnalysisCard key={item.label} item={item} onClick={() => alert(`Navigating to ${item.label}... (feature not implemented)`)} />
                ))}
            </div>

            <Card className="mt-8">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">Platform Status</h3>
                <div className="flex items-center justify-between text-gray-300">
                    <div className="flex items-center space-x-2">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span>All Systems Operational</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="font-mono text-sm px-2 py-1 bg-bkg rounded">Neon DB</span>
                        <span className="text-green-400">Connected</span>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default DashboardView;