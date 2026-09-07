import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ service }) {
  return (
    <div className="bg-charcoal border border-white/5 rounded-2xl p-8 flex flex-col hover:border-lime/20 transition-colors">
      <h3 className="text-xl font-display font-bold text-white mb-1">{service.name}</h3>
      <p className="text-lime font-display font-bold text-lg mb-4">{service.price}</p>
      <p className="text-steel text-sm leading-relaxed flex-1">{service.shortDesc}</p>
      <Link
        to="/services"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-lime hover:text-white transition-colors"
      >
        Full details <ArrowRight size={14} />
      </Link>
    </div>
  );
}
