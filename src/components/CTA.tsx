import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 sm:px-16 sm:py-20 text-center">
          <div className="absolute inset-0 -z-0">
            <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-violet-600/30 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-fuchsia-600/30 blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6 border border-white/10">
              <Sparkles className="h-4 w-4 text-violet-300" />
              <span className="text-sm font-medium text-violet-100">
                Commencez gratuitement aujourd'hui
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Prêt à vendre vos produits digitaux ?
            </h2>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
              Rejoignez Sensollo et créez votre première boutique en ligne en
              moins de 5 minutes. Sans carte bancaire.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 hover:bg-slate-100 transition-all"
              >
                Créer mon compte gratuit
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
              >
                Voir les tarifs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
