import Link from 'next/link';

const productLinks = [
  { label: 'BlueLineOps', href: 'https://github.com/alex-sysdev-dev/BlueLineOps' },
  { label: 'FreelancerOS', href: 'https://github.com/alex-sysdev-dev/freelancer-os' },
  { label: 'ChatterBot', href: 'https://github.com/alex-sysdev-dev/ChatterBot' },
  { label: 'Keystone', href: 'https://github.com/alex-sysdev-dev/keystone' },
  { label: 'DLA Vendor Risk', href: 'https://github.com/alex-sysdev-dev/dla-vendor-risk' },
];

const companyLinks = [
  { label: 'About', href: '/#company' },
  { label: 'Products', href: '/#products' },
  { label: 'Capabilities', href: '/#capabilities' },
  { label: 'Media', href: '/media' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-white font-bold text-xl tracking-tight">
                Axiom<span className="text-[#555]">Ops</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-[#555] leading-relaxed max-w-xs">
              Operations technology for commercial and government sectors. Building software that improves operational decision making at scale.
            </p>
            <a
              href="mailto:xpertmarxman@gmail.com"
              className="inline-block mt-6 text-sm text-[#888] hover:text-white transition-colors"
            >
              xpertmarxman@gmail.com
            </a>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-[#555] font-medium uppercase tracking-widest text-xs mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#888] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-[#555] font-medium uppercase tracking-widest text-xs mb-4">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#888] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[#555]">
            © {new Date().getFullYear()} AxiomOps. All rights reserved.
          </p>
          <p className="text-xs text-[#444]">
            Operations Technology Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
