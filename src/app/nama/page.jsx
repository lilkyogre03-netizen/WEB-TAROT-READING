"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import '../global.css';
export default function NamaPage() {
  const [nama, setNama] = useState("")
  const router = useRouter()

  const handleSubmit = () => {
    if (!nama.trim()) return  
    router.push(`/nama/ganre?user=${encodeURIComponent(nama)}`)
  }

  return (
    <>
      <div className="video-wrapper">
        <video autoPlay loop muted playsInline className="video-bg">
          <source src="/stary.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="video-overlay"></div>

      <div className='judul1'>
        <p className='p3'>SEMESTA INGIN MENGENALMU</p>
        <h1 className='hjudul'>SIAPA NAMAMU?</h1>
        <p className='p4'>MASUKKAN NAMAMU UNTUK MEMULAI PERJALANAN</p>
      </div>

      <div className='form-nama'>
        <input
          className='input-nama'
          type="text"
          placeholder="Masukkan namamu..."
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <div className='lanjut'>
          <button className='mulai1' onClick={handleSubmit}>
            <h1 className='h3'>LANJUT →</h1>
          </button>
        </div>
      </div>
    </>
  )
}
