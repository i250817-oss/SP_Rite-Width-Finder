import React from 'react';

interface LandingPageProps {
  onNavigate: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const features = [
    {
      title: '📍 Position Detection',
      description: 'Automatically finds the X and Y coordinates of your sprite'
    },
    {
      title: '📏 Width & Height Calculation',
      description: 'Measures exact dimensions for accurate placement'
    },
    {
      title: '✂️ Cutting & Cropping',
      description: 'Easily crop your sprite or specific pixel areas'
    },
    {
      title: '🎯 Pixel-Level Mapping',
      description: 'Determines the position of each individual pixel'
    },
    {
      title: '🏷️ Custom Renaming',
      description: 'Rename pixels or sprites for better organization'
    },
    {
      title: '📊 Excel Export',
      description: 'Download a complete Excel file with all sprite data'
    }
  ];

  return (
    <div className="min-h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SP_Rite Width Finder
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Finding the exact position, width, height, or coordinates of a sprite can be frustrating. 
            <span className="text-blue-400 font-semibold"> SP_Rite Width Finder</span> is designed to make 
            sprite management fast, precise, and frustration-free.
          </p>
          <button
            onClick={onNavigate}
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105"
          >
            Get Started 🚀
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">About This Project</h2>
          <div className="space-y-4 text-slate-300">
            <p>
              I developed SP_Rite Width Finder while creating my own game because I found manually locating 
              sprite positions too time-consuming and frustrating. With the help of AI tools and personal 
              experience, this tool simplifies sprite handling significantly.
            </p>
            <p>
              SP_Rite Width Finder helps <span className="text-blue-400 font-semibold">students</span> and 
              <span className="text-blue-400 font-semibold"> developers</span> save time and avoid errors when:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Learning game development</li>
              <li>Building complex game projects</li>
              <li>Managing sprite sheets efficiently</li>
              <li>Placing sprites precisely in your games</li>
            </ul>
            <p className="pt-4 border-t border-slate-600">
              This project is a small tool with a <span className="text-blue-400 font-semibold">big impact</span> on 
              productivity and accuracy. Whether you're a beginner or an experienced developer, 
              SP_Rite Width Finder ensures precision and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Simplify Your Workflow?</h2>
          <p className="text-white mb-6 text-lg">
            Start finding sprite coordinates, dimensions, and pixel positions instantly.
          </p>
          <button
            onClick={onNavigate}
            className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
          >
            Launch the Tool Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
