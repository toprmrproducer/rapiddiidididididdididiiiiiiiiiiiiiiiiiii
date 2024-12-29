import React from 'react';
import { Button } from '../../Button';
import { Shield, Sword } from '../../icons/MilitaryIcons';
import { TypewriterText } from '../../effects/TypewriterText';

export function ChoiceSection() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title with Branching Paths */}
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
            YOU'VE GOT{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">
              2 OPTIONS
            </span>
            {' '}TO CHOOSE FROM
          </h2>

          {/* Branching Arrows */}
          <div className="relative h-32">
            <div className="absolute left-1/2 top-0 w-0.5 h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
            <div className="absolute left-1/4 top-8 w-[25%] h-0.5 bg-gradient-to-l from-cyan-500 to-transparent transform -skew-y-12" />
            <div className="absolute right-1/4 top-8 w-[25%] h-0.5 bg-gradient-to-r from-cyan-500 to-transparent transform skew-y-12" />
          </div>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Option - Ignore */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gray-800/50 rounded-2xl opacity-20 group-hover:opacity-100 transition duration-300 blur" />
            <div className="relative bg-black p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold text-gray-400 mb-6">IGNORE</h3>
              <h4 className="text-xl font-bold text-white mb-8">
                The Warnings Universe Gives you
              </h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">→</span>
                  You'll stay trapped in mediocrity
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">→</span>
                  Your potential will rot, day by day
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">→</span>
                  Life will pass you by and AI will Replace you
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">→</span>
                  You shall be left behind in the AI Era
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">→</span>
                  You'll die regretting, while others reap rewards
                </li>
              </ul>
            </div>
          </div>

          {/* Right Option - Act Fast */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-2xl opacity-20 group-hover:opacity-100 transition duration-300 blur" />
            <div className="relative bg-black p-8 rounded-2xl border border-cyan-800">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">ACT FAST</h3>
              <h4 className="text-xl font-bold text-white mb-8">
                Transform Your Business with AI
              </h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">→</span>
                  Unleash your business's true Potential
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">→</span>
                  Dominate the Industry
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">→</span>
                  Ride the AI wave
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">→</span>
                  Make and Save More Money
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">→</span>
                  Increase your Profit Margins
                </li>
              </ul>
              <div className="mt-8">
                <Button 
                  className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400"
                  onClick={() => window.open('https://calendly.com/rapidx-ai/discovery', '_blank')}
                >
                  Book Your Discovery Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}