'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function MatchingTestPage() {
  const searchParams = useSearchParams()
  const topic = searchParams.get('topic') || 'Emotions'
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null)
  const [selectedRight, setSelectedRight] = useState<string | null>(null)
  const [matchedPairs, setMatchedPairs] = useState<{ left: string; right: string }[]>([])
  const [completedPairs, setCompletedPairs] = useState(1)
  const totalPairs = 4

  const words = [
    { id: '1', word: 'Eloquence', meaning: 'Khả năng hùng biện, tài ăn nói' },
    { id: '2', word: 'Serendipity', meaning: 'Sự tình cờ tìm thấy điều may mắn' },
    { id: '3', word: 'Ephemeral', meaning: 'Ngắn ngủi, phù du, sớm nở tối tàn' },
    { id: '4', word: 'Solitude', meaning: 'Sự cô đơn yên bình, tĩnh lặng' },
  ]

  const shuffledWords = [...words].sort(() => Math.random() - 0.5)
  const shuffledMeanings = [...words]
    .map((w) => w.meaning)
    .sort(() => Math.random() - 0.5)

  const handleLeftClick = (wordId: string) => {
    if (matchedPairs.some((p) => p.left === wordId)) return
    if (selectedLeft === wordId) {
      setSelectedLeft(null)
    } else {
      setSelectedLeft(wordId)
      if (selectedRight) {
        handleMatch(wordId, selectedRight)
      }
    }
  }

  const handleRightClick = (meaning: string) => {
    if (matchedPairs.some((p) => p.right === meaning)) return
    if (selectedRight === meaning) {
      setSelectedRight(null)
    } else {
      setSelectedRight(meaning)
      if (selectedLeft) {
        handleMatch(selectedLeft, meaning)
      }
    }
  }

  const handleMatch = (wordId: string, meaning: string) => {
    const word = words.find((w) => w.id === wordId)
    if (word && word.meaning === meaning) {
      setMatchedPairs([...matchedPairs, { left: wordId, right: meaning }])
      setCompletedPairs(completedPairs + 1)
      setSelectedLeft(null)
      setSelectedRight(null)
    } else {
      setSelectedLeft(null)
      setSelectedRight(null)
    }
  }

  const isMatched = (wordId: string) => matchedPairs.some((p) => p.left === wordId)
  const isMatchedMeaning = (meaning: string) => matchedPairs.some((p) => p.right === meaning)

  const progress = (completedPairs / totalPairs) * 100

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden min-h-screen flex flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-border-dark px-4 sm:px-10 py-3 bg-background-dark/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4 text-white">
          <Link href="/dashboard" className="text-text-secondary hover:text-white transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            Bài kiểm tra Ghép từ
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
      <main className="flex-1 flex flex-col items-center justify-start py-8 px-4 w-full max-w-[1000px] mx-auto gap-8">
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-wrap gap-2 items-center justify-between text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Link href="/dashboard" className="text-text-secondary font-medium hover:text-primary transition-colors">
                Gói IELTS Advanced
              </Link>
              <span className="text-text-secondary">/</span>
              <span className="text-white font-medium">Topic: {topic}</span>
            </div>
            <div className="flex items-center gap-1 text-text-secondary">
              <span className="material-symbols-outlined text-[18px]">timer</span>
              <span>02:15</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-6 justify-between items-end">
              <p className="text-white text-sm font-medium">Tiến độ ghép cặp</p>
              <p className="text-text-secondary text-xs font-normal">
                Đã hoàn thành {completedPairs} / {totalPairs} cặp
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
        <div className="w-full flex flex-col gap-6">
          <div className="flex items-center justify-center">
            <p className="text-text-secondary italic text-sm">
              Chọn một từ ở cột trái và nghĩa tương ứng ở cột phải
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border-dark to-transparent -translate-x-1/2 pointer-events-none"></div>
            <div className="flex flex-col gap-4">
              {shuffledWords.map((word) => {
                const matched = isMatched(word.id)
                const selected = selectedLeft === word.id
                return (
                  <button
                    key={word.id}
                    onClick={() => handleLeftClick(word.id)}
                    disabled={matched}
                    className={`relative w-full p-5 h-20 rounded-xl text-left transition-all duration-200 flex items-center justify-between ${
                      matched
                        ? 'bg-green-500/10 border-2 border-green-500 opacity-80 cursor-default'
                        : selected
                        ? 'bg-[#1e2a40] border-2 border-primary shadow-[0_0_15px_rgba(43,108,238,0.2)] group hover:scale-[1.01]'
                        : 'bg-card-dark border-2 border-border-dark hover:border-primary/50 hover:bg-[#1e2a40] group hover:scale-[1.01]'
                    }`}
                  >
                    <span
                      className={`text-white font-bold text-lg ${
                        matched ? 'line-through decoration-green-500/50 decoration-2' : ''
                      }`}
                    >
                      {word.word}
                    </span>
                    {matched ? (
                      <span className="material-symbols-outlined text-green-500">check_circle</span>
                    ) : selected ? (
                      <div className="size-6 rounded-full bg-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-sm font-bold">
                          arrow_forward
                        </span>
                      </div>
                    ) : (
                      <div className="size-6 rounded-full border-2 border-border-dark group-hover:border-primary/50 transition-colors"></div>
                    )}
                  </button>
                )
              })}
            </div>
            <div className="flex flex-col gap-4">
              {shuffledMeanings.map((meaning, idx) => {
                const matched = isMatchedMeaning(meaning)
                const selected = selectedRight === meaning
                return (
                  <button
                    key={idx}
                    onClick={() => handleRightClick(meaning)}
                    disabled={matched}
                    className={`relative w-full p-5 h-20 rounded-xl text-left transition-all duration-200 flex items-center justify-between ${
                      matched
                        ? 'bg-green-500/10 border-2 border-green-500 opacity-80 cursor-default'
                        : selected
                        ? 'bg-[#1e2a40] border-2 border-primary/50 group cursor-pointer hover:shadow-[0_0_15px_rgba(43,108,238,0.1)]'
                        : 'bg-card-dark border-2 border-border-dark hover:border-primary/50 hover:bg-[#1e2a40] group hover:scale-[1.01]'
                    }`}
                  >
                    <div
                      className={`size-6 rounded-full border-2 transition-colors hidden md:block ${
                        selected
                          ? 'border-primary bg-primary/20'
                          : 'border-border-dark group-hover:border-primary/50'
                      }`}
                    ></div>
                    <span
                      className={`font-medium text-sm sm:text-base md:text-right w-full md:pl-4 ${
                        matched ? 'text-white' : selected ? 'text-white' : 'text-text-secondary group-hover:text-white'
                      }`}
                    >
                      {meaning}
                    </span>
                    {matched && (
                      <span className="material-symbols-outlined text-green-500 md:hidden">check_circle</span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="flex items-center justify-between w-full pt-8">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">arrow_back</span>
              <span className="font-medium text-sm">Quay lại</span>
            </Link>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border-dark bg-card-dark text-text-secondary hover:text-white hover:bg-[#1e2a40] transition-colors">
                <span className="material-symbols-outlined text-xl">restart_alt</span>
                <span className="font-medium text-sm">Làm lại</span>
              </button>
              <button
                disabled={completedPairs < totalPairs}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary hover:bg-blue-600 text-white shadow-lg shadow-primary/25 transition-all hover:translate-y-[-1px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="font-medium text-sm">
                  {completedPairs >= totalPairs ? 'Hoàn thành' : 'Tiếp tục'}
                </span>
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 opacity-40 hover:opacity-100 transition-opacity duration-300 mt-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-gray-400">touch_app</span>
            <span className="text-xs text-gray-400">Chọn 1 cặp để ghép</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-gray-400">check_circle</span>
            <span className="text-xs text-gray-400">Ghép đúng</span>
          </div>
        </div>
      </main>
    </div>
  )
}

