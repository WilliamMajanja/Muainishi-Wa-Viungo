
import React, { useState, useCallback } from 'react';

interface FileUploadProps {
    onFileSelect: (file: File | null) => void;
    acceptedFileTypes?: string;
    label: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, acceptedFileTypes, label }) => {
    const [fileName, setFileName] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
            onFileSelect(file);
        } else {
            setFileName(null);
            onFileSelect(null);
        }
    };
    
    const handleDragEnter = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);
    
    const handleDrop = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file) {
            setFileName(file.name);
            onFileSelect(file);
        }
    }, [onFileSelect]);


    return (
        <div className="w-full">
            <label 
                htmlFor="file-upload" 
                className={`flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-bkg hover:bg-bkg-light transition-colors
                ${isDragging ? 'border-primary-500' : 'border-bkg-lighter'}`}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                    <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    {fileName ? (
                         <p className="font-semibold text-primary-400">{fileName}</p>
                    ) : (
                        <>
                            <p className="mb-2 text-sm text-gray-400"><span className="font-semibold text-gray-300">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500">{label}</p>
                        </>
                    )}
                </div>
                <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} accept={acceptedFileTypes} />
            </label>
        </div>
    );
};

export default FileUpload;
