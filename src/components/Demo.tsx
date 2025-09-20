import React, { useRef, useState } from 'react';

const Demo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20" style={{backgroundColor: '#0464ac'}}>
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-16 p-8 rounded-lg" style={{backgroundColor: '#eb7b14'}}>
          <div className="space-y-2 mb-8">
            <p className="text-sm font-black tracking-widest uppercase" style={{color: '#0d0b10'}}>
              Demonstration
            </p>
            <div className="w-12 h-px mx-auto" style={{backgroundColor: '#0d0b10'}}></div>
          </div>
          <h2 className="text-5xl font-black mb-6" style={{color: '#0d0b10'}}>
            In Action
          </h2>
          <p className="text-xl font-black max-w-2xl mx-auto" style={{color: '#0d0b10'}}>
            Watch the degen lab in action. Real memecoin experiments, AI-powered creativity, community-driven chaos.
          </p>
        </div>

        <div className="border rounded-lg overflow-hidden" style={{backgroundColor: '#eb7b14', borderColor: '#0464ac'}}>
          {/* Header */}
          <div className="border-b px-8 py-4" style={{borderColor: '#0464ac'}}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-black tracking-wide" style={{color: '#0d0b10'}}>
                Live Demo
              </span>
              <div className="flex items-center space-x-6">
                <button
                  onClick={togglePlay}
                  className="px-4 py-2 text-xs font-bold hover:opacity-80 transition-opacity duration-200 rounded"
                  style={{backgroundColor: '#0464ac', color: '#eb7b14'}}
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <div className="flex items-center space-x-2">
                    <span className="text-xs font-black" style={{color: '#8cdcc4'}}>REC</span>
                  <span className="text-xs font-bold" style={{color: '#0d0b10'}}>REC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="relative">
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/dmipavrnm/video/upload/v1758346799/Recording-BonkLabs_e6kxfc.mp4"
              className="w-full h-auto"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-12">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#0d0b10'}}></div>
              <span className="text-sm font-black" style={{color: '#0d0b10'}}>Degen Culture</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#0d0b10'}}></div>
              <span className="text-sm font-black" style={{color: '#0d0b10'}}>Memecoin Labs</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#0d0b10'}}></div>
              <span className="text-sm font-black" style={{color: '#0d0b10'}}>Pumpfun Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;