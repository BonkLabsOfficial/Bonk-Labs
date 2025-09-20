import React from 'react';

const About: React.FC = () => {
  return (
    <section className="min-h-screen py-20" style={{backgroundColor: '#eb7b14'}}>
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black mb-6" style={{color: '#0d0b10'}}>
            About Bonk Labs
          </h2>
          <div className="w-16 h-1 mx-auto mb-8" style={{backgroundColor: '#0d0b10'}}></div>
          <p className="text-2xl font-black max-w-2xl mx-auto" style={{color: '#0d0b10'}}>
            Where AI meets degen culture to create the ultimate memecoin lab.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6 text-lg leading-relaxed" style={{color: '#0d0b10'}}>
              <p className="font-black">
                At Bonk Labs, AI isn't just a tool—it's the lab assistant. From generating token names 
                and taglines to crafting memes, hype posts, and quick market reads, our AI brings energy 
                and originality into every launch.
              </p>
              
              <p className="font-black">
                Think of it as the scientist behind the screen, mixing code and culture in test tubes 
                of innovation. Every project is treated like a lab experiment: some explode, some fizzle, 
                but all create entertainment and community vibes.
              </p>
              
              <p className="font-black">
                We push the frontier of memecoin creation by giving degens AI-driven tools to visualize 
                their tokens, narrate their stories, and hype their movements. Pump Labs thrives at the 
                crossroads of humor, speculation, and technology.
              </p>
            </div>

            <div className="flex space-x-8 mt-8">
              <a
                href="https://x.com/bonklabs_"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-sm font-black hover:opacity-80 transition-opacity rounded-lg"
                style={{backgroundColor: '#0464ac', color: '#eb7b14'}}
              >
                Follow on X
              </a>
              
              <a
                href="https://github.com/BonkLabsOfficial/Bonk-Labs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-sm font-black border-2 hover:opacity-80 transition-opacity rounded-lg"
                style={{borderColor: '#0d0b10', color: '#0d0b10'}}
              >
                View Code
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 border-4 overflow-hidden rounded-lg" style={{borderColor: '#0464ac'}}>
                <img
                  src="https://res.cloudinary.com/dmipavrnm/image/upload/v1758346797/att.fufoRqMvVb4oSK5Gg8JkQLZxn-YWNGt43Tv-0t7agHA_sfdlh3.jpg"
                  alt="Bonk Labs"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-12">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#0d0b10'}}></div>
              <span className="font-black" style={{color: '#0d0b10'}}>Innovation Driven</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#0d0b10'}}></div>
              <span className="font-black" style={{color: '#0d0b10'}}>Transparent</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#0d0b10'}}></div>
              <span className="font-black" style={{color: '#0d0b10'}}>Results Focused</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;