import "./App.css";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import React from "react";
import CompactVersion1 from "./components/Version1/CompactVersion1";
import Vibrant from "./components/Version2/Vibrant";
import { Button } from "./components/ui/button";
import { ArrowRight } from "lucide-react";
import GlobalCommandMenu from "./components/GlobalCommandMenu";
import Resume from "./pages/Resume";

function CommandMenuProvider({ children }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      {children}
      <GlobalCommandMenu open={open} setOpen={setOpen} />
      <button
        aria-label="Open command menu"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg bg-black text-white px-4 py-3 hover:bg-gray-800 transition-premium hidden md:flex items-center gap-2"
      >
        <span className="text-sm">Search</span>
        <span className="text-[10px] opacity-80">Ctrl/⌘ K</span>
      </button>
    </>
  );
}

const ChooseDesign = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Choose Your Design
          </h1>
          <p className="text-xl text-slate-600">
            Two scrolls, dynamic content - Select your professional aesthetic
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Version 1 - Minimalist */}
          <div className="bg-white rounded-3xl overflow-hidden border-2 border-slate-200 hover:border-black transition-all duration-300 hover:shadow-2xl group">
            <div className="aspect-video bg-gradient-to-br from-gray-50 to-white p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-black rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"></div>
                <h3 className="text-3xl font-light text-black">Minimalist</h3>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-medium text-black mb-4">Version 1: Bold & Clean</h3>
              <ul className="space-y-3 mb-8 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-2"></span>
                  <span>Monochrome black & white aesthetic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-2"></span>
                  <span>Ultra-light typography with elegance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-2"></span>
                  <span>Only 2 scrolls - Content transitions in place</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-2"></span>
                  <span>Professional & sophisticated feel</span>
                </li>
              </ul>
              <Button 
                onClick={() => navigate('/version1')}
                className="w-full bg-black hover:bg-gray-800 text-white py-6 transition-all duration-300 hover:scale-105"
              >
                View Version 1
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Version 2 - Dynamic */}
          <div className="bg-white rounded-3xl overflow-hidden border-2 border-slate-200 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl group">
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-500 p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl"></div>
                <h3 className="text-3xl font-bold text-white">Dynamic</h3>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Version 2: Vibrant & Modern</h3>
              <ul className="space-y-3 mb-8 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>Blue gradient accents & colorful highlights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>Bold typography with energy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>Only 2 scrolls - Dynamic tab navigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>Confident & approachable vibe</span>
                </li>
              </ul>
              <Button 
                onClick={() => navigate('/version2')}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                View Version 2
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500">
            Compact design with dynamic content - Hero + Tabbed Content (2 scrolls total)
          </p>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <HashRouter>
        <CommandMenuProvider>
          <Routes>
            <Route path="/" element={<ChooseDesign />} />
            <Route path="/version1" element={<CompactVersion1 />} />
            <Route path="/version2" element={<Vibrant />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </CommandMenuProvider>
      </HashRouter>
    </div>
  );
}

export default App;
