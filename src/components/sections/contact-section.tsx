import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"
import { MagneticButton } from "@/components/magnetic-button"

const questions = [
  {
    id: 1,
    text: "Какая форма чувственного познания воспроизводит образ предмета без его непосредственного воздействия?",
    options: ["Ощущение", "Восприятие", "Представление", "Понятие"],
    correct: 2,
    topic: "Тема 1.4",
  },
  {
    id: 2,
    text: "Выберите верное суждение об истине:",
    options: [
      "Абсолютная истина может быть опровергнута со временем",
      "Относительная истина — ограниченно верное знание",
      "Субъективная истина не зависит от человека",
      "Практика не является критерием истины",
    ],
    correct: 1,
    topic: "Тема 1.5",
  },
  {
    id: 3,
    text: "Что является основным критерием истины?",
    options: ["Авторитет учёных", "Практика", "Соответствие традиции", "Красота теории"],
    correct: 1,
    topic: "Тема 1.5",
  },
  {
    id: 4,
    text: "Какая форма рационального познания представляет собой мысль, утверждающую или отрицающую что-либо об объекте?",
    options: ["Понятие", "Суждение", "Умозаключение", "Ощущение"],
    correct: 1,
    topic: "Тема 1.4",
  },
]

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [checked, setChecked] = useState(false)

  const handleAnswer = (qId: number, optIndex: number) => {
    if (checked) return
    setAnswers((prev) => ({ ...prev, [qId]: optIndex }))
  }

  const handleCheck = () => {
    if (Object.keys(answers).length < questions.length) return
    setChecked(true)
  }

  const handleReset = () => {
    setAnswers({})
    setChecked(false)
  }

  const score = checked ? questions.filter((q) => answers[q.id] === q.correct).length : 0

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-12 lg:gap-20">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-6xl lg:text-7xl">
                Практика
                <br />
                ЕГЭ
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-sm">/ Мини-тест по темам 1.4 и 1.5</p>
            </div>

            <div
              className={`space-y-4 transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: "250ms" }}
            >
              <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
                Ответьте на все вопросы и проверьте свои знания по теории познания.
              </p>

              {checked && (
                <div className="rounded-lg border border-foreground/20 bg-foreground/10 p-4 backdrop-blur-sm">
                  <p className="font-mono text-xs text-foreground/60 mb-1">Результат</p>
                  <p className="text-3xl font-light text-foreground">
                    {score} / {questions.length}
                  </p>
                  <p className="text-xs text-foreground/60 mt-1">
                    {score === questions.length
                      ? "Отлично! Все верно!"
                      : score >= questions.length / 2
                      ? "Хороший результат, повтори материал"
                      : "Стоит ещё раз изучить теорию"}
                  </p>
                </div>
              )}

              <div className="flex gap-3 pt-2">
                {!checked ? (
                  <MagneticButton
                    variant="primary"
                    size="lg"
                    onClick={handleCheck}
                  >
                    Проверить
                  </MagneticButton>
                ) : (
                  <MagneticButton variant="secondary" size="lg" onClick={handleReset}>
                    Пройти снова
                  </MagneticButton>
                )}
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col justify-center space-y-4 transition-all duration-700 overflow-y-auto max-h-[70vh] md:max-h-none ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {questions.map((q, qi) => (
              <div
                key={q.id}
                className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                style={{ transitionDelay: `${300 + qi * 120}ms` }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-mono text-xs text-foreground/40">{q.topic}</span>
                  <span className="font-mono text-xs text-foreground/30">· Вопрос {q.id}</span>
                </div>
                <p className="mb-2 text-sm text-foreground/90 leading-relaxed md:text-base">{q.text}</p>
                <div className="space-y-1.5">
                  {q.options.map((opt, oi) => {
                    const isSelected = answers[q.id] === oi
                    const isCorrect = checked && oi === q.correct
                    const isWrong = checked && isSelected && oi !== q.correct

                    return (
                      <button
                        key={oi}
                        onClick={() => handleAnswer(q.id, oi)}
                        className={`w-full text-left rounded border px-3 py-1.5 text-xs transition-all duration-200 md:text-sm
                          ${isCorrect ? "border-green-400/60 bg-green-400/10 text-green-300" : ""}
                          ${isWrong ? "border-red-400/60 bg-red-400/10 text-red-300" : ""}
                          ${!checked && isSelected ? "border-foreground/50 bg-foreground/15 text-foreground" : ""}
                          ${!checked && !isSelected ? "border-foreground/15 bg-foreground/5 text-foreground/70 hover:border-foreground/30 hover:bg-foreground/10" : ""}
                          ${checked && !isCorrect && !isWrong ? "border-foreground/10 text-foreground/40" : ""}
                        `}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
