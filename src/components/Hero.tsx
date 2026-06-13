import { ArrowRight, Play, Sparkles, Zap, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-violet-100/60 via-fuchsia-50/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-orange-100/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/40 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-100 px-4 py-1.5 mb-6">
              <Sparkles className="h-4 w-4 text-violet-600" />
              <span className="text-sm font-medium text-violet-700">
                Nouveau : paiements instantanés dans 135+ pays
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Vendez vos produits{' '}
              <span className="gradient-text">digitaux</span> en quelques clics
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Sensollo vous permet de créer votre boutique en ligne, de vendre vos ebooks,
              cours, templates et logiciels — sans coder, sans site web, sans complication.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-4 text-base font-semibold text-white hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20"
              >
                Démarrer gratuitement
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-white border border-slate-200 px-7 py-4 text-base font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 group-hover:bg-violet-200 transition-colors">
                  <Play className="h-3.5 w-3.5 text-violet-700 fill-current" />
                </div>
                Voir la démo
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-500" />
                <span>Mise en place 5 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-500" />
                <span>Paiements sécurisés</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl bg-white p-2 shadow-2xl shadow-violet-900/10 border border-slate-100">
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-orange-400 shadow-lg animate-float" />
              <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 shadow-lg animate-float" style={{ animationDelay: '1s' }} />
              
              <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-slate-500">Tableau de bord</p>
                    <h3 className="text-2xl font-bold text-slate-900">€12,450.00</h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                    <Sparkles className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>

                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm border border-slate-100"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-100 to-fuchsia-100" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {i === 1 ? 'Ebook Premium' : i === 2 ? 'Masterclass Design' : 'Template Notion'}
                          </p>
                          <p className="text-xs text-slate-500">{i * 12} ventes aujourd'hui</p>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-emerald-600">
                        +€{i * 240}.00
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { label: 'Ventes', value: '1,248' },
                    { label: 'Clients', value: '892' },
                    { label: 'Conversion', value: '4.8%' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl bg-white p-3 text-center border border-slate-100"
                    >
                      <p className="text-lg font-bold text-slate-900">{stat.value}</p>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
