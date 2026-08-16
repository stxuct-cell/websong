'use client';
import dynamic from 'next/dynamic';
import { useState, useRef, useEffect } from 'react';

// Dynamic import prevents Next.js Turbopack SSR errors
const YouTube = dynamic(() => import('react-youtube'), { ssr: false });

export default function Page() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const playerRef = useRef(null);
  const timerRef = useRef(null);

  const playlist = [
    { id: 'wDFxqgAb2XE', title: 'Anisuthide Yako Indu', subtitle: 'Sonu Nigam • Mungaru Male (2006)' },
    { id: 'Zs-3RgNyT-s', title: 'Nooru Janmaku', subtitle: 'Rajesh Krishnan • America America (1997)' },
    { id: 'euKf7CN04wU', title: 'Ninnindale', subtitle: 'Sonu Nigam • Milana (2007)' },
    { id: '1ZnULthnjJI', title: 'Sanju Mattu Geetha', subtitle: 'Shreya Ghoshal • Sanju Weds Geetha (2011)' },
    { id: '7ejK75eCPOI', title: 'Baanallu Neene', subtitle: 'P. Susheela • Bayalu Daari (1976)' },
    { id: 'M4SG5do_2mc', title: 'Belageddu', subtitle: 'Vijay Prakash • Kirik Party (2016)' },
    { id: 'lnVeVAvOojA', title: 'Sadha Ninna Kannali', subtitle: 'Kiccha Sudeep • Bachchan (2013)' },
    { id: '-1TEJkzEgYc', title: 'Ee Sanje Yakaagide', subtitle: 'Tarun Chandra & Kirat Bhattal • Geleya (2007)' },
    { id: '8HbwsAOfoRY', title: 'Jotheyali Jothe Jotheyali', subtitle: 'Shankar Nag & Akshatha Rao • Geetha (1981)' },
    { id: 'Dajcwrykmf8', title: 'Naguva Nayana', subtitle: 'SPB & S Janaki • Pallavi Anupallavi (1983)' },
    
    { id: 'WqKNfmmYgSI', title: 'Neene Sakida Gini', subtitle: 'SPB • Manasa Sarovara (1982)' },
    { id: 'PyJammsePPA', title: 'Endendu Ninnanu', subtitle: 'PB Sreenivas • Eradu Kanasu (1974)' },
   { id: '_6HCl1boPdU', title: 'Neenu Banda Mele', subtitle: 'Sonu Nigam & Nanditha • Krishna (2007)'  }, 
    { id: 'tEAvA9SNJ4Y', title: 'Nammura Mandara Hoove', subtitle: 'SPB & Chithra • Nammura Mandara Hoove (1996)' },
    { id: 'e5byqxOkzRw', title: 'Tunturu Alli Nira', subtitle: 'Chithra • Amrithadhare (2005)' },
    { id: 'wmlvDnOAaQk', title: 'Hrudayave Ninna Hesarige', subtitle: 'Ramesh Aravind & Malashree • Belli Modagalu (1992)' },
    { id: 'zecRgZYi-kw', title: 'Minchaagi Neenu', subtitle: 'Sonu Nigam • Gaalipata (2008)' },
    { id: 'B5QMIiWXQyI', title: 'Ee Sundara Beladingala', subtitle: 'SPB & Chithra • Amrutha Varshini (1997)' },
    { id: '7CS11BGmP98', title: 'Kanasalu Neene', subtitle: 'SPB • Bayalu Daari (1976)' },
    { id: 'E640TvPtjro', title: 'Omme Ninnannu', subtitle: "S. Janaki • Gaali Maathu (1981)" },
    
    { id: 'wWyp0RyCK-k', title: 'Ullasada Hoomale', subtitle: 'Karthik • Cheluvina Chittara (2007)' },
    { id: 'RtvhA4GQ_l4', title: 'summane summane', subtitle: ' Bombay Jayashree • Jothe Jotheyali (2006)' },
    { id: 'UST192Oop8M', title: 'Kariya I Love You', subtitle: 'Gurukiran • Kariya (2003)' },
    { id: 'EnddNPFnzSA', title: 'Huttidare Kannada', subtitle: 'Dr. Rajkumar • Aakasmika (1993)' },
    { id: 'QrCQyRSoEtY', title: 'Mungaru Maleye', subtitle: 'Sonu Nigam • Mungaru Male (2006)' },
    { id: 'uzrHxCutbdk', title: 'Jenina Holeyo', subtitle: 'Dr. Rajkumar • Chalisuva Modagalu (1982)' },
    { id: 'PjYRNaAucg8', title: 'Neerabittu Nelada', subtitle: 'SPB • Hombisilu (1978)' },
    { id: 'msHTvQ8WSHU', title: 'Belli Moda', subtitle: 'S Janaki • Belli Moda (1967)' },
    { id: 'hP5MF8dB7_I', title: 'Yeno Onthara', subtitle: 'shaan • Hudugaru (2011)' },
    
  
    { id: 'rpwBjp_QwPs', title: 'Yarivalu (Baninda Jaridantha)', subtitle: 'Udit Narayan • Gowramma (2005)' },
    { id: 'wZDAJnVmC0s', title: 'Tunga Teera Viraji', subtitle: 'P Susheela • Sharapanjara (1971)' },
    { id: 'vFqBfAGmsdQ', title: 'Naa Hadide (Hombisilu Album)', subtitle: 'SPB • Hombisilu (1978)' },
    { id: 'VTeCQi5d6rg', title: 'O Meghave Meghave', subtitle: 'Raghuveer & Sindhu • Shrungara Kavya (1993)' },
    { id: 'bXLaHZScwSo', title: 'Eradu Kanasu (Endendu Ninnanu)', subtitle: 'PB Sreenivas • Eradu Kanasu (1974)' },
    { id: 'c_co5Dgbrz4', title: 'Shrungara Kavya', subtitle: 'Raghuveer & Sindhu • Shrungara Kavya (1993)' },
   { id: 'L_d4NglYuVM', title: 'Ambara Chumbitha Prema', subtitle: 'Raghuveer & Sindhu • Shrungara Kavya (1993)' },
    { id: 'TtiiRluiLUg', title: 'Jivva Hoovagide', subtitle: 'Dr. Rajkumar • Nee Nanna Gellalare (1981)' },
    { id: 'QDWi1rQpifs', title: 'Tharikere Eri Mele', subtitle: 'SPB • Devara Duddu (1977)' },
    { id: '9dtaiMx6Rl4', title: 'Aakashave Beelali Mele', subtitle: 'PB Sreenivas • Nyayave Devaru (1971)' },

    
    { id: 'tlrFAoi-ncE', title: ' Yaarige Yaaru ilri', subtitle: '"Snehaloka • Rajesh Krishnan • Hamsalekha"' },
    { id: 'S3TrOFSQaCA', title: 'Hele Kogile', subtitle: 'K S Chithra • Nammura Mandara Hoove (1996)' },
    { id: 'NfRPK1Ri8-k', title: 'Preetse Preetse', subtitle: 'Hemanth Kumar • Preetse (2000)' },
    { id: 'Ef1ZSrEKT7A', title: 'Yare Neenu Cheluve', subtitle: 'SPB • Naanu Nanna Hendthi (1999)' },
    { id: 'FSflxAAmEco', title: 'Olave Vismaya', subtitle: 'Sonu Nigam • Aithalakkadi (2010)' },
    { id: '0QCoFQVrYu8', title: 'Appa I Love You', subtitle: 'Anuradha Bhat • Chowka (2017)' },
    { id: '8v34Fvv90Us', title: 'Nodivalandava', subtitle: 'Prem • The Villain (2018)' },
    { id: 'XXUFa18YN8I', title: 'Pankaja', subtitle: 'Gurukiran • Hudugaru (2011)' }
  ];

  const currentSong = playlist[currentSongIndex];
  const thumbnailUrl = `https://img.youtube.com/vi/${currentSong.id}/mqdefault.jpg`;

  const formatTime = (time) => {
    if (isNaN(time) || time === 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // FIX 1: Add "async/await" so we get real numbers instead of Promise objects
  const onReady = async (event) => {
    playerRef.current = event.target;
    try {
      const dur = await event.target.getDuration();
      setDuration(dur || 0);
    } catch (e) {}
  };

  const onStateChange = async (event) => {
    try {
      const dur = await event.target.getDuration();
      setDuration(dur || 0);
    } catch (e) {}
    
    if (event.data === 1) setIsPlaying(true);  
    if (event.data === 2) setIsPlaying(false); 
  };

  const togglePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
  };

  // FIX 2: Reset the time to 0 when changing songs
  const nextSong = () => {
    if (currentSongIndex < playlist.length - 1) {
      setCurrentSongIndex(prev => prev + 1);
      setCurrentTime(0);
      setDuration(0);
    }
  };

  const prevSong = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(prev => prev - 1);
      setCurrentTime(0);
      setDuration(0);
    }
  };

  // FIX 3: Make the interval async so the progress bar updates properly
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(async () => {
        if (playerRef.current && playerRef.current.getCurrentTime) {
          try {
            const time = await playerRef.current.getCurrentTime();
            setCurrentTime(time || 0);
          } catch (e) {}
        }
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying]);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  // FIX 4: Add "origin" to prevent YouTube from blocking certain music videos
  const videoOpts = {
    playerVars: { 
      autoplay: 1, 
      controls: 0,
      origin: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'
    }
  };

  return (
   <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: 'black', fontFamily: 'sans-serif' }}>
      
      {/* BACKGROUND ARTWORK */}
      <img
        src="/kannada-bg.jpg" 
        alt="Nostalgic Background"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
      />

      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');`}} />

      <h1 style={{
        position: 'absolute', top: '12%', left: '50%', transform: 'translateX(-50%)', margin: 0,
        color: 'transparent', WebkitTextStroke: '2px rgba(255, 255, 255, 0.9)', 
        fontFamily: '"Black Ops One", cursive', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: '400', 
        letterSpacing: '8px', textAlign: 'center', pointerEvents: 'none', textShadow: '0 15px 30px rgba(0, 0, 0, 0.8)'
      }}>
        ನಮ್ಮ ಬೆಂಗಳೂರು
      </h1>
      
      {/* OFF-SCREEN YOUTUBE PLAYER */}
      <div style={{ position: 'absolute', top: '-9999px', left: '-9999px', width: '300px', height: '300px' }}>
        <YouTube videoId={currentSong.id} opts={videoOpts} onReady={onReady} onStateChange={onStateChange} onEnd={nextSong} />
      </div>

      {/* ========================================= */}
      {/* COMPACT GLASSMORPHISM UI BAR */}
      {/* ========================================= */}
      <div 
      style={{ 
        position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
        width: '90%', maxWidth: '700px',
        
        backgroundColor: 'rgba(255, 255, 255, 0.08)', 
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '100px', 
        padding: '8px 24px 8px 8px', 
        boxShadow: '0 10px 40px rgba(0,0,0,0.4)'
      }}>
        
        {/* LEFT SIDE: Art, Text, & Progress */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: 1, minWidth: 0, paddingRight: '20px' }}>
          
          <img 
            src={thumbnailUrl} 
            alt="Thumbnail" 
            style={{ 
              width: '56px', height: '56px',
              borderRadius: '50%', objectFit: 'cover', 
              border: '2px solid rgba(255,255,255,0.9)', flexShrink: 0 
            }} 
          />

          {/* Text & Progress Container */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px', minWidth: 0 }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
              <span style={{ color: 'white', fontWeight: '800', fontSize: '15px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {currentSong.title}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', fontWeight: '500', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {currentSong.subtitle}
              </span>
            </div>

            {/* Progress Bar & Time */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div style={{ width: '100%', height: '3px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '2px', position: 'relative' }}>
                <div style={{ width: `${progressPercent}%`, height: '100%', backgroundColor: 'white', borderRadius: '2px', position: 'absolute', top: 0, left: 0, transition: 'width 1s linear' }} />
              </div>
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '10px', fontWeight: 'bold' }}>
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
            
          </div>
        </div>

        {/* RIGHT SIDE: Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          
          <button style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.15)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/></svg>
          </button>

          <button onClick={prevSong} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'white', padding: '6px' }}>
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
          </button>

          <button onClick={togglePlay} style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'white', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black' }}>
            {isPlaying ? (
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            ) : (
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style={{ marginLeft: '2px' }}><path d="M8 5v14l11-7z"/></svg>
            )}
          </button>

          <button onClick={nextSong} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'white', padding: '6px' }}>
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
          </button>
          
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'white', padding: '6px' }}>
             <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/></svg>
          </button>

        </div>
      </div>
    </div>
  );
}