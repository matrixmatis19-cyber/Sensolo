import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Pour commencer à vendre',
    price: '0',
    period: 'mois',
    features: [
      '3 produits digitaux',
      'Page de vente personnalisée',
      'Paiements par carte',
      'Support par email',
      'Analytics de base',
    ],
    cta: 'Commencer gratuitement',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'Pour les créateurs actifs',
    price: '19',
    period: 'mois',
    features: [
      'Produits illimités',
      'Boutique personnalisée',
      'Paiements internationaux',
      'Programme affiliation',
      'Analytics avancées',
      'Support prioritaire',
      'API & intégrations',
    ],
    cta: 'Choisir Pro',
    popular: true,
  },
  {
    name: 'Business',
    description: 'Pour les entreprises',
    price: '79',
    period: 'mois',
    features: [
      'Tout le plan Pro',
      'Comptes équipe',
      'Webhooks avancés',
      'Contrats personnalisés',
      'SLA garanti',
      'Manager dédié',
      'Formation incluse',
    ],
    cta: 'Contacter les ventes',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">
            Tarifs
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Des prix simples, sans surprise
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Commencez gratuitement et évoluez selon vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl ${
                plan.popular
                  ? 'bg-slate-900 text-white shadow-xl shadow-violet-900/20 scale-105 md:scale-110'
                  : 'bg-white text-slate-900 border border-slate-100 hover:-translate-y-1'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-1 text-xs font-semibold text-white">
                    Le plus populaire
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p
                  className={`mt-1 text-sm ${
                    plan.popular ? 'text-slate-300' : 'text-slate-500'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-bold">€{plan.price}</span>
                <span
                  className={`text-sm ${
                    plan.popular ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  /{plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.popular ? 'bg-violet-500' : 'bg-violet-100'
                      }`}
                    >
                      <Check
                        className={`h-3 w-3 ${
                          plan.popular ? 'text-white' : 'text-violet-600'
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm ${
                        plan.popular ? 'text-slate-200' : 'text-slate-600'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-full py-3.5 text-sm font-semibold transition-all ${
                  plan.popular
                    ? 'bg-white text-slate-900 hover:bg-slate-100'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
