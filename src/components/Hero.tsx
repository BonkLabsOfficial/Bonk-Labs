import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-start pt-16 pb-16" style={{backgroundColor: '#0d0b10'}}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="w-full h-[450px] flex flex-col p-12 rounded-lg" style={{backgroundColor: '#0464ac'}}>
              <div className="flex-shrink-0 mb-6 flex justify-between items-start">
                <div className="space-y-2">
                  <h1 className="text-7xl lg:text-8xl font-black leading-none tracking-tight" style={{color: '#eb7b14'}}>
                    BONK
                  </h1>
                  <h1 className="text-7xl lg:text-8xl font-black leading-none tracking-tight" style={{color: '#eb7b14'}}>
                    LABS
                  </h1>
                </div>
                
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <a
                    href="https://x.com/bonklabs_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-base font-bold tracking-wide hover:opacity-80 transition-opacity duration-200 rounded-lg text-center"
                    style={{backgroundColor: '#eb7b14', color: '#0d0b10'}}
                  >
                    Follow on X
                  </a>
                
                  <a
                    href="https://github.com/BonkLabsOfficial/Bonk-Labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 text-base font-bold tracking-wide hover:opacity-80 transition-opacity duration-200 rounded-lg text-center"
                    style={{borderColor: '#eb7b14', color: '#0d0b10'}}
                  >
                    View Code
                  </a>
                </div>
              </div>
            
              <div className="flex-1 flex flex-col justify-center space-y-4">
                <p className="text-xl leading-relaxed font-black mb-4" style={{color: '#0d0b10'}}>
                  The fusion of artificial intelligence and degen culture—a creative lab where ideas, 
                  coins, and memes are engineered for the wild world of Pumpfun.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 border-4 overflow-hidden rounded-lg" style={{borderColor: '#0464ac'}}>
                <img
                  src="https://res.cloudinary.com/dmipavrnm/image/upload/v1758346797/att.fufoRqMvVb4oSK5Gg8JkQLZxn-YWNGt43Tv-0t7agHA_sfdlh3.jpg"
                  alt="Bonk Labs"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Minimal corner accents */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}