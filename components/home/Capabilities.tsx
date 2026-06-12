const capabilities = [
  {
    title: 'Supply Chain Operations',
    description:
      'End-to-end supply chain design, real-time visibility platforms, and risk management systems for commercial and defense networks.',
  },
  {
    title: 'Warehouse Management',
    description:
      'WMS development, fulfillment optimization, YMS development, and inventory control systems built for high-volume operations.',
  },
  {
    title: 'AI Development',
    description:
      'Intelligent automation, machine learning integration, and AI-powered decision support tailored to operational contexts.',
  },
  {
    title: 'Government Contracting',
    description:
      'Opportunity intelligence, compliance tooling, and bid management systems for GovCon organizations of every size.',
  },
  {
    title: 'Process Automation',
    description:
      'Workflow automation and system integration that eliminates manual handoffs and accelerates operational throughput.',
  },
  {
    title: 'Data Analytics',
    description:
      'Operational dashboards, reporting infrastructure, and business intelligence platforms that turn data into decisions.',
  },
  {
    title: 'Software Development',
    description:
      'Full-stack product development from architecture to deployment — built to scale and maintained for the long term.',
  },
  {
    title: 'Operational Excellence',
    description:
      'Technology strategy and systems design for operations leaders pursuing efficiency, resilience, and competitive advantage.',
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs text-[#555] font-medium uppercase tracking-widest mb-4">What We Do</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight max-w-xl">
            Core Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="p-6 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#2a2a2a] hover:bg-[#0d0d0d] transition-all duration-200"
            >
              {/* Icon accent */}
              <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#222] flex items-center justify-center mb-5" aria-hidden="true">
                <div className="w-2.5 h-2.5 rounded-sm bg-[#3b82f6]/50" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{cap.title}</h3>
              <p className="text-[#777] text-xs leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
