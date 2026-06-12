const focusAreas = [
  {
    title: 'Supply Chain',
    description: 'End-to-end visibility and optimization across commercial and defense supply chains.',
  },
  {
    title: 'Logistics',
    description: 'Warehouse management and fulfillment operations technology built for high-volume environments.',
  },
  {
    title: 'Government & DOD',
    description: 'Agentic solutions built for the operational demands of government and Department of Defense environments.',
  },
  {
    title: 'AI Solutions',
    description: 'AI-powered automation, intelligent decision support, and workflow augmentation.',
  },
  {
    title: 'Workflow Automation',
    description: 'Process automation that connects teams, eliminates manual work, and improves throughput.',
  },
  {
    title: 'Operations Technology',
    description: 'Software infrastructure for operational excellence at enterprise and government scale.',
  },
];

export default function CompanyOverview() {
  return (
    <section id="company" className="py-24 md:py-32 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Mission */}
          <div>
            <p className="text-xs text-[#555] font-medium uppercase tracking-widest mb-5">About AxiomOps</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
              An Innovation Firm for Operations Technology
            </h2>
            <div className="space-y-5 text-[#888] text-base leading-relaxed">
              <p>
                AxiomOps is a technology firm that designs, builds, and deploys software solutions for the
                most demanding operational environments, from warehouse management systems to defense supply chains to
                government contracting operations.
              </p>
              <p>
                We believe that operational intelligence is the ability to see, understand, and act on what is
                happening across your operation in real time, it is the defining competitive advantage of modern
                organizations.
              </p>
              <p>
                Our products are built for real operational problems, designed to work at scale, and
                held to the standards of both commercial enterprises and government agencies.
              </p>
            </div>
          </div>

          {/* Focus areas grid */}
          <div>
            <p className="text-xs text-[#555] font-medium uppercase tracking-widest mb-5">Focus Areas</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="p-5 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#2a2a2a] hover:bg-[#0d0d0d] transition-all duration-200"
                >
                  <h3 className="text-white font-semibold text-sm mb-1.5">{area.title}</h3>
                  <p className="text-[#555] text-xs leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
