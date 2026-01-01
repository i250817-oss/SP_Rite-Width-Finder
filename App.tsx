import React, { useState } from 'react';
import { SpriteData } from './types';
import LandingPage from './pages/LandingPage';
import ToolPage from './pages/ToolPage';
import FeedbackPage from './pages/FeedbackPage';

type Page = 'landing' | 'tool' | 'feedback';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [spriteData, setSpriteData] = useState<SpriteData[]>([]);

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={() => setCurrentPage('tool')} />;
      case 'tool':
        return (
          <ToolPage
            spriteData={spriteData}
            setSpriteData={setSpriteData}
            onNavigate={setCurrentPage}
          />
        );
      case 'feedback':
        return <FeedbackPage onNavigate={setCurrentPage} />;
      default:
        return <LandingPage onNavigate={() => setCurrentPage('tool')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-950 border-b border-slate-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform" 
              onClick={() => setCurrentPage('landing')}
            >
              SP_Rite Width Finder
            </h1>
            <nav className="flex gap-6">
              <button
                onClick={() => setCurrentPage('landing')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'landing'
                    ? 'bg-blue-500 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('tool')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'tool'
                    ? 'bg-blue-500 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                Tool
              </button>
              <button
                onClick={() => setCurrentPage('feedback')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'feedback'
                    ? 'bg-blue-500 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                Feedback
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">SP_Rite Width Finder</h3>
              <p className="text-slate-400 text-sm">
                Simplifying sprite management for game developers and students worldwide.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setCurrentPage('landing')} className="text-blue-400 hover:text-blue-300">Home</button></li>
                <li><button onClick={() => setCurrentPage('tool')} className="text-blue-400 hover:text-blue-300">Sprite Finder</button></li>
                <li><button onClick={() => setCurrentPage('feedback')} className="text-blue-400 hover:text-blue-300">Report Bug</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect with Ahmad Ali</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.linkedin.com/in/ahmad-ali-745606385/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                  >
                    🔗 LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/i250817-oss/SP_Rite-Width-Finder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                  >
                    🐙 GitHub Repository
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-6">
            <p className="text-center text-slate-400 text-sm">
              Built by <span className="font-semibold text-white">Ahmad Ali</span> (i250817-oss)
            </p>
            <p className="text-center text-slate-500 text-xs mt-2">
              © 2025 SP_Rite Width Finder. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
