import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white border border-border rounded-2xl p-8 flex flex-col hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-display font-bold text-primary mb-1">{service.name}</h3>
      <p className="text-accent font-display font-bold text-lg mb-4">{service.price}</p>
      <p className="text-body text-sm leading-relaxed flex-1">{service.shortDesc}</p>
      <Link
        to="/services"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-primary transition-colors"
      >
        Full details <ArrowRight size={14} />
      </Link>
    </div>
  );
}
