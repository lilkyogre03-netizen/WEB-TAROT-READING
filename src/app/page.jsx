//D:\web-project
"use client";
import './global.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect, use } from 'react';
export default function HomePage() {
 const router =useRouter()
   
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
      <div className="video-overlay"></div>
      <div className='judul'>
        <p className='p1'>LIHAT JAUH MENEMBUS KABUT SEMESTA</p>
        <h1 className='hjudul'>TAROT READING</h1>
        <p className='p2'>PILIH KARTU DAN LIHAT DIBALIK KABUT MISTERI</p>
      </div>
      <div className="container">
        <div className="kotak1"><img src="/tarotglobal/THE EMPEROR.png" alt="" /></div>
        <div className="kotak2"><img src="/tarotglobal/THE FOOL.png" alt="foool" /></div>
        <div className="kotak3"><img src="/tarotglobal/THE DEATH.png" alt="foool" /></div>
      </div>
      <div className='namacard'>
        <button className='mulai' onClick={() => router.push('/nama')}>
          <h1 className='h2'>MULAI</h1>
        </button>
      </div>
      </div>
      </>
  )
}
