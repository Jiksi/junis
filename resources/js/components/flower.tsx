import { useNavigation } from '@/contexts/navigation-context';

export default function Flower({ disabled = false }: { disabled?: boolean }) {
    const { setSection } = useNavigation();

    return (
        <button onClick={() => setSection('opening')} disabled={disabled}>
            <img
                src="/svg/sunflower.svg"
                alt="Flower"
                className="h-20 w-fit"
                loading="eager"
            />
        </button>
    );
}
