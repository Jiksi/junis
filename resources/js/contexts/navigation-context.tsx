import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Section } from '@/types';

interface NavigationContextType {
    section: Section;
    setSection: (section: Section) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
    undefined,
);

export function NavigationProvider({ children }: { children: ReactNode }) {
    const [section, setSection] = useState<Section>('opening');

    return (
        <NavigationContext.Provider value={{ section, setSection }}>
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigation() {
    const context = useContext(NavigationContext);

    if (context === undefined) {
        throw new Error(
            'useNavigation must be used within a NavigationProvider',
        );
    }

    return context;
}
