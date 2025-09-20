import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Gallery: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Bonk Labs exactly?",
      answer: "Bonk Labs is the fusion of artificial intelligence and degen culture—a creative lab where ideas, coins, and memes are engineered for the wild world of Pumpfun. We're not just another AI tool; we're your lab assistant for memecoin creation, token naming, meme crafting, and market hype generation."
    },
    {
      question: "How does Bonk Labs help with Pumpfun projects?",
      answer: "Think of me as the scientist behind the screen! I help generate token names and taglines, craft viral memes, create hype posts, provide quick market reads, and give you AI-driven tools to visualize your tokens and narrate their stories. Every project is treated like a lab experiment designed for maximum community impact."
    },
    {
      question: "What makes this different from other crypto AI tools?",
      answer: "We're built specifically for degen culture and the chaos of Pumpfun! While others focus on boring corporate stuff, we thrive at the crossroads of humor, speculation, and technology. We understand that some experiments explode, some fizzle, but all should create entertainment and community vibes."
    },
    {
      question: "Can Pump Labs actually help me launch a successful token?",
      answer: "We provide the creative fuel and AI-powered tools to craft compelling narratives, generate viral content, and build community hype around your token ideas. While we can't guarantee pumps (nothing can!), we make sure your launches are fun, fast, and unforgettable."
    },
    {
      question: "Is this just for experienced crypto degens?",
      answer: "Not at all! Whether you're a seasoned degen or just getting into the Pumpfun scene, our AI lab assistant makes memecoin creation accessible and fun. We help turn raw chaos into something worth sharing, regardless of your experience level."
    },
    {
      question: "How do I start experimenting in the lab?",
      answer: "Jump into the Chat section and let's start cooking! Tell me about your token idea, ask for meme suggestions, or let's brainstorm the next viral Pumpfun launch. The lab doors are open, and every conversation is a new experiment waiting to happen!"
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="min-h-screen py-20" style={{backgroundColor: '#eb7b14'}}>
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-20 p-8 rounded-lg" style={{backgroundColor: '#0464ac'}}>
          <div className="space-y-2 mb-8">
            <p className="text-sm font-black tracking-widest uppercase" style={{color: '#0d0b10'}}>
              Questions & Answers
            </p>
            <div className="w-12 h-px mx-auto" style={{backgroundColor: '#0d0b10'}}></div>
          </div>
          <h2 className="text-5xl font-black mb-6" style={{color: '#0d0b10'}}>
            Frequently Asked Questions
          </h2>
          <p className="text-xl font-black" style={{color: '#0d0b10'}}>
            Everything you need to know about the AI-powered degen lab.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 rounded-lg overflow-hidden transition-all duration-300"
              style={{
                borderColor: '#0464ac',
                backgroundColor: openFaq === index ? '#0464ac' : '#eb7b14'
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors duration-300 hover:opacity-80"
                style={{
                  color: openFaq === index ? '#0d0b10' : '#0d0b10'
                }}
              >
                <h3 className="text-lg font-black pr-4">
                  {faq.question}
                </h3>
                <div>
                  {openFaq === index ? (
                    <ChevronUp size={24}
                  style={{color: '#0d0b10'}}
                  />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </div>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openFaq === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
                style={{
                  backgroundColor: '#0464ac'
                }}
              >
                <div className="px-8 pb-6 pt-2 border-t-2" style={{borderColor: '#0d0b10'}}>
                  <p
                    className="leading-relaxed font-black"
                    style={{color: '#0d0b10'}}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-12">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#0d0b10'}}></div>
              <span className="text-sm font-black" style={{color: '#0d0b10'}}>Degen Culture</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#0d0b10'}}></div>
              <span className="text-sm font-black" style={{color: '#0d0b10'}}>AI Powered</span>
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

export default Gallery;