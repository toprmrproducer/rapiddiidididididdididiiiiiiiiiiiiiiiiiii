import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  team: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ServiceCard({ team, title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl opacity-20 group-hover:opacity-100 transition duration-300 blur" />
      <div className="relative bg-black p-8 rounded-xl">
        <Icon className="h-8 w-8 text-cyan-400 mb-4" />
        <p className="text-cyan-400 text-sm font-medium mb-2">{team}</p>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
          Learn more
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}