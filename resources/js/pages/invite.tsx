import { Head, router } from '@inertiajs/react';
import { Copy, ExternalLink, Send, Share2 } from 'lucide-react';
import { useState, useRef, useCallback, useMemo } from 'react';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';

const MEMPELAI_1 = 'Inung';
const MEMPELAI_2 = 'Akmal';

const PRESETS = {
    Default: `Assalamualaikum warahmatullahi wabarakatuh.
Bismillahirrahmanirrahim.

Kepada Yth.
Bapak/Ibu/Saudara/i
[tamu]

Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:

[mempelai_1] & [mempelai_2]

Untuk informasi lengkap mengenai acara, silakan kunjungi tautan undangan berikut:
[link]

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.

Mohon maaf, undangan disampaikan melalui pesan ini. Terima kasih atas perhatian dan doanya.

Wassalamualaikum warahmatullahi wabarakatuh.

Kami yang berbahagia,
[mempelai_1] & [mempelai_2]`,
    Muslim: `Assalamualaikum warahmatullahi wabarakatuh.
Bismillahirrahmanirrahim.

Kepada Yth.
Bapak/Ibu/Saudara/i
[tamu]

Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:

[mempelai_1] & [mempelai_2]

Untuk informasi lengkap mengenai acara, silakan kunjungi tautan undangan berikut:
[link]

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.

Mohon maaf, undangan disampaikan melalui pesan ini. Terima kasih atas perhatian dan doanya.

Wassalamualaikum warahmatullahi wabarakatuh.

Kami yang berbahagia,
[mempelai_1] & [mempelai_2]`,
    Formal: `Kepada Yth.
Bapak/Ibu/Saudara/i
[tamu]

Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:

[mempelai_1] & [mempelai_2]

Untuk informasi lengkap mengenai acara, silakan kunjungi tautan undangan berikut:
[link]

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.

Mohon maaf, undangan disampaikan melalui pesan ini. Terima kasih atas perhatian dan doanya.

Hormat kami,
[mempelai_1] & [mempelai_2]`,
    English: `Assalamu'alaikum Wr. Wb
Bismillahirahmanirrahim.

Dear [tamu]

With the utmost respect, we would like to invite you to attend our wedding:

[mempelai_1] & [mempelai_2]

For complete details about the event, please kindly visit the invitation link below:

[link]

It would be a great honor for us if you are able to attend and offer your blessings.

We sincerely apologize for sharing this invitation through a message.
Thank you very much for your kind attention.

Wassalamu’alaikum Wr. Wb.

Warmest regards,
[mempelai_1] & [mempelai_2]`,
    'Kristen/Katolik': `Kepada Yth.
Bapak/Ibu/Saudara/i
[tamu]

Salam sejahtera.

Atas kasih dan penyertaan Tuhan Yesus Kristus, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:

[mempelai_1] & [mempelai_2]

Untuk informasi lengkap mengenai acara, silakan kunjungi tautan undangan berikut:
[link]

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.

Mohon maaf, undangan disampaikan melalui pesan ini. Terima kasih atas perhatian dan doanya.

Kami yang berbahagia,
[mempelai_1] & [mempelai_2]`,
    Hindu: `Kepada Yth.
Bapak/Ibu/Saudara/i
[tamu]

Om Swastyastu.

Dengan memohon anugerah Ida Sang Hyang Widhi Wasa, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:

[mempelai_1] & [mempelai_2]

Untuk informasi lengkap mengenai acara, silakan kunjungi tautan undangan berikut:
[link]

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.

Mohon maaf, undangan disampaikan melalui pesan ini. Terima kasih atas perhatian dan doanya.

Om Shanti, Shanti, Shanti, Om.

Kami yang berbahagia,
[mempelai_1] & [mempelai_2]`,
    Buddha: `Kepada Yth.
Bapak/Ibu/Saudara/i
[tamu]

Namo Buddhaya.

Dengan berkah Tuhan Yang Maha Esa serta Tri Ratna, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:

[mempelai_1] & [mempelai_2]

Untuk informasi lengkap mengenai acara, silakan kunjungi tautan undangan berikut:
[link]

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.

Mohon maaf, undangan disampaikan melalui pesan ini. Terima kasih atas perhatian dan doanya.

Namo Buddhaya.

Kami yang berbahagia,
[mempelai_1] & [mempelai_2]`,
};

type PresetKey = keyof typeof PRESETS | 'Custom';

