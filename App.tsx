import React, { useState } from 'react';
import { NAV_ITEMS } from './constants';
import type { NavItemType } from './types';
import Layout from './components/Layout';

// Statically import components to avoid dynamic import issues in this environment
import DashboardView from './views/DashboardView';
import ClassificationView from './views/ClassificationView';
import SegmentationView from './views/SegmentationView';
import IntegrationView from './views/IntegrationView';
import PharmacogenomicsView from './views/PharmacogenomicsView';
import MutationTrackingView from './views/MutationTrackingView';
import EvolutionaryView from './views/EvolutionaryView';

const viewMap: { [key: string]: React.ComponentType<{}> } = {
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
            {ActiveView ? <ActiveView /> : <div>Select an analysis</div>}
        </Layout>
    );
};

export default App;