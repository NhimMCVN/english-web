'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function MultipleChoiceTestPage() {
  const searchParams = useSearchParams()
  const topic = searchParams.get('topic') || 'Environment'
  const [currentQuestion, setCurrentQuestion] = useState(5)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const totalQuestions = 20

  const question = {
    word: 'Serendipity',
    pronunciation: '/ˌser.ənˈdɪp.ə.ti/',
    options: [
      { id: 'A', text: 'Sự nỗ lực không ngừng nghỉ', correct: false },
      { id: 'B', text: 'Sự tình cờ tìm thấy điều may mắn', correct: true },
      { id: 'C', text: 'Cảm giác bình yên trong tâm hồn', correct: false },
      { id: 'D', text: 'Một loại cây nhiệt đới', correct: false },
    ],
  }

  const handleAnswerSelect = (optionId: string) => {
    if (showResult) return
    setSelectedAnswer(optionId)
    setShowResult(true)
  }

  const progress = (currentQuestion / totalQuestions) * 100

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden min-h-screen flex flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-border-dark px-4 sm:px-10 py-3 bg-background-dark/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4 text-white">
          <Link href="/dashboard" className="text-text-secondary hover:text-white transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            Bài kiểm tra trắc nghiệm
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <button
            aria-label="Settings"
            className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-border-dark text-white hover:bg-[#324467] transition-colors"
          >
            <span className="material-symbols-outlined">settings</span>
          </button>
          <Link
            href="/dashboard"
            aria-label="Close"
            className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-border-dark text-white hover:bg-[#324467] transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-start py-8 px-4 w-full max-w-[1200px] mx-auto gap-8">
        <div className="w-full max-w-[640px] flex flex-col gap-4">
          <div className="flex flex-wrap gap-2 items-center justify-between text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Link href="/dashboard" className="text-text-secondary font-medium hover:text-primary transition-colors">
                Gói IELTS Basic
              </Link>
              <span className="text-text-secondary">/</span>
              <span className="text-white font-medium">Topic: {topic}</span>
            </div>
            <div className="flex items-center gap-1 text-text-secondary">
              <span className="material-symbols-outlined text-[18px]">timer</span>
              <span>04:25</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-6 justify-between items-end">
              <p className="text-white text-sm font-medium">Tiến độ làm bài</p>
              <p className="text-text-secondary text-xs font-normal">
                Câu {currentQuestion} / {totalQuestions}
              </p>
            </div>
            <div className="rounded-full bg-[#324467] h-2 w-full overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[640px] flex flex-col gap-6">
          <div className="w-full bg-card-dark rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.3)] border border-border-dark flex flex-col items-center justify-center p-8 md:p-12 gap-6 min-h-[240px]">
            <div className="size-16 mb-2 rounded-full bg-gradient-to-br from-[#2b6cee]/20 to-[#2b6cee]/5 flex items-center justify-center border border-[#2b6cee]/20">
              <span className="material-symbols-outlined text-[#2b6cee] text-3xl">quiz</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="text-text-secondary text-base italic font-normal">
                Chọn nghĩa đúng của từ:
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">{question.word}</h1>
              <p className="text-text-secondary text-lg font-light">{question.pronunciation}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {question.options.map((option) => {
              const isSelected = selectedAnswer === option.id
              const isCorrect = option.correct
              const showCorrect = showResult && isCorrect
              const showIncorrect = showResult && isSelected && !isCorrect

              return (
                <button
                  key={option.id}
                  onClick={() => handleAnswerSelect(option.id)}
                  disabled={showResult}
                  className={`relative group w-full p-4 sm:p-5 rounded-xl text-left transition-all duration-200 flex items-center justify-between ${
                    showCorrect
                      ? 'bg-green-500/10 border-2 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.2)]'
                      : showIncorrect
                      ? 'bg-red-500/10 border-2 border-red-500'
                      : isSelected
                      ? 'bg-[#1e2a40] border-2 border-primary'
                      : 'bg-card-dark border-2 border-border-dark hover:border-primary/50 hover:bg-[#1e2a40]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex items-center justify-center size-8 min-w-[32px] rounded-lg text-sm font-semibold transition-colors ${
                        showCorrect
                          ? 'bg-green-500 text-white'
                          : showIncorrect
                          ? 'bg-red-500 text-white'
                          : isSelected
                          ? 'bg-primary text-white'
                          : 'bg-[#232f48] text-text-secondary group-hover:bg-primary group-hover:text-white'
                      }`}
                    >
                      {option.id}
                    </span>
                    <span className="text-white font-medium text-sm sm:text-base">{option.text}</span>
                  </div>
                  {showCorrect && (
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                  )}
                  {showIncorrect && <span className="material-symbols-outlined text-red-500">cancel</span>}
                </button>
              )
            })}
          </div>
          <div className="flex items-center justify-between w-full pt-4">
            <button
              onClick={() => setCurrentQuestion(Math.max(1, currentQuestion - 1))}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">arrow_back</span>
              <span className="font-medium text-sm">Quay lại</span>
            </button>
            <button
              onClick={() => {
                if (currentQuestion < totalQuestions) {
                  setCurrentQuestion(currentQuestion + 1)
                  setSelectedAnswer(null)
                  setShowResult(false)
                }
              }}
              disabled={!showResult || currentQuestion >= totalQuestions}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary hover:bg-blue-600 text-white shadow-lg shadow-primary/25 transition-all hover:translate-y-[-1px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="font-medium text-sm">
                {currentQuestion >= totalQuestions ? 'Hoàn thành' : 'Câu tiếp theo'}
              </span>
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 opacity-40 hover:opacity-100 transition-opacity duration-300 mt-4">
          <div className="flex items-center gap-2">
            <kbd className="hidden sm:inline-flex items-center justify-center h-6 min-w-[24px] px-1.5 rounded bg-[#232f48] border border-[#324467] text-xs font-sans text-gray-300">
              1-4
            </kbd>
            <span className="text-xs text-gray-400">Chọn đáp án</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="hidden sm:inline-flex items-center justify-center h-6 min-w-[24px] px-1.5 rounded bg-[#232f48] border border-[#324467] text-xs font-sans text-gray-300">
              Enter
            </kbd>
            <span className="text-xs text-gray-400">Tiếp tục</span>
          </div>
        </div>
      </main>
    </div>
  )
}

