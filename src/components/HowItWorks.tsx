import { Upload, Share2, Banknote } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    step: '01',
    title: 'Uploadez votre produit',
    description:
      "Créez votre compte en 30 secondes et uploadez votre fichier digital. Nous gérons l'hébergement, la sécurité et la livraison.",
  },
  {
    icon: Share2,
    step: '02',
    title: 'Partagez votre lien',
    description:
      'Recevez une page de vente professionnelle. Partagez-la sur vos réseaux sociaux, emails, ou intégrez-la à votre site.',
  },
  {
    icon: Banknote,
    step: '03',
    title: 'Encaissez vos ventes',
    description:
      "Les clients achètent en toute sécurité. L'argent est transféré sur votre compte automatiquement, sans délai.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">
            Comment ça marche
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Vendez en 3 étapes simples
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Plus besoin de site web compliqué. Sensollo s'occupe de tout.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-200 via-fuchsia-200 to-orange-200 -translate-y-1/2" />

          {steps.map((item) => (
            <div key={item.step} className="relative">
              <div className="relative rounded-2xl bg-slate-50 p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-violet-900/5 transition-all duration-300">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-200 mb-6">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <span className="absolute top-6 right-6 text-5xl font-bold text-slate-100">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
