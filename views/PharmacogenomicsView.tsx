import React from 'react';
import BaseAnalysisView from './BaseAnalysisView';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockPharmacogenomicsData = [
    { name: 'CYP2D6*1', response: 4000, noResponse: 2400 },
    { name: 'CYP2D6*4', response: 1800, noResponse: 3398 },
    { name: 'VKORC1', response: 2000, noResponse: 9800 },
    { name: 'DPYD*2A', response: 2780, noResponse: 3908 },
    { name: 'TPMT*3A', response: 1890, noResponse: 4800 },
];

const mockAnalysis = () => new Promise(resolve => setTimeout(() => resolve(mockPharmacogenomicsData), 2200));

const PharmacogenomicsView: React.FC = () => {
    return (
        <BaseAnalysisView
            title="Pharmacogenomics Analysis"
            description="Analyze genetic markers to predict patient response to immunosuppressant drugs."
            fileLabel="Upload VCF or genotyping data"
            mockAnalysis={mockAnalysis}
        >
            {(results) => (
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={results}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="name" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip 
                            cursor={{ fill: 'rgba(100, 116, 139, 0.2)' }}
                            contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} 
                            wrapperStyle={{ zIndex: 1000 }}
                        />
                        <Legend />
                        <Bar dataKey="response" stackId="a" fill="#8884d8" name="Responders" />
                        <Bar dataKey="noResponse" stackId="a" fill="#82ca9d" name="Non-Responders" />
                    </BarChart>
                </ResponsiveContainer>
            )}
        </BaseAnalysisView>
    );
};

export default PharmacogenomicsView;