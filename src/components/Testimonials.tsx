import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Marie L.',
    role: 'Créatrice de contenus',
    content:
      "J'ai vendu mon premier ebook en moins d'une heure avec Sensollo. L'interface est incroyablement simple et les paiements arrivent instantanément.",
    avatar: 'ML',
  },
  {
    name: 'Thomas B.',
    role: 'Formateur en ligne',
    content:
      "Sensollo a transformé mon business. Mes cours sont maintenant accessibles partout dans le monde et le programme d'affiliation me fait gagner plus chaque mois.",
    avatar: 'TB',
  },
  {
    name: 'Sarah K.',
    role: 'Designer indépendante',
    content:
      "Je vends mes templates Notion et Figma sans avoir à coder quoi que ce soit. Le support client est aussi excellent.",
    avatar: 'SK',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">
            Témoignages
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Rejoints par des milliers de créateurs
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Découvrez comment Sensollo aide ses utilisateurs à vendre plus.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-2xl bg-slate-50 p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-violet-900/5 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-amber-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white text-sm font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
