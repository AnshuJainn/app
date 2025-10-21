import React from 'react';
import { portfolioData } from '../mockData';

const Resume = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 print:p-0">
      <div className="print:hidden text-center mb-6">
        <h1 className="text-3xl font-bold">{portfolioData.name} — {portfolioData.title}</h1>
        <p className="text-slate-600">{portfolioData.email} • {portfolioData.linkedin} • {portfolioData.github}</p>
        <p className="text-slate-500 mt-2">Use browser Print to save as PDF</p>
      </div>

      <div className="hidden print:block">
        <h1 className="text-xl font-bold">{portfolioData.name}</h1>
        <p className="text-sm">{portfolioData.title}</p>
        <p className="text-sm">{portfolioData.email} • {portfolioData.linkedin} • {portfolioData.github}</p>
      </div>

      <section className="mt-6">
        <h2 className="text-lg font-semibold border-b pb-1">Summary</h2>
        <p className="mt-2 text-sm leading-relaxed">{portfolioData.story.intro}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold border-b pb-1">Skills</h2>
        <ul className="mt-2 grid grid-cols-2 gap-y-1 text-sm">
          {portfolioData.skills.map((s, i) => (
            <li key={i} className="flex justify-between pr-2">
              <span>{s.name}</span>
              <span className="text-slate-500">{s.level}%</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold border-b pb-1">Experience</h2>
        <div className="mt-2 space-y-4">
          {portfolioData.experience.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between text-sm font-semibold">
                <span>{exp.role} — {exp.company}</span>
                <span className="text-slate-500">{exp.period}</span>
              </div>
              <p className="text-sm mt-1">{exp.description}</p>
              <ul className="list-disc ml-5 text-sm mt-1">
                {exp.achievements.map((a, idx) => (
                  <li key={idx}>{a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold border-b pb-1">Projects</h2>
        <div className="mt-2 space-y-3">
          {portfolioData.projects.map((p) => (
            <div key={p.id}>
              <div className="text-sm font-semibold">{p.title}</div>
              <p className="text-sm">{p.description}</p>
              <p className="text-xs text-slate-500">{p.tech.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`@media print { @page { margin: 12mm; } a { text-decoration: none; color: black; } }`}</style>
    </div>
  );
};

export default Resume;
