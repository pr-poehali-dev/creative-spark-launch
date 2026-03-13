import { useReveal } from "@/hooks/use-reveal"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Знание
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Виды знания и научное познание</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-x-16 md:gap-y-8 lg:gap-x-24">
          {[
            {
              title: "Научное знание",
              description: "Рациональное знание, подкреплённое теориями и законами. Объективно, системно, доказательно, воспроизводимо.",
              direction: "top",
            },
            {
              title: "Обыденное знание",
              description: "Базируется на повседневном опыте и здравом смысле. Несистематизировано, не описывается законами.",
              direction: "right",
            },
            {
              title: "Религиозное знание",
              description: "Вера в сверхъестественное. Характеризуется эмоциональным восприятием реальности.",
              direction: "left",
            },
            {
              title: "Художественное знание",
              description: "Формируется сферой искусства. Не стремится быть научным, передаёт мир через образы.",
              direction: "bottom",
            },
            {
              title: "Философское знание",
              description: "Рационально-теоретическое осмысление мира. Ищет предельные основания бытия и познания.",
              direction: "left",
            },
            {
              title: "Паранаучное знание",
              description: "Телекинез, экстрасенсорика и др. Не поддаётся объяснению с позиций современной науки.",
              direction: "bottom",
            },
          ].map((service, i) => (
            <KnowledgeCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function KnowledgeCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-2 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
      </div>
      <h3 className="mb-1 font-sans text-xl font-light text-foreground md:text-2xl">{service.title}</h3>
      <p className="max-w-sm text-xs leading-relaxed text-foreground/70 md:text-sm">{service.description}</p>
    </div>
  )
}
