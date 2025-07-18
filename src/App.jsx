import React, { useState, useRef } from 'react'
import Cover from './components/Cover.jsx'
import MainCard from './components/MainCard.jsx'
import Notes from './components/Notes.jsx'
import Social from './components/Social.jsx'
import Envelope from './components/Envelope.jsx'
import './assets/3d-flip.css'

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showNameInput, setShowNameInput] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false)
  const [showGreeting, setShowGreeting] = useState(false);
  const [greetingFadeOut, setGreetingFadeOut] = useState(false);
  const [showGreetingNote, setShowGreetingNote] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', pronoun: '' })
  const envelopeAudioRef = useRef(null)
  const cardAudioRef = useRef(null)

  const handlePlayMusic = () => {
    if (envelopeAudioRef.current) {
      envelopeAudioRef.current.play().catch(error => {
        console.error("Audio play failed:", error);
      });
    }
  };

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpen(true);
    setShowNameInput(true);
  };

  const handleOpenCard = (info) => {
    setUserInfo(info)
    setShowNameInput(false);
    setIsCardOpen(true)
    setShowGreeting(true)
    setGreetingFadeOut(false)
    setShowGreetingNote(false)

    const firstAudio = envelopeAudioRef.current;
    const secondAudio = cardAudioRef.current;

    // Fade out first audio, play second audio immediately
    if (firstAudio && !firstAudio.paused) {
      let currentVolume = firstAudio.volume;
      const fadeInterval = setInterval(() => {
        currentVolume = Math.max(0, currentVolume - 0.1);
        firstAudio.volume = currentVolume;
        if (currentVolume === 0) {
          clearInterval(fadeInterval);
          firstAudio.pause();
        }
      }, 100);
    }
    if (secondAudio) {
      secondAudio.currentTime = 0;
      secondAudio.volume = 1;
      secondAudio.play().catch(e => console.error("Card audio failed to play", e));
    }

    // Sau 2s, hiện note greeting, sau 4s fadeout, sau 1s nữa thì ẩn greeting
    setTimeout(() => setShowGreetingNote(true), 2000);
    setTimeout(() => setGreetingFadeOut(true), 6000);
    setTimeout(() => setShowGreeting(false), 7000);
  }

  // Hàm viết hoa chữ cái đầu tên
  function capitalizeName(name) {
    if (!name) return '';
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Cormorant+Garamond:wght@400;700&display=swap');
        html, body {
          color-scheme: light;
        }
        @media (prefers-color-scheme: dark) {
          html, body {
            color-scheme: light;
          }
        }
        /* Đảm bảo màu nền và text luôn đúng */
        .bg-black, .bg-white, .bg-\[#e3f0fa\] {
          background-color: inherit !important;
        }
        .text-white, .text-yellow-100, .text-yellow-300, .text-yellow-500, .text-yellow-700 {
          color: inherit !important;
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(100vw); }
          60% { opacity: 1; }
          100% { opacity: 1; transform: translateX(0); }
        }
        .greeting-animate {
          animation: slideInRight 2s cubic-bezier(.77,0,.18,1) both;
        }
        .greeting-fadeout {
          opacity: 0;
          transition: opacity 1s;
        }
        .greeting-bg {
          background: white;
          transition: opacity 1s;
        }
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-100vw); }
          60% { opacity: 1; }
          100% { opacity: 1; transform: translateX(0); }
        }
        .slide-in-left {
          animation: slideInLeft 1.2s cubic-bezier(.77,0,.18,1) both;
        }
      `}</style>
      <div className="min-h-screen bg-[#e3f0fa] flex flex-col items-stretch">
        <audio ref={envelopeAudioRef} src="https://media.vocaroo.com/mp3/11pqNgcn4z0B" preload="auto" loop />
        <audio ref={cardAudioRef} src="https://media.vocaroo.com/mp3/1fJ7Gnk58btp" preload="auto" loop />
        
        {!isEnvelopeOpen && <Envelope onOpen={handleEnvelopeOpen} onPlayMusic={handlePlayMusic} />}

        {isEnvelopeOpen && showNameInput && (
          <Cover onOpenCard={handleOpenCard} />
        )}

        {isEnvelopeOpen && !showNameInput && showGreeting && (
          <div className={`fixed inset-0 flex flex-col items-center justify-center z-50 greeting-bg ${greetingFadeOut ? 'greeting-fadeout' : ''}`}>
            <div className={`text-3xl font-bold text-blue-700 drop-shadow-lg greeting-animate`}>
              Xin chào {userInfo.pronoun} {capitalizeName(userInfo.name)}!
            </div>
            {showGreetingNote && (
              <div className="mt-6 text-lg font-semibold text-blue-800 slide-in-left">
                Hãy dành một tí thời gian để xem nhé !
              </div>
            )}
          </div>
        )}

        {isEnvelopeOpen && !showNameInput && !showGreeting && isCardOpen && (
          <div className="scene">
            <div className={`card is-flipped`}>
              <div className="card__face card__face--back">
                <div 
                  className="min-h-screen overflow-y-auto relative bg-cover bg-center"
                  style={{ 
                    backgroundImage: "url('/ANH.jpg')",
                    touchAction: 'pan-y',
                    WebkitOverflowScrolling: 'touch'
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-30" />
                  <div className="container mx-auto px-4 py-8 relative">
                    <div className="space-y-8">
                      <MainCard userInfo={userInfo} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App