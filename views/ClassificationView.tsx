import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import BaseAnalysisView from './BaseAnalysisView';

const mockClassificationData = [
    { x: 10, y: 30, z: 200, type: 'Type A' },
    { x: 40, y: 100, z: 260, type: 'Type A' },
    { x: 65, y: 75, z: 200, type: 'Type B' },
    { x: 150, y: 180, z: 200, type: 'Type B' },
    { x: 120, y: 130, z: 260, type: 'Type C' },
    { x: 170, y: 250, z: 260, type: 'Type C' },
    { x: 110, y: 290, z: 200, type: 'Type D' },
    { x: 200, y: 250, z: 200, type: 'Type D' },
];

const mockAnalysis = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        // Simulate a potential failure to demonstrate error handling
        if (Math.random() > 0.4) {
            resolve(mockClassificationData);
        } else {
            reject(new Error("Failed to process the expression matrix. The file format might be incorrect or the server could not be reached."));
        }
    }, 2000);
});


const ClassificationView: React.FC = () => {
    return (
        <BaseAnalysisView
            title="Cell Type Classification"
            description="Upload genetic expression data to classify cells into different types based on marker genes."
            fileLabel="Upload CSV or TSV expression matrix"
            mockAnalysis={mockAnalysis}
        >
            {(results) => (
                <ResponsiveContainer width="100%" height={400}>
                    <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis type="number" dataKey="x" name="Gene A Expression" unit="" stroke="#9ca3af" />
                        <YAxis type="number" dataKey="y" name="Gene B Expression" unit="" stroke="#9ca3af" />
                        <ZAxis type="number" dataKey="z" range={[60, 400]} name="Cell Size" unit="μm" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                        <Legend />
                        <Scatter name="Type A" data={results.filter((d: any) => d.type === 'Type A')} fill="#8884d8" shape="star" />
                        <Scatter name="Type B" data={results.filter((d: any) => d.type === 'Type B')} fill="#82ca9d" shape="triangle" />
                        <Scatter name="Type C" data={results.filter((d: any) => d.type === 'Type C')} fill="#ffc658" shape="cross" />
                        <Scatter name="Type D" data={results.filter((d: any) => d.type === 'Type D')} fill="#ff7300" shape="diamond" />
                    </ScatterChart>
                </ResponsiveContainer>
            )}
        </BaseAnalysisView>
    );
};

export default ClassificationView;