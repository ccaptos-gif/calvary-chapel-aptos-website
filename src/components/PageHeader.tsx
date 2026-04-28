interface PageHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  image?: string
}

export function PageHeader({ eyebrow, title, subtitle, image = '/images/img-01.jpg' }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-ocean-900 text-white">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/65 via-ocean-900/55 to-ocean-900/85" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28 text-center">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.32em] text-sand-200">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 font-display text-5xl md:text-6xl text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