const renderMessage = (text: string, name: string, url: string) => {
    const guestPlaceholder = name.trim() || 'Tamu Undangan';

    return text
        .replaceAll('[tamu]', guestPlaceholder)
        .replaceAll('[mempelai_1]', MEMPELAI_1)
        .replaceAll('[mempelai_2]', MEMPELAI_2)
        .replaceAll('[link]', url);
};

export default function Invite() {
    const [guestName, setGuestName] = useState('');
    const [version, setVersion] = useState<'v1' | 'v2'>('v1');
    const [isGenerated, setIsGenerated] = useState(false);
    const [generatedUrl, setGeneratedUrl] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPreset, setCurrentPreset] = useState<PresetKey>('Default');
    const [templateMessage, setTemplateMessage] = useState(PRESETS.Default);
    const [customMessage, setCustomMessage] = useState('');

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const previewMessage = useMemo(() => {
        return renderMessage(
            templateMessage,
            guestName,
            generatedUrl || 'https://link-undangan.com/?to=NamaTamu',
        );
    }, [templateMessage, guestName, generatedUrl]);

    const handleGenerate = useCallback(() => {
        if (!guestName.trim()) {
            toast.error('Masukkan nama tamu terlebih dahulu');

            return;
        }

        const encodedName = guestName.trim().replace(/\s+/g, '+');
        const path = version === 'v2' ? '/v2/' : '/';
        const url = `${window.location.origin}${path}?to=${encodedName}`;
        setGeneratedUrl(url);
        setIsGenerated(true);
    }, [guestName, version]);

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(generatedUrl);
        toast.success('Link berhasil disalin');
    }, [generatedUrl]);

    const handleTestLink = useCallback(() => {
        window.open(generatedUrl, '_blank');
    }, [generatedUrl]);

    const handleSendWA = useCallback(() => {
        const fullMessage = renderMessage(
            templateMessage,
            guestName,
            generatedUrl,
        );
        const base64Message = btoa(encodeURIComponent(fullMessage));
        router.visit(`/wa?b=${base64Message}`);
    }, [templateMessage, guestName, generatedUrl]);

    const handleShare = useCallback(async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Undangan Pernikahan',
                    text: `Undangan pernikahan ${MEMPELAI_1} & ${MEMPELAI_2} untuk ${guestName}`,
                    url: generatedUrl,
                });
            } catch (err) {
                console.error('Error sharing', err);
            }
        } else {
            toast.error('Web Share API tidak didukung di browser ini');
        }
    }, [guestName, generatedUrl]);

    const insertVariable = useCallback(
        (variable: string) => {
            if (currentPreset !== 'Custom') {
                return;
            }

            const textarea = textareaRef.current;

            if (!textarea) {
                return;
            }

            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const text = templateMessage;
            const before = text.substring(0, start);
            const after = text.substring(end);

            const newMessage = before + variable + after;
            setTemplateMessage(newMessage);
            setCustomMessage(newMessage);

            // Reset focus and cursor
            setTimeout(() => {
                textarea.focus();
                textarea.setSelectionRange(
                    start + variable.length,
                    start + variable.length,
                );
            }, 0);
        },
        [currentPreset, templateMessage],
    );

    const applyPreset = useCallback(
        (val: PresetKey) => {
            if (val === 'Custom') {
                setTemplateMessage(customMessage || templateMessage);
            } else {
                setTemplateMessage(PRESETS[val as keyof typeof PRESETS]);
            }

            setCurrentPreset(val);
        },
        [customMessage, templateMessage],
    );

    const handleTerapkan = useCallback(() => {
        if (currentPreset === 'Custom') {
            setCustomMessage(templateMessage);
        }

        setIsModalOpen(false);
    }, [currentPreset, templateMessage]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
            <Head title="Buat Link Undangan" />

            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Generator Link Undangan</CardTitle>
                    <CardDescription>
                        Buat link undangan khusus untuk tamu Anda
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="guestName">Nama Tamu :</Label>
                        <Input
                            id="guestName"
                            placeholder="Contoh: Dia dan Partner"
                            value={guestName}
                            onChange={(e) => setGuestName(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="version">Versi Undangan :</Label>
                        <Select
                            value={version}
                            onValueChange={(val) =>
                                setVersion(val as 'v1' | 'v2')
                            }
                        >
                            <SelectTrigger id="version">
                                <SelectValue placeholder="Pilih Versi" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="v1">
                                        Normal (Dengan Gelar)
                                    </SelectItem>
                                    <SelectItem value="v2">
                                        V2 (Tanpa Gelar)
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="text-sm text-blue-600 hover:underline"
                    >
                        Ubah template pesan
                    </button>

                    <Button className="w-full" onClick={handleGenerate}>
                        Buat Link Undangan <Send className="ml-2 size-4" />
                    </Button>

                    {isGenerated && (
                        <>
                            <Separator className="my-4" />
                            <div className="animate-in space-y-4 fade-in slide-in-from-top-2">
                                <h3 className="text-sm font-medium">
                                    Hasil Generate
                                </h3>
                                <Input
                                    readOnly
                                    value={generatedUrl}
                                    className="bg-gray-100"
                                />

                                <div className="grid grid-cols-2 gap-2">
                                    <Button
                                        variant="outline"
                                        onClick={handleCopy}
                                    >
                                        <Copy className="mr-2 size-4" /> Copy
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={handleTestLink}
                                    >
                                        <ExternalLink className="mr-2 size-4" />{' '}
                                        Test Link
                                    </Button>
                                </div>

                                <Button
                                    className="w-full bg-green-600 hover:bg-green-700"
                                    onClick={handleSendWA}
                                >
                                    Kirim Undangan via WhatsApp
                                </Button>

                                <Button
                                    variant="ghost"
                                    className="w-full"
                                    onClick={handleShare}
                                >
                                    <Share2 className="mr-2 size-4" /> Bagikan
                                    ke Media Sosial Lainnya
                                </Button>
                            </div>
                        </>
                    )}
                </CardContent>
            </Card>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="flex max-h-[95vh] max-w-lg flex-col p-0">
                    <DialogHeader className="px-6 pt-6">
                        <DialogTitle>Template pesan</DialogTitle>
                        <p className="text-xs text-muted-foreground">
                            Pilih preset atau ubah teks. Tidak disimpan ke
                            database.
                        </p>
                    </DialogHeader>

                    <div className="flex-1 overflow-y-auto px-6 py-4">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label>Preset</Label>
                                <Select
                                    value={currentPreset}
                                    onValueChange={(val) =>
                                        applyPreset(val as PresetKey)
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih Preset" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="Default">
                                                Default
                                            </SelectItem>
                                            <SelectItem value="Custom">
                                                Custom (Bisa Diubah)
                                            </SelectItem>
                                            <SelectItem value="Muslim">
                                                Muslim
                                            </SelectItem>
                                            <SelectItem value="Formal">
                                                Formal
                                            </SelectItem>
                                            <SelectItem value="English">
                                                English
                                            </SelectItem>
                                            <SelectItem value="Kristen/Katolik">
                                                Kristen/Katolik
                                            </SelectItem>
                                            <SelectItem value="Hindu">
                                                Hindu
                                            </SelectItem>
                                            <SelectItem value="Buddha">
                                                Buddha
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label>Isi pesan</Label>
                                    {currentPreset === 'Custom' && (
                                        <Badge
                                            variant="secondary"
                                            className="text-[10px] uppercase"
                                        >
                                            Bisa diubah
                                        </Badge>
                                    )}
                                </div>
                                <Textarea
                                    ref={textareaRef}
                                    value={templateMessage}
                                    onChange={(e) =>
                                        currentPreset === 'Custom' &&
                                        setTemplateMessage(e.target.value)
                                    }
                                    readOnly={currentPreset !== 'Custom'}
                                    className="h-50 font-sans text-sm"
                                />
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {[
                                    '[tamu]',
                                    '[mempelai_1]',
                                    '[mempelai_2]',
                                    '[link]',
                                ].map((v) => (
                                    <Badge
                                        key={v}
                                        variant="outline"
                                        className={`cursor-pointer hover:bg-gray-100 ${currentPreset !== 'Custom' ? 'cursor-not-allowed opacity-50' : ''}`}
                                        onClick={() => insertVariable(v)}
                                    >
                                        {v}
                                    </Badge>
                                ))}
                            </div>
                            <p className="text-[10px] text-muted-foreground italic">
                                NB: Teks variabel seperti [tamu], [mempelai_1],
                                [mempelai_2], [link] dibuat otomatis oleh
                                sistem. Jangan dihapus atau diubah. Jika hilang,
                                klik chip di atas untuk menambahkannya.
                            </p>

                            <Separator />

                            <div className="space-y-2">
                                <Label>Preview</Label>
                                <Textarea
                                    readOnly
                                    value={previewMessage}
                                    className="h-50 bg-gray-50 text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <DialogFooter className="gap-2 border-t px-6 py-4 sm:justify-between">
                        <Button
                            variant="outline"
                            onClick={() => {
                                setCurrentPreset('Default');
                                setTemplateMessage(PRESETS.Default);
                            }}
                        >
                            Reset default
                        </Button>
                        <Button onClick={handleTerapkan}>Terapkan</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
