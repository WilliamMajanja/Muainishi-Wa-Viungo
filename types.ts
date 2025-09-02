
import type React from 'react';

export interface NavItemType {
    label: string;
    icon: React.ReactNode;
    description: string;
}

export interface AnalysisCardProps {
    item: NavItemType;
    onClick: () => void;
}
