import { useNavigation } from '@/contexts/navigation-context';
import { cn } from '@/lib/utils';
import type { Section } from '@/types';

const items: { label: string; value: Section }[] = [
    { label: 'Mempelai', value: 'couple' },
    { label: 'Acara', value: 'event' },
    { label: 'Ucapan', value: 'wishes' },
    { label: 'Kado', value: 'gift' },
];

export default function Navigation({ navy = false }: { navy?: boolean }) {
    const { section, setSection } = useNavigation();

    return (
        <nav className="flex w-xs items-center justify-between">
            {items.map((item) => {
                const isActive = section === item.value;

                return (
                    <button
                        key={item.value}
                        onClick={() => setSection(item.value)}
                        className={cn(
                            'flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:cursor-pointer hover:opacity-100',
                            isActive ? 'opacity-100' : 'opacity-50',
                            section === 'intro' && 'opacity-100',
                        )}
                    >
                        <img
                            src={
                                navy
                                    ? '/svg/icon-navy.svg'
                                    : '/svg/icon-white.svg'
                            }
                            alt={item.label}
                            className="size-6"
                            loading="eager"
                        />
                        <span className="font-belleza text-xs">
                            {item.label}
                        </span>
                    </button>
                );
            })}
        </nav>
    );
}
