'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

function FlashcardContent() {
  const searchParams = useSearchParams()
  const topic = searchParams.get('topic') || 'Environment'
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [knownWords, setKnownWords] = useState<Set<number>>(new Set())
  const [unknownWords, setUnknownWords] = useState<Set<number>>(new Set())

  const flashcards = [
    {
      word: 'Serendipity',
      pronunciation: '/ˌser.ənˈdɪp.ə.ti/',
      meaning: 'Sự tình cờ tìm thấy điều may mắn',
      example: 'Finding that old book was pure serendipity.',
    },
    {
      word: 'Contamination',
      pronunciation: '/kənˌtaməˈnāSH(ə)n/',
      meaning: 'Sự ô nhiễm, làm bẩn',
      example: 'Water contamination is a serious environmental issue.',
    },
    {
      word: 'Renewable',
      pronunciation: '/rəˈn(y)o͞oəb(ə)l/',
      meaning: 'Có thể tái tạo, phục hồi',
      example: 'Solar energy is a renewable resource.',
    },
    {
      word: 'Biodiversity',
      pronunciation: '/ˌbīōˌdīˈvərsədē/',
      meaning: 'Đa dạng sinh học',
      example: 'Protecting biodiversity is crucial for our planet.',
    },
    {
      word: 'Emission',
      pronunciation: '/əˈmiSH(ə)n/',
      meaning: 'Sự phát thải, khí thải',
      example: 'Carbon emissions contribute to global warming.',
    },
  ]

  const currentCard = flashcards[currentIndex]
  const progress = ((currentIndex + 1) / flashcards.length) * 100

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setIsFlipped(false)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setIsFlipped(false)
    }
  }

  const handleKnown = () => {
    setKnownWords(new Set([...Array.from(knownWords), currentIndex]))
    setUnknownWords(new Set([...Array.from(unknownWords)].filter((i) => i !== currentIndex)))
    if (currentIndex < flashcards.length - 1) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
        setIsFlipped(false)
      }, 300)
    }
  }

  const handleUnknown = () => {
    setUnknownWords(new Set([...Array.from(unknownWords), currentIndex]))
    setKnownWords(new Set([...Array.from(knownWords)].filter((i) => i !== currentIndex)))
    if (currentIndex < flashcards.length - 1) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
        setIsFlipped(false)
      }, 300)
    }
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
        setIsFlipped(false)
      }
      if (e.key === 'ArrowRight' && currentIndex < flashcards.length - 1) {
        setCurrentIndex(currentIndex + 1)
        setIsFlipped(false)
      }
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        setIsFlipped(!isFlipped)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentIndex, isFlipped, flashcards.length])

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden min-h-screen flex flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-border-dark px-4 sm:px-10 py-3 bg-background-dark/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4 text-white">
          <Link href="/dashboard" className="text-text-secondary hover:text-white transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            Flashcard
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
              <span className="material-symbols-outlined text-[18px]">style</span>
              <span>
                {currentIndex + 1} / {flashcards.length}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-6 justify-between items-end">
              <p className="text-white text-sm font-medium">Tiến độ học</p>
              <p className="text-text-secondary text-xs font-normal">
                Đã biết: {knownWords.size} | Chưa biết: {unknownWords.size}
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
          <div
            onClick={handleFlip}
            className={`relative w-full aspect-[4/3] cursor-pointer perspective-1000 ${
              isFlipped ? 'flipped' : ''
            }`}
          >
            <div className="relative w-full h-full preserve-3d transition-transform duration-500">
              {/* Front of card */}
              <div
                className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.3)] border border-border-dark flex flex-col items-center justify-center p-8 md:p-12 gap-6 bg-card-dark ${
                  isFlipped ? 'rotate-y-180' : 'rotate-y-0'
                }`}
              >
                <div className="size-16 mb-2 rounded-full bg-gradient-to-br from-[#2b6cee]/20 to-[#2b6cee]/5 flex items-center justify-center border border-[#2b6cee]/20">
                  <span className="material-symbols-outlined text-[#2b6cee] text-3xl">style</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                    {currentCard.word}
                  </h1>
                  <p className="text-text-secondary text-lg font-light">{currentCard.pronunciation}</p>
                </div>
                <p className="text-text-secondary text-sm italic mt-4">Nhấp để lật thẻ</p>
              </div>
              {/* Back of card */}
              <div
                className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.3)] border border-border-dark flex flex-col items-center justify-center p-8 md:p-12 gap-6 bg-gradient-to-br from-primary/20 to-primary/5 ${
                  isFlipped ? 'rotate-y-0' : 'rotate-y-180'
                }`}
              >
                <div className="size-16 mb-2 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center border border-green-500/20">
                  <span className="material-symbols-outlined text-green-500 text-3xl">translate</span>
                </div>
                <div className="flex flex-col items-center gap-4 text-center">
                  <p className="text-text-secondary text-base italic font-normal">Nghĩa:</p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {currentCard.meaning}
                  </h2>
                  <div className="mt-4 p-4 bg-card-dark/50 rounded-xl border border-border-dark/50">
                    <p className="text-text-secondary text-sm italic mb-2">Ví dụ:</p>
                    <p className="text-white text-base">{currentCard.example}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-card-dark border-2 border-border-dark text-text-secondary hover:text-white hover:bg-[#1e2a40] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-xl">arrow_back</span>
              <span className="font-medium text-sm">Trước</span>
            </button>
            <button
              onClick={handleFlip}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary hover:bg-blue-600 text-white shadow-lg shadow-primary/25 transition-all hover:translate-y-[-1px]"
            >
              <span className="material-symbols-outlined text-xl">
                {isFlipped ? 'undo' : 'flip'}
              </span>
              <span className="font-medium text-sm">{isFlipped ? 'Lật lại' : 'Lật thẻ'}</span>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === flashcards.length - 1}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-card-dark border-2 border-border-dark text-text-secondary hover:text-white hover:bg-[#1e2a40] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="font-medium text-sm">Sau</span>
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </div>
          {isFlipped && (
            <div className="flex items-center justify-center gap-3 pt-4">
              <button
                onClick={handleUnknown}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-red-500/10 border-2 border-red-500 text-red-400 hover:bg-red-500/20 transition-all"
              >
                <span className="material-symbols-outlined">close</span>
                <span className="font-medium text-sm">Chưa biết</span>
              </button>
              <button
                onClick={handleKnown}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500/10 border-2 border-green-500 text-green-400 hover:bg-green-500/20 transition-all"
              >
                <span className="material-symbols-outlined">check_circle</span>
                <span className="font-medium text-sm">Đã biết</span>
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-6 opacity-40 hover:opacity-100 transition-opacity duration-300 mt-4">
          <div className="flex items-center gap-2">
            <kbd className="hidden sm:inline-flex items-center justify-center h-6 min-w-[24px] px-1.5 rounded bg-[#232f48] border border-[#324467] text-xs font-sans text-gray-300">
              Space
            </kbd>
            <span className="text-xs text-gray-400">Lật thẻ</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="hidden sm:inline-flex items-center justify-center h-6 min-w-[24px] px-1.5 rounded bg-[#232f48] border border-[#324467] text-xs font-sans text-gray-300">
              ← →
            </kbd>
            <span className="text-xs text-gray-400">Điều hướng</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function FlashcardPage() {
  return (
    <Suspense fallback={
      <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <FlashcardContent />
    </Suspense>
  )
}

