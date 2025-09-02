import React from 'react';
import BaseAnalysisView from './BaseAnalysisView';

const mockAnalysis = () => new Promise(resolve => setTimeout(() => resolve({
    imageUrl: 'https://picsum.photos/800/600?grayscale&blur=2',
    segmentedUrl: 'https://picsum.photos/seed/segment/800/600'
}), 2500));

const SegmentationView: React.FC = () => {
    return (
        <BaseAnalysisView
            title="Tissue Segmentation"
            description="Upload histology slides to automatically segment different tissue structures."
            fileLabel="Upload histology image (TIFF, PNG)"
            mockAnalysis={mockAnalysis}
        >
            {(results) => (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <div className="text-center">
                        <h4 className="font-semibold mb-2">Original Image</h4>
                        <img src={results.imageUrl} alt="Original Histology" className="rounded-lg shadow-lg mx-auto" />
                    </div>
                    <div className="text-center">
                        <h4 className="font-semibold mb-2">Segmented Regions</h4>
                        <img src={results.segmentedUrl} alt="Segmented Histology" className="rounded-lg shadow-lg mx-auto" />
                    </div>
                </div>
            )}
        </BaseAnalysisView>
    );
};

export default SegmentationView;