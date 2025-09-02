import React, { useState, Suspense, lazy } from 'react';
import { NAV_ITEMS } from './constants';
import type { NavItemType } from './types';
import Layout from './components/Layout';
import Loader from './components/Loader';

const DashboardView = lazy(() => import('./views/DashboardView'));
const ClassificationView = lazy(() => import('./views/ClassificationView'));
const SegmentationView = lazy(() => import('./views/SegmentationView'));
const IntegrationView = lazy(() => import('./views/IntegrationView'));
const PharmacogenomicsView = lazy(() => import('./views/PharmacogenomicsView'));
const MutationTrackingView = lazy(() => import('./views/MutationTrackingView'));
const EvolutionaryView = lazy(() => import('./views/EvolutionaryView'));

// FIX: Use React.ComponentType<{}> which is a broader type that includes class and functional components, 
// resolving the type mismatch with the lazily loaded components.
const viewMap: { [key: string]: React.LazyExoticComponent<React.ComponentType<{}>> } = {
    'Dashboard': DashboardView,
    'Classification': ClassificationView,
    'Segmentation': SegmentationView,
    'Integration': IntegrationView,
    'Pharmacogenomics': PharmacogenomicsView,
    'Mutation Tracking': MutationTrackingView,
    'Evolutionary Insights': EvolutionaryView,
};

const App: React.FC = () => {
    const [activeNavItem, setActiveNavItem] = useState<NavItemType>(NAV_ITEMS[0]);

    const ActiveView = viewMap[activeNavItem.label];

    return (
        <Layout activeNavItem={activeNavItem} setActiveNavItem={setActiveNavItem}>
             <Suspense fallback={
                <div className="flex items-center justify-center h-full">
                    <Loader />
                </div>
            }>
                {ActiveView ? <ActiveView /> : <div>Select an analysis</div>}
            </Suspense>
        </Layout>
    );
};

export default App;