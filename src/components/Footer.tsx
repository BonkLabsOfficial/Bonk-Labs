import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t py-16" style={{backgroundColor: '#eb7b14', borderColor: '#0464ac'}}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#0464ac'}}>
                  <span className="text-sm font-black" style={{color: '#0d0b10'}}>B</span>
                </div>
                <span className="text-3xl font-bold tracking-wide" style={{color: '#0d0b10'}}>BONK LABS</span>
              </div>
              <div className="w-16 h-px mb-6" style={{backgroundColor: '#0d0b10'}}></div>
            </div>
            <p className="leading-relaxed text-lg font-black max-w-md" style={{color: '#0d0b10'}}>
              The fusion of artificial intelligence and degen culture—where ideas, coins, and memes 
              are engineered for the wild world of Pumpfun.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-sm font-black tracking-widest uppercase mb-8" style={{color: '#0d0b10'}}>
              Connect
            </h4>
            <div className="space-y-4">
              <a
                href="https://x.com/bonklabs_"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity font-black"
                style={{color: '#0d0b10'}}
              >
                X / Twitter
              </a>
              <a
                href="https://github.com/BonkLabsOfficial/Bonk-Labs"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity font-black"
                style={{color: '#0d0b10'}}
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-black tracking-widest uppercase mb-8" style={{color: '#0d0b10'}}>
              Project
            </h4>
            <p className="font-black leading-relaxed" style={{color: '#0d0b10'}}>
              A creative lab where AI meets degen culture. We experiment, fail, learn, and most importantly, 
              pump together. The lab doors are open—welcome to the future of degen science.
            </p>
          </div>
        </div>

        <div className="border-t mt-16 pt-8" style={{borderColor: '#0d0b10'}}>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm font-black tracking-wide" style={{color: '#0d0b10'}}>
              BONK LABS © 2025
            </p>
            <p className="text-sm font-black" style={{color: '#0d0b10'}}>
              Made with degen energy and AI precision for the wild world of Pumpfun culture.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;