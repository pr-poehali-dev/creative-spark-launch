import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-6xl lg:text-7xl">
                Истина
                <br />
                <span className="text-foreground/40">и её виды</span>
              </h2>
            </div>

            <div
              className={`space-y-4 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-base">
                <span className="font-medium text-foreground">Истина</span> — знание, соответствующее свойствам
                познаваемого предмета; адекватное отражение действительности.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  {
                    label: "Объективная истина",
                    desc: "Содержание знания определяется самим предметом, не зависит от пристрастий человека.",
                    example: "Золото — это металл",
                  },
                  {
                    label: "Абсолютная истина",
                    desc: "Полное, исчерпывающее знание, которое не может быть опровергнуто.",
                    example: "В полночь темнее, чем в полдень",
                  },
                  {
                    label: "Относительная истина",
                    desc: "Ограниченно верное знание, которое с развитием науки может измениться.",
                    example: "При +12 °C бывает холодно",
                  },
                  {
                    label: "Субъективная истина",
                    desc: "Зависит от восприятия субъекта, его мировоззрения и установок.",
                    example: "Это лучший кофе в мире",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`border-l border-foreground/20 pl-3 transition-all duration-700 ${
                      isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${350 + i * 120}ms` }}
                  >
                    <p className="font-mono text-xs font-medium text-foreground/90">{item.label}</p>
                    <p className="text-xs text-foreground/60 leading-relaxed">{item.desc}</p>
                    <p className="text-xs text-foreground/40 italic">Пример: {item.example}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6 md:space-y-10">
            <div
              className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="mb-4 font-mono text-xs text-foreground/60 uppercase tracking-widest">Критерии истины</p>
              <div className="space-y-3">
                {[
                  { value: "Практика", label: "Основной критерий", sublabel: "Целенаправленная материальная деятельность", direction: "right" },
                  { value: "Логика", label: "Соответствие законам", sublabel: "Непротиворечивость суждений", direction: "left" },
                  { value: "Наука", label: "Ранее открытые законы", sublabel: "Встроенность в научную картину мира", direction: "right" },
                ].map((stat, i) => {
                  const getRevealClass = () => {
                    if (!isVisible) {
                      return stat.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
                    }
                    return "translate-x-0 opacity-100"
                  }

                  return (
                    <div
                      key={i}
                      className={`flex items-baseline gap-4 border-l border-foreground/30 pl-4 transition-all duration-700 md:gap-6 md:pl-6 ${getRevealClass()}`}
                      style={{ transitionDelay: `${400 + i * 150}ms` }}
                    >
                      <div className="text-2xl font-light text-foreground md:text-4xl">{stat.value}</div>
                      <div>
                        <div className="font-sans text-sm font-light text-foreground md:text-base">{stat.label}</div>
                        <div className="font-mono text-xs text-foreground/60">{stat.sublabel}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div
              className={`rounded-lg border border-foreground/10 bg-foreground/5 p-4 backdrop-blur-sm transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "850ms" }}
            >
              <p className="font-mono text-xs text-foreground/50 mb-1">Противоположности истины</p>
              <p className="text-xs text-foreground/80 leading-relaxed">
                <span className="text-foreground font-medium">Заблуждение</span> — ошибочно принимаемое за истину.{" "}
                <span className="text-foreground font-medium">Ложь</span> — сознательное искажение свойств объекта.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 md:mt-12 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "950ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(4)}>
            Задания ЕГЭ
          </MagneticButton>
          <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(1)}>
            К познанию
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
