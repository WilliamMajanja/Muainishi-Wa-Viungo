import React from 'react';
import BaseAnalysisView from './BaseAnalysisView';

// A simplified SVG-based phylogenetic tree component as recharts doesn't support it.
const PhylogeneticTree: React.FC = () => (
    <svg width="100%" height="400" viewBox="0 0 500 400">
        <style>{`
            .line { stroke: #9ca3af; stroke-width: 2; fill: none; }
            .label { fill: #d1d5db; font-family: sans-serif; font-size: 14px; }
        `}</style>

        {/* Main Branches */}
        <path className="line" d="M 50 200 H 150" />
        <path className="line" d="M 150 100 V 300" />
        <path className="line" d="M 150 100 H 250" />
        <path className="line" d="M 150 300 H 250" />

        {/* Sub-branches */}
        <path className="line" d="M 250 50 V 150" />
        <path className="line" d="M 250 50 H 350" />
        <path className="line" d="M 250 150 H 350" />

        <path className="line" d="M 250 250 V 350" />
        <path className="line" d="M 250 250 H 350" />
        <path className="line" d="M 250 350 H 350" />

        {/* Labels */}
        <text x="360" y="54" className="label">Sample A (HLA-A*02:01)</text>
        <text x="360" y="154" className="label">Sample B (HLA-A*02:05)</text>
        <text x="360" y="254" className="label">Donor X (HLA-DRB1*04:01)</text>
        <text x="360" y="354" className="label">Donor Y (HLA-DRB1*07:01)</text>
        
        <text x="10" y="204" className="label">Common Ancestor</text>
    </svg>
);


const mockAnalysis = () => new Promise(resolve => setTimeout(() => resolve({ tree: 'newick_data_placeholder' }), 1500));

const EvolutionaryView: React.FC = () => {
    return (
        <BaseAnalysisView
            title="Macro-evolutionary Insights"
            description="Analyze gene sequences to reconstruct phylogenetic trees and understand evolutionary relationships."
            fileLabel="Upload FASTA or PHYLIP file"
            mockAnalysis={mockAnalysis}
        >
            {() => (
                <div className="w-full">
                    <p className="text-center mb-4 text-gray-400">Phylogenetic Tree of HLA Alleles</p>
                    <PhylogeneticTree />
                </div>
            )}
        </BaseAnalysisView>
    );
};

export default EvolutionaryView;