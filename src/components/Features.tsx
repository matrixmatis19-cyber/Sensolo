import { Upload, CreditCard, Globe, BarChart3, Lock, Users, Headphones, Zap } from 'lucide-react';

const features = [
  {
    icon: Upload,
    title: 'Téléchargement simplifié',
    description:
      "Uploadez n'importe quel fichier digital : PDF, vidéos, templates, logiciels, musiques.",
    iconColor: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: CreditCard,
    title: 'Paiements intégrés',
    description:
      "Acceptez les cartes, Apple Pay, Google Pay et plus encore. L'argent arrive directement sur votre compte.",
    iconColor: 'text-fuchsia-600',
    bg: 'bg-fuchsia-50',
  },
  {
    icon: Globe,
    title: 'Boutique personnalisée',
    description:
      'Obtenez une page de vente magnifique avec votre branding. Partagez le lien partout.',
    iconColor: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: BarChart3,
    title: 'Analytics avancées',
    description:
      'Suivez vos ventes, vos taux de conversion et vos revenus en temps réel.',
    iconColor: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Lock,
    title: 'Livraison sécurisée',
    description:
      'Protection contre le piratage, liens sécurisés et gestion des accès automatique.',
    iconColor: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Users,
    title: "Programme d'affiliation",
    description:
      'Faites promoter vos produits par des affiliés et payez-leurs automatiquement.',
    iconColor: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    icon: Headphones,
    title: 'Support premium',
    description:
      'Une équipe disponible 7j/7 pour vous aider à développer votre business digital.',
    iconColor: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: Zap,
    title: 'Automatisations',
    description:
      'Connectez Sensollo à vos outils préférés avec notre API et nos intégrations.',
    iconColor: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">
            Fonctionnalités
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Tout ce qu'il faut pour vendre en ligne
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Une suite complète d'outils conçue pour les créateurs, entrepreneurs et
            entreprises digitales.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-violet-900/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.bg} mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
