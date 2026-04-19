import { Head } from '@inertiajs/react';
import { useCallback, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

export default function WhatsApp() {
    const [notification, setNotification] = useState('');

    const message = useMemo(() => {
        if (typeof window === 'undefined') {
            return '';
        }

        const urlParams = new URLSearchParams(window.location.search);
        const base64Message = urlParams.get('b');

        if (!base64Message) {
            return '';
        }

        try {
            return decodeURIComponent(atob(base64Message));
        } catch (e) {
            console.error('Failed to decode message', e);

            return 'Pesan tidak valid';
        }
    }, []);

    const handleCopyBroadcast = useCallback(() => {
        navigator.clipboard.writeText(message);
        setNotification(
            'Broadcast berhasil disalin. Tinggal paste (Ctrl+V) ke WhatsApp Web / tempat lain.',
        );
        toast.success('Berhasil disalin');
    }, [message]);

    const handleOpenApp = useCallback(() => {
        const encodedMessage = encodeURIComponent(message);
        window.location.href = `whatsapp://send?text=${encodedMessage}`;
        setNotification('Jika diminta, pilih "Open" untuk membuka WhatsApp.');
    }, [message]);

    const handleContinueWeb = useCallback(() => {
        const encodedMessage = encodeURIComponent(message);
        window.open(
            `https://web.whatsapp.com/send?text=${encodedMessage}`,
            '_blank',
        );
    }, [message]);

    return (
        <div className="flex min-h-screen flex-col items-center bg-[#f0f2f5] p-4">
            <Head title="Share on WhatsApp" />
            <div className="flex w-full max-w-xl flex-col items-center py-10">
                <Card className="w-full shadow-sm">
                    <CardHeader>
                        <CardTitle>Share on WhatsApp</CardTitle>
                        <CardDescription>
                            Bagikan undangan melalui WhatsApp
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <Textarea
                            readOnly
                            value={message}
                            className="max-h-52 border-none bg-[#f8f9fa] text-[#111b21] focus-visible:ring-0"
                        />

                        <div className="flex flex-col gap-3">
                            <Button
                                variant="outline"
                                className="w-full border-[#008069] py-6 font-bold text-[#008069] uppercase hover:bg-[#f8f9fa]"
                                onClick={handleCopyBroadcast}
                            >
                                Copy broadcast
                            </Button>

                            <Button
                                className="w-full bg-[#25d366] py-6 font-bold text-white uppercase hover:bg-[#20bd59]"
                                onClick={handleOpenApp}
                            >
                                Open app
                            </Button>

                            <Button
                                variant="outline"
                                className="w-full border-[#008069] py-6 font-bold text-[#008069] uppercase hover:bg-[#f8f9fa]"
                                onClick={handleContinueWeb}
                            >
                                Continue to WhatsApp Web
                            </Button>
                        </div>

                        {notification && (
                            <div className="animate-in text-center text-sm text-[#667781] fade-in">
                                {notification}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
