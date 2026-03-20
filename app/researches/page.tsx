import { ResearchCard } from '@/components/ResearchCard';

export default function ResearchesPage() {
  const researches = [
    {
      title: "Aegis Monitor: A Unified Cost-Aware Evaluation and Governance Framework for Production Large Language Model Systems",
      abstract: "The rapid adoption of Large Language Models (LLMs) across industries has transformed how intelligent systems are built and deployed. Organizations now integrate LLM APIs provided by OpenAI, Anthropic, and Google into customer support platforms, enterprise automation tools, AI copilots, search systems, and decision-support applications. While model capabilities have advanced rapidly, governance and evaluation mechanisms have not kept pace. This project proposes Aegis Monitor, a unified open-source framework for evaluating, monitoring, and governing LLM-based systems in production environments. The framework integrates semantic evaluation, cost analysis, latency monitoring, and regression detection into a single extensible architecture.",
      tags: ['AI', 'LLM', 'Governance', 'Cost Optimization', 'Systems'],
      href: "/researches/aegis-monitor"
    }
  ];

  return (
    <div className="container-custom py-24 min-h-[80vh]">
      <div className="mb-16 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Research & Papers.</h1>
        <p className="text-lg text-content-secondary leading-relaxed">
          Bridging theoretical concepts and pragmatic engineering. My research focuses on optimizing system performance, advancing AI deployment strategies, and solving distributed data challenges.
        </p>
      </div>

      <div className="flex flex-col gap-6 max-w-4xl">
        {researches.map((res) => (
          <ResearchCard key={res.title} {...res} />
        ))}
      </div>
    </div>
  );
}
