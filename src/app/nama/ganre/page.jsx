"use client";

import { useRouter, useSearchParams } from 'next/navigation'

import { Suspense } from 'react'

export default function GanrePage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const user = searchParams.get('user')  // ambil nama dari URL

    const pilihGenre = (genre) => {
    router.push(`/nama/ganre/isi?user=${encodeURIComponent(user)}&genre=${genre}`)
    }
  return (
  <>
  
      <div className="video-wrapper">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="video-bg"
      >
        <source src="/stary.mp4" type="video/mp4" />

      </video>

      {/* 2. Lapisan Overlay (Opsional: agar teks lebih terbaca) */}
      <div className="video-overlay"></div>
      <div className='judul'>
        <p className='p1'>BAIKLAH , {user?.toLocaleUpperCase()}</p>
        <h1 className='hjudul'>PILIH TAKDIR MU</h1>
        <p className='p2'>SEMESTA AKAN MEMBACA BERDASARKAN PILIHANMU</p>
      </div>



      <div className="container">
        <div className='genre-card' onClick={() => pilihGenre('cinta')}>
        <div className="kotak1" ><img src="/tarotglobal/THE LOVERS.PNG" alt="" /></div>
        </div>
        <div className='genre-card' onClick={() => pilihGenre('diri')}>
        <div className="kotak2"><img src="/tarotglobal/THE Fool.png" alt="foool" /></div>
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

    </>

  )
}

