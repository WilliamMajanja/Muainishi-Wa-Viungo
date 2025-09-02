import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import Card from '../components/Card';
import Loader from '../components/Loader';

interface AnalysisError {
    title: string;
    message: string;
}

interface BaseAnalysisViewProps {
    title: string;
    description: string;
    fileLabel: string;
    children: (results: any) => React.ReactNode;
    mockAnalysis: () => Promise<any>;
}

const ErrorDisplay: React.FC<{ error: AnalysisError; onRetry: () => void; }> = ({ error, onRetry }) => (
     <div className="flex flex-col items-center justify-center text-center p-4 animate-fadeIn">
        <svg className="w-16 h-16 text-red-500 mb-4" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        <h4 className="text-xl font-bold text-red-300 mb-2">{error.title}</h4>
        <p className="text-gray-400 mb-6 max-w-md">{error.message}</p>
        <button
            onClick={onRetry}
            className="px-6 py-2 bg-red-600/50 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
        >
            Retry Analysis
        </button>
    </div>
);


const BaseAnalysisView: React.FC<BaseAnalysisViewProps> = ({ title, description, fileLabel, children, mockAnalysis }) => {
    const [file, setFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<any | null>(null);
    const [uploadError, setUploadError] = useState<string | null>(null);
    const [analysisError, setAnalysisError] = useState<AnalysisError | null>(null);

    const handleFileSelect = (selectedFile: File | null) => {
        setFile(selectedFile);
        if (selectedFile) {
            setUploadError(null);
        }
    };

    const handleAnalyze = async () => {
        if (!file) {
            setUploadError("Please upload a file first.");
            return;
        }
        setUploadError(null);
        setAnalysisError(null);
        setIsLoading(true);
        setResults(null);
        try {
            const data = await mockAnalysis();
            setResults(data);
        } catch (err) {
            if (err instanceof Error) {
                setAnalysisError({
                    title: "Analysis Failed",
                    message: err.message,
                });
            } else {
                 setAnalysisError({
                    title: "An Unexpected Error Occurred",
                    message: "Something went wrong during the analysis. Please check your connection or try again later.",
                });
            }
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
                <FileUpload onFileSelect={handleFileSelect} label={fileLabel} />
                 {uploadError && <p className="text-red-400 mt-2 text-sm animate-pulse">{uploadError}</p>}
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

            {(isLoading || results || analysisError) && (
                 <Card>
                    <h3 className="text-xl font-semibold mb-4 text-gray-200">2. Results</h3>
                    <div className="min-h-[300px] flex items-center justify-center">
                        {isLoading && <Loader />}
                        {analysisError && !isLoading && <ErrorDisplay error={analysisError} onRetry={handleAnalyze} />}
                        {results && !isLoading && !analysisError && children(results)}
                    </div>
                </Card>
            )}
        </div>
    );
};

export default BaseAnalysisView;