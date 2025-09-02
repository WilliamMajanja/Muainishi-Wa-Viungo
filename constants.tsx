import React from 'react';
import type { NavItemType } from './types';

const IconWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <div className="w-6 h-6">{children}</div>
);

export const NAV_ITEMS: NavItemType[] = [
    {
        label: 'Dashboard',
        icon: (
            <IconWrapper>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
            </IconWrapper>
        ),
        description: 'Overview of all bioinformatics analyses.'
    },
    {
        label: 'Classification',
        icon: (
            <IconWrapper>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.438.995s.145.755.438.995l1.003.827c.48.398.668 1.03.26 1.431l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.217-.456c-.355-.133-.75-.072-1.075.124a6.57 6.57 0 01-.22.127c-.331.183-.581.495-.645.87l-.213 1.281c-.09.543-.56.94-1.11.94h-2.593c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87a6.52 6.52 0 01-.22-.127c-.324-.196-.72-.257-1.075-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.431l1.003-.827c.293-.24.438-.613.438.995s-.145-.755-.438-.995l-1.003-.827a1.125 1.125 0 01-.26-1.431l1.296-2.247a1.125 1.125 0 011.37-.49l1.217.456c.355.133.75.072 1.075-.124.073-.044.146-.087.22-.127.332-.183.582-.495.645-.87l.213-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </IconWrapper>
        ),
        description: 'Classify tissue samples and cell types.'
    },
    {
        label: 'Segmentation',
        icon: (
            <IconWrapper>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h.008v.015h-.008v-.015zm17.25 0h.008v.015h-.008v-.015zM4.5 19.5v-2.25c0-.621.504-1.125 1.125-1.125h12.75c.621 0 1.125.504 1.125 1.125v2.25M6.375 16.5v.75h11.25v-.75M12 16.5v-4.5m0 4.5v-2.25m0 0V12m0 0V9.75m0 0V9m0 0V7.5m0 0V6.375m0 0V4.5m0 1.875m0-1.875a1.125 1.125 0 10-2.25 0 1.125 1.125 0 002.25 0z" />
                </svg>
            </IconWrapper>
        ),
        description: 'Identify and segment regions in histology images.'
    },
    {
        label: 'Integration',
        icon: (
            <IconWrapper>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
            </IconWrapper>
        ),
        description: 'Integrate multi-omics datasets for analysis.'
    },
    {
        label: 'Pharmacogenomics',
        icon: (
            <IconWrapper>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
            </IconWrapper>
        ),
        description: 'Analyze genetic variation and drug response.'
    },
    {
        label: 'Mutation Tracking',
        icon: (
            <IconWrapper>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
            </IconWrapper>
        ),
        description: 'Track somatic mutations over time.'
    },
    {
        label: 'Evolutionary Insights',
        icon: (
            <IconWrapper>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.217-.285.49-.533.795-.732a7.5 7.5 0 01.586-.343m-2.132 1.055a7.5 7.5 0 00-5.801-1.055M6.75 6.087c0-.355.186-.676.401-.959.217-.285.49-.533.795-.732a7.5 7.5 0 01.586-.343m-2.132 1.055a7.5 7.5 0 00-5.801-1.055" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 9.039c-.02.002-.039.003-.058.005a7.5 7.5 0 01-2.942 0c-.019-.002-.038-.003-.058-.005M14.25 6.087v2.952m-4.5-2.952v2.952" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.039v3.476m0 0a7.5 7.5 0 01-3.75 1.036M12 12.515a7.5 7.5 0 013.75 1.036m-7.5-1.036a7.5 7.5 0 00-3.75 1.036m15-1.036a7.5 7.5 0 00-3.75-1.036M3 19.5v-1.5a7.5 7.5 0 013.75-6.465M21 19.5v-1.5a7.5 7.5 0 00-3.75-6.465m-11.25 6.465c.75-.415 1.56-.75 2.408-1.011M17.25 18c.848-.261 1.658-.596 2.408-1.011" />
                </svg>
            </IconWrapper>
        ),
        description: 'Visualize macro-evolutionary relationships.'
    },
];