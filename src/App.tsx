import { Zap, Flame, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-900 text-white overflow-hidden">
      <nav className="relative z-10 backdrop-blur-md bg-black/40 border-b border-orange-500/20 sticky top-0">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/image.png" alt="SYSKEI1" className="w-10 h-10 rounded-full border-2 border-orange-500" />
            <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              SYSKEI1
            </span>
          </div>

          <div className="hidden md:flex space-x-12 text-sm font-medium">
            <a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors">PORTFOLIO</a>
            <a href="#work" className="text-gray-300 hover:text-orange-400 transition-colors">WORK</a>
            <a href="#rates" className="text-gray-300 hover:text-orange-400 transition-colors">RATES</a>
            <a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">INQUIRE</a>
          </div>

          <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105">
            ORDER NOW
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-6 relative">
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-between py-20 gap-12">
          <div className="flex-1">
            <div className="space-y-8">
              <div>
                <p className="text-orange-400 font-bold text-lg mb-2 tracking-widest uppercase">Professional Thumbnail Design</p>
                <h1 className="text-6xl md:text-7xl font-black leading-tight mb-4">
                  <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                    Gorilla Tag
                  </span>
                  <br />
                  <span className="text-white">Thumbnails</span>
                </h1>
              </div>

              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Eye-catching thumbnails designed to boost your VR content views. Every frame optimized for clicks and engagement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-orange-500/50">
                  Get Started
                </button>
                <button className="px-8 py-4 rounded-full font-bold text-lg border-2 border-gray-600 hover:border-orange-400 text-gray-300 hover:text-orange-400 transition-all">
                  View Gallery
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full h-96 md:h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden border-4 border-orange-500/50 shadow-2xl shadow-orange-500/40 transform hover:scale-105 transition-transform">
                <img src="/image.png" alt="SYSKEI1" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 border-t border-orange-500/10">
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-orange-500/50 transition-all">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Fast Turnaround</h3>
            <p className="text-gray-400">30 minutes to 1 hour. Your thumbnails ready when you need them.</p>
            <p className="text-orange-400 font-bold mt-4 text-lg">Avg Wait</p>
          </div>

          <div className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-orange-500/50 transition-all">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Flame className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3">100+ Bangers</h3>
            <p className="text-gray-400">Over a hundred high-quality thumbnails delivered to satisfied creators.</p>
            <p className="text-orange-400 font-bold mt-4 text-lg">Thumbnails Made</p>
          </div>

          <div className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-orange-500/50 transition-all">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3">41+ Happy Creators</h3>
            <p className="text-gray-400">Join a community of VR streamers getting results with custom thumbnails.</p>
            <p className="text-orange-400 font-bold mt-4 text-lg">Happy Customers</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
