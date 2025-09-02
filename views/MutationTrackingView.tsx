import React from 'react';
import BaseAnalysisView from './BaseAnalysisView';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockMutationData = [
    { time: 'T0', p53: 0, kras: 0, egfr: 0.02 },
    { time: 'T1', p53: 0.05, kras: 0.01, egfr: 0.03 },
    { time: 'T2', p53: 0.12, kras: 0.02, egfr: 0.02 },
    { time: 'T3', p53: 0.35, kras: 0.03, egfr: 0.04 },
    { time: 'T4', p53: 0.65, kras: 0.05, egfr: 0.03 },
];

const mockAnalysis = () => new Promise(resolve => setTimeout(() => resolve(mockMutationData), 3000));

const MutationTrackingView: React.FC = () => {
    return (
        <BaseAnalysisView
            title="Somatic Mutation Tracking"
            description="Upload time-series sequencing data to track the clonal evolution of somatic mutations."
            fileLabel="Upload multi-sample VCF file"
            mockAnalysis={mockAnalysis}
        >
            {(results) => (
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart
                        data={results}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorP53" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorKras" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorEgfr" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#ffc658" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="time" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" label={{ value: 'Allele Frequency', angle: -90, position: 'insideLeft', fill: '#9ca3af' }} />
                        <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                        <Area type="monotone" dataKey="p53" stroke="#8884d8" fillOpacity={1} fill="url(#colorP53)" name="TP53" />
                        <Area type="monotone" dataKey="kras" stroke="#82ca9d" fillOpacity={1} fill="url(#colorKras)" name="KRAS" />
                        <Area type="monotone" dataKey="egfr" stroke="#ffc658" fillOpacity={1} fill="url(#colorEgfr)" name="EGFR" />
                    </AreaChart>
                </ResponsiveContainer>
            )}
        </BaseAnalysisView>
    );
};

export default MutationTrackingView;