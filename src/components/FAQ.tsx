"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";


interface FAQItemProps {
  question: string;
  answer: string;
  idx: number;
}

function FAQItem({ question, answer, idx }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="group relative rounded-2xl glass-panel p-6 md:p-8 border border-white/5 cursor-pointer overflow-hidden transition-all duration-300 hover:border-white/10"
    >
      {/* Dynamic Visual spotlight backing */}
      <div className="absolute top-0 right-0 w-[160px] h-[160px] bg-accent-orange/5 rounded-full blur-[55px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex justify-between items-center gap-4 relative z-10">
        <div className="flex items-center gap-4.5">
          <span className="font-mono text-[10px] md:text-xs font-bold text-accent-orange bg-accent-orange/10 px-2.5 py-1 rounded">
            0{idx + 1}
          </span>
          <h3 className="text-base md:text-lg lg:text-xl font-clash font-bold tracking-tight text-white group-hover:text-accent-orange transition-colors">
            {question}
          </h3>
        </div>
        <div className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-300 ${isOpen ? "rotate-180 bg-accent-orange border-accent-orange text-white" : ""}`}>
          <ChevronDown className="w-4.5 h-4.5" />
        </div>
      </div>

      {/* Answer Transition Container */}
      <div
        className={`relative z-10 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[300px] mt-6 border-t border-white/5 pt-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-white/45 text-sm md:text-base leading-relaxed tracking-wide font-sans">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const faqs = [
    {
      question: "Who can join the kanpur.dev ecosystem?",
      answer: "Anyone from an ambitious student engineer writing their first scripts to veteran staff engineers looking to co-build core local tools, conduct advanced systems talks, or network with Kanpur's elite talent pool.",
    },
    {
      question: "Are monthly meetups free to attend?",
      answer: "Yes, our monthly developer labs and technical assemblies are 100% free. We are supported by community contributions and premium startup sponsors. RSVP is mandatory since slots are highly capped.",
    },
    {
      question: "How do startups recruit engineering talent from here?",
      answer: "Startups can partner with us to run specialized hackathons, define system bounties, or sponsor assemblies. This provides direct access to developers coding and scaling in real-time.",
    },
    {
      question: "Can I host or lead a developer lab assembly?",
      answer: "Absolutely! If you possess deep technical background in areas like WebGL/Shader models, distributed computing, cloud orchestration, compiler structures, or core frontends, write to us to design a slot.",
    },
  ];
  const filteredFaqs = faqs
  .map((faq, index) => ({
    ...faq,
    originalIndex: index,
  }))
  .filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      id="faq"
      className="relative py-28 md:py-36 bg-background overflow-hidden px-4 md:px-8 z-10 border-t border-white/5"
    >
      <div className="absolute top-[35%] right-[-10%] w-[380px] h-[380px] bg-accent-violet/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[35%] left-[-10%] w-[380px] h-[380px] bg-accent-orange/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10">
        {/* Title Header */}
        <div className="text-center mb-20">
          <span className="font-mono text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-accent-orange to-accent-pink bg-clip-text text-transparent mb-4 block">
            FAQ INDEX
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-clash font-extrabold tracking-tight text-white mb-6">
            Ecosystem Diagnostics
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-base md:text-lg leading-relaxed font-sans">
            Quick parameters detailing how to join, co-build, recruit, or coordinate with the kanpur.dev platform.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="mb-8">
  <input
    type="text"
    placeholder="Search FAQs..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-accent-orange transition-all"
    aria-label="Search FAQs"
  />
</div>
        <div className="flex flex-col gap-5">
          {filteredFaqs.map((faq) => (
  <FAQItem
    key={faq.originalIndex}
    idx={faq.originalIndex}
    question={faq.question}
    answer={faq.answer}
  />
))}
          {filteredFaqs.length === 0 && (
  <div className="text-center py-8 text-white/50">
    No matches found
  </div>
)}
        </div>
      </div>
    </section>
  );
}
