import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import Card from '../components/Card';
import Loader from '../components/Loader';

interface BaseAnalysisViewProps {
    title: string;
    description: string;
    fileLabel: string;
    children: (results: any) => React.ReactNode;
    mockAnalysis: () => Promise<any>;
}

const BaseAnalysisView: React.FC<BaseAnalysisViewProps> = ({ title, description, fileLabel, children, mockAnalysis }) => {
    const [file, setFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<any | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleAnalyze = async () => {
        if (!file) {
            setError("Please upload a file first.");
            return;
        }
        setError(null);
        setIsLoading(true);
        setResults(null);
        try {
            const data = await mockAnalysis();
            setResults(data);
        } catch (err) {
            setError("An error occurred during analysis.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold text-gray-100">{title}</h2>
                <p className="mt-1 text-gray-400">{description}</p>
            </div>

            <Card>
                <h3 className="text-xl font-semibold mb-4 text-gray-200">1. Upload Data</h3>
                <FileUpload onFileSelect={setFile} label={fileLabel} />
                 {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
            </Card>

            <div className="flex justify-center">
                <button
                    onClick={handleAnalyze}
                    disabled={!file || isLoading}
                    className="px-8 py-3 bg-primary-600 text-white font-bold rounded-lg shadow-lg hover:bg-primary-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all transform hover:scale-105"
                >
                    {isLoading ? 'Analyzing...' : 'Run Analysis'}
                </button>
            </div>

            {(isLoading || results) && (
                 <Card>
                    <h3 className="text-xl font-semibold mb-4 text-gray-200">2. Results</h3>
                    <div className="min-h-[300px] flex items-center justify-center">
                        {isLoading && <Loader />}
                        {results && !isLoading && children(results)}
                    </div>
                </Card>
            )}
        </div>
    );
};

export default BaseAnalysisView;