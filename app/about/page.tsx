import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container-custom py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Profile Side */}
        <div className="flex flex-col gap-8 sticky top-32">
          <div className="aspect-square w-full max-w-md rounded-2xl overflow-hidden bg-background-secondary border border-border flex items-center justify-center relative">
            {/* Profile Image */}
            <Image
              src="https://drive.google.com/uc?export=view&id=15jgTralfYrPdyZdQ-QgdDuPZoR-nMPv3"
              alt="Adewale Adetoro"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-hero-gradient opacity-10 mix-blend-screen" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">About Me</h1>
            <p className="text-lg text-content-secondary leading-relaxed max-w-md">
              I am a results-driven engineer specializing in the intersection of Artificial Intelligence, Data Engineering, and Backend systems. My career is built on delivering high-performance, robust, and scalable solutions for complex enterprise problems.
            </p>
          </div>
        </div>

        {/* Right: Bio and Timeline */}
        <div className="flex flex-col gap-16">
          <section>
            <h2 className="text-2xl font-bold mb-6">Professional Philosophy</h2>
            <div className="space-y-4 text-content-secondary leading-relaxed">
              <p>
                In a rapidly evolving tech landscape, depth and resilience matter more than shiny new tools. My approach centers on deeply understanding the problem domain to build architectures that are not just functioning, but maintainable, observable, and highly performant.
              </p>
              <p>
                I am passionate about systems that process massive throughput with minimal latency, deploying LLMs securely in enterprise environments, and writing technical literature that bridges the gap between theoretical computer science and pragmatic software engineering.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
            <div className="relative border-l border-border ml-3 flex flex-col gap-8">

              <div className="relative pl-8">
                <div className="absolute w-3 h-3 bg-brand-primary rounded-full left-[-6.5px] top-1.5 border-4 border-background-primary box-content" />
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-content-primary">Senior Software Engineer</h3>
                      <p className="text-sm text-brand-primary font-semibold">RegTech365</p>
                    </div>
                    <span className="text-xs font-mono text-content-secondary whitespace-nowrap">01/2025 – Present</span>
                  </div>
                  <p className="text-xs text-content-secondary">Lagos</p>
                  <ul className="text-sm text-content-secondary space-y-1 mt-3 list-disc list-inside">
                    <li>Architected and deployed high-performance REST APIs using FastAPI, supporting 10k+ daily API requests with average response times under 120ms.</li>
                    <li>Optimized PostgreSQL and MongoDB queries, reducing heavy query execution time by up to 65% and significantly improving API throughput.</li>
                    <li>Designed and maintained API integrations with external services, enabling real-time data synchronization between internal platforms and third-party systems.</li>
                    <li>Implemented asynchronous task processing and background jobs using FastAPI async capabilities, reducing blocking operations and improving request performance.</li>
                    <li>Led backend architecture decisions and established clean API design patterns, improving code maintainability across engineering teams.</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute w-3 h-3 bg-content-secondary rounded-full left-[-6.5px] top-1.5 border-4 border-background-primary box-content" />
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-content-primary">Senior Software Engineer</h3>
                      <p className="text-sm text-brand-primary font-semibold">OPEX Consulting Ltd</p>
                    </div>
                    <span className="text-xs font-mono text-content-secondary whitespace-nowrap">09/2023 – 12/2024</span>
                  </div>
                  <p className="text-xs text-content-secondary">Lagos, Nigeria</p>
                  <ul className="text-sm text-content-secondary space-y-1 mt-3 list-disc list-inside">
                    <li>Architected and implemented Node.js and TypeScript backend services supporting high-traffic applications.</li>
                    <li>Designed clean REST APIs used by internal tools, web platforms, and automation workflows.</li>
                    <li>Optimized SQL and NoSQL database queries, improving performance for large-scale datasets.</li>
                    <li>Deployed and managed cloud infrastructure using AWS, ensuring high availability and reliability.</li>
                    <li>Built integrations across internal systems to automate operational workflows and reduce manual processes.</li>
                    <li>Collaborated with product and frontend teams to translate complex business requirements into scalable system architecture.</li>
                    <li>Maintained strong focus on clean code, maintainability, and production reliability.</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute w-3 h-3 bg-content-secondary rounded-full left-[-6.5px] top-1.5 border-4 border-background-primary box-content" />
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-content-primary">Software Engineer</h3>
                      <p className="text-sm text-brand-primary font-semibold">Christ Ekklesia Institute</p>
                    </div>
                    <span className="text-xs font-mono text-content-secondary whitespace-nowrap">2022 – 2023</span>
                  </div>
                  <p className="text-xs text-content-secondary">Ibadan, Nigeria</p>
                  <ul className="text-sm text-content-secondary space-y-1 mt-3 list-disc list-inside">
                    <li>Design, code, test, and maintain software applications or systems.</li>
                    <li>Work closely with other developers, designers, and stakeholders to understand requirements and develop solutions.</li>
                    <li>Identify and troubleshoot software issues, debugging and resolving technical problems as they arise.</li>
                    <li>Create and maintain technical documentation, including design documents, user manuals, and API documentation.</li>
                    <li>Assist in the deployment and configuration of software applications in development, testing, and production environments.</li>
                    <li>Provide feedback on product features, usability, and performance to improve the overall user experience.</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute w-3 h-3 bg-content-secondary rounded-full left-[-6.5px] top-1.5 border-4 border-background-primary box-content" />
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-content-primary">React Developer / Software Engineering Instructor</h3>
                      <p className="text-sm text-brand-primary font-semibold">iYouth Resource Center</p>
                    </div>
                    <span className="text-xs font-mono text-content-secondary whitespace-nowrap">2020 – 2022</span>
                  </div>
                  <p className="text-xs text-content-secondary">Osogbo, Nigeria</p>
                  <ul className="text-sm text-content-secondary space-y-1 mt-3 list-disc list-inside">
                    <li>Designed and implemented RESTful services using Node.js, TypeScript, and React for scalable web applications.</li>
                    <li>Mentored over 150 students in software engineering, focusing on modern development practices.</li>
                    <li>Applied Agile methodologies to optimize development processes and improve project delivery timelines.</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute w-3 h-3 bg-content-secondary rounded-full left-[-6.5px] top-1.5 border-4 border-background-primary box-content" />
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-content-primary">Software Engineer</h3>
                      <p className="text-sm text-brand-primary font-semibold">Freelance</p>
                    </div>
                    <span className="text-xs font-mono text-content-secondary whitespace-nowrap">2018 – 2021</span>
                  </div>
                  <p className="text-xs text-content-secondary">Osogbo, Nigeria</p>
                  <ul className="text-sm text-content-secondary space-y-1 mt-3 list-disc list-inside">
                    <li>Built and deployed backend solutions for various clients, leveraging Python, Django, and FastAPI.</li>
                    <li>Developed APIs for web and mobile applications, ensuring seamless integration with frontend technologies.</li>
                    <li>Designed database schemas and optimized queries for performance and scalability.</li>
                    <li>Provided technical guidance and mentorship to junior developers.</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute w-3 h-3 bg-content-secondary rounded-full left-[-6.5px] top-1.5 border-4 border-background-primary box-content" />
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-content-primary">Web Developer</h3>
                      <p className="text-sm text-brand-primary font-semibold">Gafistal Concept</p>
                    </div>
                    <span className="text-xs font-mono text-content-secondary whitespace-nowrap">2017 – 2020</span>
                  </div>
                  <p className="text-xs text-content-secondary">Lagos, Nigeria</p>
                  <ul className="text-sm text-content-secondary space-y-1 mt-3 list-disc list-inside">
                    <li>Planned website development, converting mockups into usable web presence using HTML, JavaScript, AJAX, and JSON coding.</li>
                    <li>Validated third-party code to comply with internal standards and technical requirements.</li>
                    <li>Adhered to SEO best practices while designing sites.</li>
                    <li>Provided security maintenance and patching on the website interface to ensure viability after launch.</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
