import { createInertiaApp } from '@inertiajs/react';
import { Toaster } from '@/components/ui/sonner';
import { NavigationProvider } from './contexts/navigation-context';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    strictMode: true,
    withApp(app) {
        return (
            <NavigationProvider>
                {app}
                <Toaster />
            </NavigationProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
