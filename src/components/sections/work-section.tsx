import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Познание
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Этапы и формы познавательной деятельности</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Чувственное */}
          <div
            className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-foreground/30" />
              <span className="font-mono text-xs text-foreground/60">01 / Чувственное</span>
            </div>
            <h3 className="mb-3 font-sans text-2xl font-light text-foreground md:text-3xl">Чувственное познание</h3>
            <p className="mb-4 text-sm leading-relaxed text-foreground/70 md:text-base">
              Непосредственный контакт органов чувств с предметом. Воспроизводит внешние стороны и свойства объектов.
            </p>
            <div className="space-y-2">
              {[
                { form: "Ощущение", desc: "Отражение отдельных свойств предмета через органы чувств" },
                { form: "Восприятие", desc: "Целостный чувственный образ предмета или процесса" },
                { form: "Представление", desc: "Обобщённый образ в сознании без прямого воздействия на органы чувств" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`border-l border-foreground/20 pl-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <span className="font-mono text-xs font-medium text-foreground/90">{item.form}</span>
                  <p className="text-xs text-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Рациональное */}
          <div
            className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-foreground/30" />
              <span className="font-mono text-xs text-foreground/60">02 / Рациональное</span>
            </div>
            <h3 className="mb-3 font-sans text-2xl font-light text-foreground md:text-3xl">Рациональное познание</h3>
            <p className="mb-4 text-sm leading-relaxed text-foreground/70 md:text-base">
              Логические операции, опирающиеся на результаты чувственного познания. Выявляет существенные признаки и закономерности.
            </p>
            <div className="space-y-2">
              {[
                { form: "Понятие", desc: "Мысль, фиксирующая общие существенные свойства объекта познания" },
                { form: "Суждение", desc: "Мысль, утверждающая или отрицающая что-либо об объекте" },
                { form: "Умозаключение", desc: "Новое суждение, выводимое логически из нескольких суждений" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`border-l border-foreground/20 pl-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${450 + i * 100}ms` }}
                >
                  <span className="font-mono text-xs font-medium text-foreground/90">{item.form}</span>
                  <p className="text-xs text-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
