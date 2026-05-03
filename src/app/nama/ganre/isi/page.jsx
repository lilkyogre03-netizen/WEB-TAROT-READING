"use client";
import { useState, useEffect, Suspense } from 'react'; 
import { useRouter, useSearchParams } from 'next/navigation';
import { useParams } from 'next/navigation';

function TarotContent() {
    const [kartuList, setKartuList] = useState([]);
    const [flip, setflip] = useState(false);
    const [flip2, setflip2] = useState(false);
    const [flip3, setflip3] = useState(false);

    const searchParams = useSearchParams();
    const user = searchParams.get('user');
    const genre = searchParams.get('genre');
    const router = useRouter();
    const { name } = useParams();

    useEffect(() => {
        
        fetch(`https://https-githubcom-lilkyogre03-netizen-tarot-api-production.up.railway.app/api/kartu?genre=${genre}`)
            .then(res => res.json())
            .then(data => setKartuList(data))
            .catch(err => console.error("Java tidak konek:", err));
    }, [genre]);

    return (
        <div className="video-wrapper">
            <video autoPlay loop muted playsInline className="video-bg">
                <source src="/stary.mp4" type="video/mp4" />
            </video>

            <div className="video-overlay"></div>
            <div className='judul'>
                <p className='p1'>DUNIA SEDANG MEMBACA SPiRITUALMU {user}</p>
                <h1 className='hjudul'>BALIK KARTU DI BAWAH</h1>
                <p className='p2'>DAN LIHATLAH DUNIA DIBALIK KABUT SEMESTA</p>
            </div>

            <div className="container">
                {/* KOTAK 1 */}
                <div className="kotak1" onClick={() => setflip(!flip)}>
                    <div className={`kotak-inner ${flip ? "flipped" : ""}`}>
                        <div className="kotak-front">
                            <img src="/tarotglobal/belakangkartu.jpeg" alt="blkmg" />
                        </div>
                        <div className="kotak-back">
                            {kartuList[0] && (
                                <img src={`/tarotglobal/${encodeURIComponent(kartuList[0].nama)}.png`} alt={kartuList[0].nama} />
                            )}
                        </div>
                    </div>
                </div>

                {/* KOTAK 2 */}
                <div className="kotak2" onClick={() => setflip2(!flip2)}>
                    <div className={`kotak2-inner ${flip2 ? "flipped" : ""}`}>
                        <div className="kotak2-front">
                            <img src="/tarotglobal/belakangkartu.jpeg" alt="emperor" />
                        </div>
                        <div className="kotak2-back">
                            {kartuList[1] && (
                                <img src={`/tarotglobal/${encodeURIComponent(kartuList[1].nama)}.png`} alt={kartuList[1].nama} />
                            )}
                        </div>
                    </div>
                </div>

                {/* KOTAK 3 */}
                <div className="kotak3" onClick={() => setflip3(!flip3)}>
                    <div className={`kotak3-inner ${flip3 ? "flipped" : ""}`}>
                        <div className="kotak3-front">
                            <img src="/tarotglobal/belakangkartu.jpeg" alt="emperor" />
                        </div>
                        <div className="kotak3-back">
                            {kartuList[2] && (
                                <img src={`/tarotglobal/${encodeURIComponent(kartuList[2].nama)}.png`} alt={kartuList[2].nama} />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className='secarti'>
                <div className='arti1'>
                    <p>{!flip ? "Balik kartu masa lalu" :
                        (genre === 'cinta' ? kartuList[0]?.pastlove : genre === 'fortune' ? kartuList[0]?.pastfortune : kartuList[0]?.past)}</p>
                </div>
                <div className='arti2'>
                    <p>{!flip2 ? "Balik kartu masa kini" :
                        (genre === 'cinta' ? kartuList[1]?.presentlove : genre === 'fortune' ? kartuList[1]?.presentfortune : kartuList[1]?.present)}</p>
                </div>
                <div className='arti3'>
                    <p>{!flip3 ? "Balik kartu masa depan" :
                        (genre === 'cinta' ? kartuList[2]?.futurelove : genre === 'fortune' ? kartuList[2]?.futurefortune : kartuList[2]?.future)}</p>
                </div>
            </div>

            <div className='ulang'>
                <button className='btn-ulang' onClick={() => router.push(`/nama/ganre?user=${user}`)}>
                    <p>LIHAT JALUR TAKDIR LAINNYA?</p>
                </button>
            </div>
        </div>
    );
}

export default function Mainpage() {
    return (
        <Suspense fallback={<div className="loading">Sedang membaca takdir...</div>}>
            <TarotContent />
        </Suspense>
    );
}