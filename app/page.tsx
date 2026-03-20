import { Button } from '@/components/Button';
import { ProjectCard } from '@/components/ProjectCard';
import { ResearchCard } from '@/components/ResearchCard';
import { BookCard } from '@/components/BookCard';
import { Database, Server, BrainCircuit, TerminalSquare, Code2, Network } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* 🚀 Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center pt-10 lg:pt-0 overflow-hidden">
        {/* Background blobs for premium feel */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-primary/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-brand-secondary/20 blur-[120px] pointer-events-none" />

        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start gap-6 max-w-2xl">
            <h1 className="text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-tight">
              Adewale Ezekiel <br />
              <span className="text-transparent bg-clip-text bg-hero-gradient">Adetoro</span>
            </h1>
            <p className="text-xl text-content-secondary font-medium">
              AI Engineer | Data Engineer | Backend Specialist
            </p>
            <p className="text-lg text-content-secondary/80 leading-relaxed max-w-[540px]">
              I build scalable AI systems, resilient data pipelines, and robust backend infrastructure that drive real business impact.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <Button href="/projects" variant="primary">
                View Projects
              </Button>
              <Button href="/contact" variant="outline">
                Download Resume
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-full max-w-[480px] aspect-square">
              {/* Decorative Window / Terminal mock */}
              <div className="absolute inset-0 bg-background-secondary border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                <div className="h-10 bg-[#1F2937]/50 border-b border-border flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-brand-accent/80" />
                </div>
                <div className="p-6 font-mono text-sm text-brand-accent/80 flexflex-col gap-2">
                  <p><span className="text-brand-primary">➜</span> <span className="text-content-secondary">~</span> ./deploy_pipeline.sh</p>
                  <p className="text-content-secondary mt-2">Initializing clusters...</p>
                  <p className="text-content-secondary">Configuring Kafka topics...</p>
                  <p className="text-brand-accent mt-2">✓ System architecture deployed successfully.</p>
                  <p className="text-brand-primary mt-4 animate-pulse">_</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🧠 Tech Stack Section */}
      <section className="py-24 bg-background-secondary/30 border-y border-border">
        <div className="container-custom">
          <h2 className="text-sm font-semibold text-content-secondary tracking-widest uppercase mb-12 text-center">
            Core Engineering Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 justify-items-center opacity-80">
            <div className="flex flex-col items-center gap-3 group">
              <BrainCircuit size={40} className="text-content-secondary group-hover:text-brand-primary transition-colors duration-300" />
              <span className="font-mono text-sm">AI / ML</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <Database size={40} className="text-content-secondary group-hover:text-brand-secondary transition-colors duration-300" />
              <span className="font-mono text-sm">Data Pipes</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <Server size={40} className="text-content-secondary group-hover:text-brand-accent transition-colors duration-300" />
              <span className="font-mono text-sm">Backend</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <Network size={40} className="text-content-secondary group-hover:text-brand-primary transition-colors duration-300" />
              <span className="font-mono text-sm">Kafka</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <TerminalSquare size={40} className="text-content-secondary group-hover:text-brand-secondary transition-colors duration-300" />
              <span className="font-mono text-sm">Python</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <Code2 size={40} className="text-content-secondary group-hover:text-brand-accent transition-colors duration-300" />
              <span className="font-mono text-sm">FastAPI</span>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 Featured Projects */}
      <section className="py-32">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
              <p className="text-content-secondary text-lg">Systems built for scale, speed, and real-world impact.</p>
            </div>
            <Link href="/projects" className="hidden md:flex items-center text-brand-primary font-medium hover:underline">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="RegPort"
              description="Sanctions and PEP screening Portal with Adverse media Screening and AML reporting capabilities. A comprehensive regulatory compliance platform."
              tags={['Compliance', 'RegTech', 'AML', 'Screening']}
              href="https://regport.regtech365.com/"
            />
            <ProjectCard
              title="Aegis Monitor"
              description="An open-source framework for evaluating, comparing, and governing Large Language Model systems with cost-aware evaluation and governance mechanisms."
              tags={['LLM', 'AI', 'Open Source', 'Python']}
              href="https://pypi.org/project/aegis-monitor"
            />
          </div>
        </div>
      </section>

      {/* 🔬 Research Highlights */}
      <section className="py-32 bg-background-secondary/30">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-4">Research & Papers</h2>
              <p className="text-content-secondary text-lg">Advancing methodologies in AI and distributed systems.</p>
            </div>
            <Link href="/researches" className="hidden md:flex items-center text-brand-secondary font-medium hover:underline">
              Read All Research
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResearchCard
              title="Aegis Monitor: A Unified Cost-Aware Evaluation and Governance Framework for Production Large Language Model Systems"
              abstract="A unified open-source framework for evaluating, monitoring, and governing LLM-based systems in production environments. Integrates semantic evaluation, cost analysis, latency monitoring, and regression detection."
              tags={['AI', 'LLM', 'Governance', 'Cost Optimization']}
              href="/researches/aegis-monitor"
            />
          </div>
        </div>
      </section>

      {/* 📚 Books */}
      <section className="py-32">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Books</h2>
            <p className="text-content-secondary text-lg">In-depth guides on modern engineering practices.</p>
          </div>

          <div className="flex overflow-x-auto pb-8 gap-6 snap-x hide-scrollbar">
            <div className="snap-start shrink-0">
              <BookCard
                title="Beginners Guide to Python Programming"
                coverImage="https://images-na.ssl-images-amazon.com/images/P/B0GGJ8B658.01.L.jpg"
                buyLink="https://leanpub.com/comprehensivepythonprogamming"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 📬 CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-5 mix-blend-screen pointer-events-none" />
        <div className="container-custom relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let&apos;s build something impactful.</h2>
          <p className="text-lg text-content-secondary mb-10 max-w-xl">
            Whether you need a robust data pipeline, a scalable backend, or an enterprise AI transformation, I can help.
          </p>
          <Button href="/contact" variant="primary" className="h-14 px-10 text-lg rounded-full">
            Contact Me
          </Button>
        </div>
      </section>
    </div>
  );
}
