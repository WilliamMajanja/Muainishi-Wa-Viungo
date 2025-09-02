import React from 'react';
import BaseAnalysisView from './BaseAnalysisView';
// FIX: Import 'Tooltip' from 'recharts' to fix the 'Cannot find name 'Tooltip'' error.
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';


const mockIntegrationData = [
  { subject: 'Genomics', A: 120, B: 110, fullMark: 150 },
  { subject: 'Proteomics', A: 98, B: 130, fullMark: 150 },
  { subject: 'Metabolomics', A: 86, B: 130, fullMark: 150 },
  { subject: 'Transcriptomics', A: 99, B: 100, fullMark: 150 },
  { subject: 'Epigenomics', A: 85, B: 90, fullMark: 150 },
];


const mockAnalysis = () => new Promise(resolve => setTimeout(() => resolve(mockIntegrationData), 1800));

const IntegrationView: React.FC = () => {
    return (
        <BaseAnalysisView
            title="Multi-Omics Integration"
            description="Integrate and visualize datasets from genomics, proteomics, and more to uncover complex biological interactions."
            fileLabel="Upload ZIP archive with omics data"
            mockAnalysis={mockAnalysis}
        >
            {(results) => (
                <ResponsiveContainer width="100%" height={400}>
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={results}>
                        <PolarGrid stroke="#334155" />
                        <PolarAngleAxis dataKey="subject" stroke="#9ca3af" />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#9ca3af"/>
                        <Radar name="Patient Group A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Radar name="Control Group B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                        <Legend />
                         <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                    </RadarChart>
                </ResponsiveContainer>
            )}
        </BaseAnalysisView>
    );
};

export default IntegrationView;