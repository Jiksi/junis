import { useNavigation } from '@/contexts/navigation-context';

export default function Flower() {
    const { setSection } = useNavigation();

    return (
        <button onClick={() => setSection('opening')}>
            <img
                src="/svg/sunflower.svg"
                alt="Flower"
                className="h-20 w-fit"
                loading="eager"
            />
        </button>
    );
}
