import React, { useState } from 'react';
import { 
  Camera, Video, Instagram, Home, Music, ShieldCheck, 
  Briefcase, ChevronRight, CheckCircle2, Zap, Film, Trophy 
} from 'lucide-react';

const TrillWaveLogo = ({ className = "w-12 h-12" }) => (
  <div className={`relative ${className} overflow-hidden rounded-full border border-white/10 bg-zinc-900 flex items-center justify-center`}>
    <img 
      src="TRILLWAVE_altwave-01.jpg" 
      alt="Trill Wave Logo" 
      className="w-full h-full object-cover"
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.parentElement.innerHTML = '<div class="text-cyan-400 font-black italic">TW</div>';
      }}
    />
  </div>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('artists');

  const artistGallery = [
    { src: 'Messiah.jpg', span: 'col-span-2 row-span-2' },
    { src: 'Rendy-16.jpg', span: 'col-span-1 row-span-1' },
    { src: 'untitled-6.jpg', span: 'col-span-1 row-span-1' },
    { src: 'Messiah-19.jpg', span: 'col-span-1 row-span-2' },
    { src: 'untitled-5.jpg', span: 'col-span-1 row-span-1' },
    { src: 'Rendy-18.jpg', span: 'col-span-2 row-span-1' },
    { src: 'Messiah-26.jpg', span: 'col-span-1 row-span-1' },
    { src: 'untitled-2.jpg', span: 'col-span-1 row-span-1' },
    { src: 'untitled-14.jpg', span: 'col-span-1 row-span-1' },
  ];

  const industries = {
    artists: {
      id: 'artists',
      title: 'Artists',
      icon: <Music className="w-5 h-5" />,
      tagline: 'Visuals That Match Your Sound.',
      description: 'We turn your tracks into cinematic experiences. From high-budget music videos to viral content, we capture your energy.',
      accent: 'from-cyan-500 to-blue-600',
      glow: 'bg-cyan-500/20',
      packages: [
        { name: 'Social Spotlight', price: '150', features: ['4K Vertical Capture', 'Fast 48hr Turnaround'], highlight: true }
      ]
    },
    realestate: {
      id: 'realestate',
      title: 'Real Estate',
      icon: <Home className="w-5 h-5" />,
      tagline: 'Visuals That Close The Deal.',
      description: 'Premium cinematography and drone coverage to give your listings the competitive edge.',
      accent: 'from-blue-400 to-cyan-500',
      glow: 'bg-blue-500/20',
      packages: [
        { name: 'Standard Listing', price: '275', features: ['Edited Photos', 'High-Res Digital Files'], highlight: true }
      ]
    },
    insurance: {
      id: 'insurance',
      title: 'Insurance',
      icon: <ShieldCheck className="w-5 h-5" />,
      tagline: 'Build Trust Through Video.',
      description: 'We help agents build authority and trust through educational content and professional headshots.',
      accent: 'from-cyan-600 to-black',
      glow: 'bg-cyan-800/20',
      packages: [
        { name: 'Professional Agent Kit', price: '450', features: ['Brand Intro Video', '3 Retouched Headshots'], highlight: true }
      ]
    },
    smallbusiness: {
      id: 'smallbusiness',
      title: 'Business',
      icon: <Briefcase className="w-5 h-5" />,
      tagline: 'Your Growth, Captured.',
      description: 'Act as your outsourced media department, creating a consistent stream of professional assets.',
      accent: 'from-cyan-400 to-blue-500',
      glow: 'bg-cyan-400/20',
      packages: [
        { name: 'Promo Trailer', price: '225', features: ['4K Single Location', 'Sound Design'], highlight: true }
      ]
    }
  };

  const current = industries[activeTab];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500 overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <TrillWaveLogo className="w-10 h-10" />
            <span className="text-2xl font-black italic uppercase">Trill <span className="text-cyan-400">Wave</span></span>
          </div>
          <div className="hidden md:flex bg-white/5 p-1 rounded-full border border-white/10">
            {Object.values(industries).map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`px-4 py-2 rounded-full text-[10px] font-black transition-all uppercase tracking-widest ${
                  activeTab === ind.id ? 'bg-cyan-500 text-black' : 'text-white/40 hover:text-white'
                }`}
              >
                {ind.title}
              </button>
            ))}
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hidden sm:block">
            Book Now
          </button>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 min-h-[95vh] flex items-center">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${current.glow} blur-[150px] rounded-full -z-10 animate-pulse transition-all duration-1000`}></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-cyan-400">{current.title} Division</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black uppercase italic leading-tight mb-8">
              {current.tagline}
            </h1>
            <p className="text-lg text-white/60 mb-8 max-w-xl leading-relaxed">
              {current.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-cyan-500 text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center space-x-2">
                <span>View Portfolio</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="border border-white/20 bg-white/5 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs">
                Package Rates
              </button>
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-[4/5] bg-zinc-900 border border-white/10 rounded-[2.5rem] overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl z-20">
                <p className="text-[10px] uppercase font-black tracking-[0.3em] text-cyan-400 mb-1">Featured Work</p>
                <p className="text-xl font-black italic tracking-tighter uppercase">Visual Excellence</p>
              </div>
              <div className="w-full h-full flex items-center justify-center text-white/20">
                <Film className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {Object.values(industries).map((ind) => (
              <div key={ind.id} className="p-8 rounded-3xl border border-white/5 bg-black/40 hover:border-cyan-500/30 transition-all group cursor-pointer" onClick={() => setActiveTab(ind.id)}>
                <div className="p-3 bg-white/5 rounded-xl w-fit mb-6 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                  {ind.icon}
                </div>
                <h3 className="text-xl font-black uppercase italic mb-2">{ind.title}</h3>
                <p className="text-xs text-white/40 uppercase tracking-widest leading-loose">Specialized visual solutions for professionals.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-white/10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-3">
            <TrillWaveLogo className="w-8 h-8" />
            <span className="text-xl font-black italic uppercase">Trill <span className="text-cyan-400">Wave</span></span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">© 2024 Trill Wave Media Group</p>
          <div className="flex space-x-6 text-white/40">
            <Instagram className="w-5 h-5 hover:text-cyan-400 transition-colors cursor-pointer" />
            <Video className="w-5 h-5 hover:text-cyan-400 transition-colors cursor-pointer" />
            <Camera className="w-5 h-5 hover:text-cyan-400 transition-colors cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
