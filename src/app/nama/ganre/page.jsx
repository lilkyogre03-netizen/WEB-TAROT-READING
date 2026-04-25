"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// 1. Buat komponen baru untuk menampung isi halaman
function GanreContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const user = searchParams.get('user'); // ambil nama dari URL

    const pilihGenre = (genre) => {
        router.push(`/nama/ganre/isi?user=${encodeURIComponent(user)}&genre=${genre}`);
    };

    return (
        <div className="video-wrapper">
            <video autoPlay loop muted playsInline className="video-bg">
                <source src="/stary.mp4" type="video/mp4" />
            </video>

            <div className="video-overlay"></div>
            <div className='judul'>
                <p className='p1'>BAIKLAH , {user?.toLocaleUpperCase()}</p>
                <h1 className='hjudul'>PILIH TAKDIR MU</h1>
                <p className='p2'>SEMESTA AKAN MEMBACA BERDASARKAN PILIHANMU</p>
            </div>

            <div className="container">
                <div className='genre-card' onClick={() => pilihGenre('cinta')}>
                    <div className="kotak1" ><img src="/tarotglobal/THE LOVERS.png" alt="" /></div>
                </div>
                <div className='genre-card' onClick={() => pilihGenre('diri')}>
                    <div className="kotak2"><img src="/tarotglobal/THE FOOL.png" alt="foool" /></div>
                </div>
                <div className='genre-card' onClick={() => pilihGenre('fortune')}>
                    <div className="kotak3"><img src="/tarotglobal/WHEEL OF FORTUNE.png" alt="foool" /></div>
                </div>
            </div>

            <div className='pil'>
                <p className='love'>LOVE</p>
                <p className='life'>LIFE</p>
                <p className='fortune'>FORTUNE</p>
            </div>
        </div>
    );
}

// 2. Export default harus membungkus komponen tadi dengan Suspense
export default function GanrePage() {
    return (
        <Suspense fallback={<div>Memuat Takdir...</div>}>
            <GanreContent />
        </Suspense>
    );
}