import { ProjectCard } from '@/components/ProjectCard';

export default function ProjectsPage() {
  const projects = [
    {
      title: "RegPort",
      description: "Sanctions and PEP screening Portal with Adverse media Screening and AML reporting capabilities. A comprehensive regulatory compliance platform designed for financial institutions and compliance teams.",
      tags: ['Compliance', 'RegTech', 'AML', 'Screening'],
      href: "https://regport.regtech365.com/"
    },
    {
      title: "Aegis Monitor",
      description: "An open-source framework for evaluating, comparing, and governing Large Language Model systems. Provides cost-aware evaluation, performance monitoring, and governance mechanisms for production LLM deployments.",
      tags: ['LLM', 'AI', 'Open Source', 'Python'],
      href: "https://pypi.org/project/aegis-monitor"
    }
  ];

  return (
    <div className="container-custom py-24 min-h-[80vh]">
      <div className="mb-16 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Engineering Excellence.</h1>
        <p className="text-lg text-content-secondary leading-relaxed">
          A showcase of systems I've architected and built. From globally distributed data pipelines to real-time AI inference engines, these projects prioritize scalability, resilience, and business impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
