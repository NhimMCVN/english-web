'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function WritingTestPage() {
  const searchParams = useSearchParams()
  const topic = searchParams.get('topic') || 'Environment'
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const questions = [
    {
      meaning: 'Sự tình cờ tìm thấy điều may mắn',
      pronunciation: '/ˌser.ənˈdɪp.ə.ti/',
      correct: 'serendipity',
      hint: 'Bắt đầu bằng "ser..."',
    },
    {
      meaning: 'Sự ô nhiễm, làm bẩn',
      pronunciation: '/kənˌtaməˈnāSH(ə)n/',
      correct: 'contamination',
      hint: 'Bắt đầu bằng "cont..."',
    },
    {
      meaning: 'Có thể tái tạo, phục hồi',
      pronunciation: '/rəˈn(y)o͞oəb(ə)l/',
      correct: 'renewable',
      hint: 'Bắt đầu bằng "re..."',
    },
    {
      meaning: 'Đa dạng sinh học',
      pronunciation: '/ˌbīōˌdīˈvərsədē/',
      correct: 'biodiversity',
      hint: 'Bắt đầu bằng "bio..."',
    },
    {
      meaning: 'Sự phát thải, khí thải',
      pronunciation: '/əˈmiSH(ə)n/',
      correct: 'emission',
      hint: 'Bắt đầu bằng "em..."',
    },
  ]

  const currentQ = questions[currentQuestion]
  const totalQuestions = questions.length
  const progress = ((currentQuestion + 1) / totalQuestions) * 100

  const handleSubmit = () => {
    const normalizedAnswer = userAnswer.trim().toLowerCase()
    const normalizedCorrect = currentQ.correct.toLowerCase()
    const correct = normalizedAnswer === normalizedCorrect
    setIsCorrect(correct)
    setShowResult(true)
    if (correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setUserAnswer('')
      setShowResult(false)
      setIsCorrect(false)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !showResult) {
      handleSubmit()
    } else if (e.key === 'Enter' && showResult) {
      handleNext()
    }
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [currentQuestion])

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden min-h-screen flex flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-border-dark px-4 sm:px-10 py-3 bg-background-dark/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4 text-white">
          <Link href="/dashboard" className="text-text-secondary hover:text-white transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            Bài kiểm tra Viết từ
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
              <span className="material-symbols-outlined text-[18px]">edit_note</span>
              <span>
                {currentQuestion + 1} / {totalQuestions}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-6 justify-between items-end">
              <p className="text-white text-sm font-medium">Tiến độ làm bài</p>
              <p className="text-text-secondary text-xs font-normal">
                Điểm: {score} / {currentQuestion + (showResult ? 1 : 0)}
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
              <span className="material-symbols-outlined text-[#2b6cee] text-3xl">edit_note</span>
            </div>
            <div className="flex flex-col items-center gap-4 text-center w-full">
              <span className="text-text-secondary text-base italic font-normal">Gõ lại từ tiếng Anh:</span>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                {currentQ.meaning}
              </h1>
              <p className="text-text-secondary text-lg font-light">{currentQ.pronunciation}</p>
              {!showResult && (
                <div className="w-full max-w-md mt-4">
                  <input
                    ref={inputRef}
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Nhập từ tiếng Anh..."
                    className="w-full px-6 py-4 rounded-xl bg-[#1e2a40] border-2 border-border-dark focus:border-primary focus:outline-none text-white text-xl text-center font-medium transition-all"
                    autoFocus
                  />
                </div>
              )}
              {showResult && (
                <div
                  className={`w-full max-w-md mt-4 p-6 rounded-xl border-2 ${
                    isCorrect
                      ? 'bg-green-500/10 border-green-500'
                      : 'bg-red-500/10 border-red-500'
                  }`}
                >
                  <div className="flex items-center justify-center gap-3 mb-2">
                    {isCorrect ? (
                      <>
                        <span className="material-symbols-outlined text-green-500 text-4xl">check_circle</span>
                        <span className="text-green-500 text-xl font-bold">Đúng!</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-red-500 text-4xl">cancel</span>
                        <span className="text-red-500 text-xl font-bold">Sai!</span>
                      </>
                    )}
                  </div>
                  <div className="text-center">
                    <p className="text-text-secondary text-sm mb-2">Đáp án đúng:</p>
                    <p className="text-white text-2xl font-bold">{currentQ.correct}</p>
                    {!isCorrect && (
                      <p className="text-text-secondary text-sm mt-2">Bạn đã gõ: {userAnswer || '(để trống)'}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between w-full pt-4">
            <button
              onClick={() => {
                if (currentQuestion > 0) {
                  setCurrentQuestion(currentQuestion - 1)
                  setUserAnswer('')
                  setShowResult(false)
                  setIsCorrect(false)
                }
              }}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-xl">arrow_back</span>
              <span className="font-medium text-sm">Quay lại</span>
            </button>
            {!showResult ? (
              <button
                onClick={handleSubmit}
                disabled={!userAnswer.trim()}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary hover:bg-blue-600 text-white shadow-lg shadow-primary/25 transition-all hover:translate-y-[-1px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="font-medium text-sm">Kiểm tra</span>
                <span className="material-symbols-outlined text-xl">check</span>
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary hover:bg-blue-600 text-white shadow-lg shadow-primary/25 transition-all hover:translate-y-[-1px]"
              >
                <span className="font-medium text-sm">
                  {currentQuestion >= totalQuestions - 1 ? 'Hoàn thành' : 'Câu tiếp theo'}
                </span>
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            )}
          </div>
          {!showResult && (
            <div className="flex items-center justify-center gap-2 text-text-secondary text-sm">
              <span className="material-symbols-outlined text-[16px]">lightbulb</span>
              <span>Gợi ý: {currentQ.hint}</span>
            </div>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-6 opacity-40 hover:opacity-100 transition-opacity duration-300 mt-4">
          <div className="flex items-center gap-2">
            <kbd className="hidden sm:inline-flex items-center justify-center h-6 min-w-[24px] px-1.5 rounded bg-[#232f48] border border-[#324467] text-xs font-sans text-gray-300">
              Enter
            </kbd>
            <span className="text-xs text-gray-400">Kiểm tra / Tiếp tục</span>
          </div>
        </div>
        {currentQuestion >= totalQuestions - 1 && showResult && (
          <div className="w-full max-w-[640px] mt-4 p-6 bg-card-dark rounded-2xl border border-border-dark">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Kết quả</h3>
              <div className="text-4xl font-bold text-primary mb-2">
                {score} / {totalQuestions}
              </div>
              <p className="text-text-secondary">
                Tỷ lệ đúng: {Math.round((score / totalQuestions) * 100)}%
              </p>
              <div className="mt-6 flex gap-3 justify-center">
                <Link
                  href="/dashboard"
                  className="px-6 py-2.5 rounded-lg bg-card-dark border-2 border-border-dark text-text-secondary hover:text-white hover:bg-[#1e2a40] transition-colors"
                >
                  Về Dashboard
                </Link>
                <button
                  onClick={() => {
                    setCurrentQuestion(0)
                    setUserAnswer('')
                    setShowResult(false)
                    setIsCorrect(false)
                    setScore(0)
                  }}
                  className="px-6 py-2.5 rounded-lg bg-primary hover:bg-blue-600 text-white transition-colors"
                >
                  Làm lại
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

