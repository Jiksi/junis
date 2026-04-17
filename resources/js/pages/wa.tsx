import { Head } from '@inertiajs/react';
import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function WhatsApp() {
    const [message, setMessage] = useState('');
    const [notification, setNotification] = useState('');
    const [remember, setRemember] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const base64Message = urlParams.get('b');

        if (base64Message) {
            try {
                const decoded = decodeURIComponent(atob(base64Message));
                setMessage(decoded);
            } catch (e) {
                console.error('Failed to decode message', e);
                setMessage('Pesan tidak valid');
            }
        }
    }, []);

    const handleCopyBroadcast = () => {
        navigator.clipboard.writeText(message);
        setNotification(
            'Broadcast berhasil disalin. Tinggal paste (Ctrl+V) ke WhatsApp Web / tempat lain.',
        );
        toast.success('Berhasil disalin');
    };

    const handleOpenApp = () => {
        const encodedMessage = encodeURIComponent(message);
        window.location.href = `whatsapp://send?text=${encodedMessage}`;
        setNotification('Jika diminta, pilih "Open" untuk membuka WhatsApp.');
    };

    const handleContinueWeb = () => {
        const encodedMessage = encodeURIComponent(message);
        window.open(
            `https://web.whatsapp.com/send?text=${encodedMessage}`,
            '_blank',
        );
        // Langsung redirect sesuai prompt
    };

    return (
        <div className="flex min-h-screen flex-col items-center bg-[#f0f2f5] p-4">
            <Head title="Share on WhatsApp" />

            <div className="flex w-full max-w-xl flex-col items-center py-10">
                <div className="mb-8 flex items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366]">
                        <MessageCircle className="size-8 text-white" />
                    </div>
                    <span className="text-xl font-bold text-[#25d366]">
                        WhatsApp
                    </span>
                </div>

                <h1 className="mb-6 text-3xl font-light text-[#41525d]">
                    Share on WhatsApp
                </h1>

                <Card className="w-full shadow-sm">
                    <CardContent className="space-y-6 pt-6">
                        <Textarea
                            readOnly
                            value={message}
                            className="min-h-50 border-none bg-[#f8f9fa] text-[#111b21] focus-visible:ring-0"
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

                        <div className="flex items-center justify-center space-x-2 pt-2">
                            <Checkbox
                                id="remember"
                                checked={remember}
                                onCheckedChange={(val) => setRemember(!!val)}
                            />
                            <Label
                                htmlFor="remember"
                                className="text-sm font-normal text-[#667781]"
                            >
                                Ingat pilihan saya
                            </Label>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
