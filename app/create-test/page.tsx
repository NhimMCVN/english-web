'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CreateTestPage() {
  const [selectedModes, setSelectedModes] = useState<string[]>(['Tổng hợp', 'Trắc nghiệm', 'Viết từ'])
  const [questionCount, setQuestionCount] = useState(20)
  const [timeLimit, setTimeLimit] = useState(15)
  const [timeLimitEnabled, setTimeLimitEnabled] = useState(true)

  const toggleMode = (mode: string) => {
    if (mode === 'Tổng hợp') {
      setSelectedModes(['Tổng hợp'])
    } else {
      setSelectedModes((prev) => {
        const filtered = prev.filter((m) => m !== 'Tổng hợp')
        if (filtered.includes(mode)) {
          return filtered.filter((m) => m !== mode)
        }
        return [...filtered, mode]
      })
    }
  }

  return (
    <div className="font-display bg-background-light dark:bg-background-dark min-h-screen flex flex-col overflow-x-hidden text-[#111418] dark:text-white">
      <div className="w-full border-b border-solid border-[#e5e7eb] dark:border-[#232f48] bg-surface-light dark:bg-[#111722]">
        <div className="layout-container flex justify-center w-full">
          <div className="flex max-w-[960px] flex-1 items-center justify-between px-4 py-3 lg:px-10">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-[#111418] dark:text-white">
                VocabMaster
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-background-light dark:bg-[#232f48]">
                <span className="material-symbols-outlined text-[20px] text-secondary-text">search</span>
                <span className="text-sm text-secondary-text">Tìm kiếm...</span>
              </div>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-white dark:ring-[#232f48]"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlWEg3YvuA8DhyuYNXUQbZDerXw4Qt_kOX0hP0CcvxFhvenLfD8sXTgG2woNpGjwXJIr_YGCPe8eL1ttqC7GVeXiw3aPfwqav_LeNjFV9lnej_1jjwsbQaDLUznUdMyvz5bhbaxzmimE_JX7sTMfgtgcRrlHzlFob4YodBbcyIKfxgJNOpNp5RpTl1wUs5mJ0wfJ5d_XuvKxsK6phPMBHBgDDVTjvMv1XlDIWScTMfBN6UNGNwjSxy9Rjwqc6K2lYoaamotLez30Yv')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <main className="flex-1 flex justify-center py-6 w-full">
        <div className="layout-content-container flex flex-col max-w-[960px] w-full px-4 md:px-6 gap-8">
          <div className="flex flex-wrap justify-between items-end gap-4 pb-4 border-b border-[#e5e7eb] dark:border-[#232f48]">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                Thiết lập bài kiểm tra
              </h1>
              <p className="text-[#637588] dark:text-secondary-text text-base font-normal">
                Tùy chỉnh thông số để tối ưu hóa việc học của bạn
              </p>
            </div>
            <Link
              href="/dashboard"
              className="flex items-center justify-center gap-2 rounded-xl h-10 px-5 bg-[#e5e7eb] dark:bg-[#232f48] text-[#111418] dark:text-white hover:bg-[#d1d5db] dark:hover:bg-[#2f3e5c] transition-colors text-sm font-bold leading-normal"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
              <span className="truncate">Dashboard</span>
            </Link>
          </div>
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold leading-tight flex items-center gap-2">
              <span className="flex items-center justify-center size-8 rounded-full bg-primary/20 text-primary text-sm font-bold">
                1
              </span>
              Chọn chế độ thi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: 'Tổng hợp', icon: 'dashboard_customize', color: 'pink' },
                { name: 'Trắc nghiệm', icon: 'quiz', color: 'blue' },
                { name: 'Flashcard', icon: 'style', color: 'purple' },
                { name: 'Viết từ', icon: 'edit_note', color: 'green' },
                { name: 'Ghép từ', icon: 'join_inner', color: 'orange' },
              ].map((mode) => {
                const isSelected = selectedModes.includes(mode.name)
                const isComprehensive = mode.name === 'Tổng hợp'
                return (
                  <button
                    key={mode.name}
                    onClick={() => toggleMode(mode.name)}
                    className={`group relative cursor-pointer flex flex-col gap-3 p-4 rounded-xl bg-surface-light dark:bg-surface-dark border-2 transition-all ${
                      isSelected
                        ? 'border-primary shadow-sm hover:shadow-md'
                        : 'border-transparent hover:border-primary/50 hover:bg-white dark:hover:bg-[#232f48]'
                    } ${isComprehensive && isSelected ? 'bg-blue-50/30 dark:bg-blue-900/10' : ''}`}
                  >
                    {isSelected && (
                      <div className="absolute top-3 right-3 text-primary">
                        {isComprehensive ? (
                          <span className="material-symbols-outlined fill-1">check_circle</span>
                        ) : (
                          <input
                            type="checkbox"
                            checked={true}
                            readOnly
                            className="w-5 h-5 rounded text-primary focus:ring-primary border-gray-300 dark:border-gray-600 dark:bg-[#1b2537] cursor-pointer"
                          />
                        )}
                      </div>
                    )}
                    <div
                      className={`size-12 rounded-lg flex items-center justify-center mb-2 ${
                        mode.color === 'pink'
                          ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'
                          : mode.color === 'blue'
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                          : mode.color === 'purple'
                          ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                          : mode.color === 'green'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                          : 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                      }`}
                    >
                      <span className="material-symbols-outlined text-3xl">{mode.icon}</span>
                    </div>
                    <div>
                      <p className="text-base font-bold leading-normal">{mode.name}</p>
                      <p className="text-[#637588] dark:text-secondary-text text-sm leading-normal">
                        {mode.name === 'Tổng hợp'
                          ? 'Kết hợp nhiều dạng'
                          : mode.name === 'Trắc nghiệm'
                          ? 'Chọn 1 đáp án đúng'
                          : mode.name === 'Flashcard'
                          ? 'Lật thẻ để ghi nhớ'
                          : mode.name === 'Viết từ'
                          ? 'Gõ lại từ chính xác'
                          : 'Nối từ với nghĩa'}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold leading-tight flex items-center gap-2">
              <span className="flex items-center justify-center size-8 rounded-full bg-primary/20 text-primary text-sm font-bold">
                2
              </span>
              Phạm vi từ vựng
            </h2>
            <div className="bg-surface-light dark:bg-surface-dark p-1 rounded-xl flex flex-col sm:flex-row gap-1">
              {['Topic hiện tại', 'Cả Package', 'Đã đánh dấu sao', 'Tổng hợp'].map((option, idx) => (
                <button
                  key={idx}
                  className={`flex-1 py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-[#232f48] font-medium text-sm flex items-center justify-center gap-2 transition-all ${
                    idx === 3
                      ? 'bg-white dark:bg-[#2b3b55] shadow-sm text-primary font-bold'
                      : 'text-[#637588] dark:text-secondary-text'
                  }`}
                >
                  <span className="material-symbols-outlined">
                    {idx === 0 ? 'topic' : idx === 1 ? 'folder_open' : idx === 2 ? 'star' : 'library_add'}
                  </span>
                  {option}
                </button>
              ))}
            </div>
          </section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section className="flex flex-col gap-5">
              <h2 className="text-xl font-bold leading-tight flex items-center gap-2">
                <span className="flex items-center justify-center size-8 rounded-full bg-primary/20 text-primary text-sm font-bold">
                  3
                </span>
                Cấu hình bài thi
              </h2>
              <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <label className="font-bold text-sm">Số lượng câu hỏi</label>
                  <span className="px-2 py-1 rounded bg-primary/20 text-primary text-xs font-bold">
                    {questionCount} câu
                  </span>
                </div>
                <div className="relative w-full h-6 flex items-center">
                  <div className="absolute w-full h-1.5 bg-gray-200 dark:bg-[#232f48] rounded-full"></div>
                  <div
                    className="absolute h-1.5 bg-primary rounded-full"
                    style={{ width: `${((questionCount - 5) / 45) * 100}%` }}
                  ></div>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={questionCount}
                    onChange={(e) => setQuestionCount(Number(e.target.value))}
                    className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div
                    className="absolute size-5 bg-primary rounded-full border-2 border-white dark:border-[#101622] shadow-md top-1/2 -translate-y-1/2 pointer-events-none transition-all"
                    style={{ left: `${((questionCount - 5) / 45) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-[#637588] dark:text-secondary-text font-medium">
                  <span>5</span>
                  <span>50</span>
                </div>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">timer</span>
                    <label className="font-bold text-sm">Giới hạn thời gian</label>
                  </div>
                  <p className="text-xs text-[#637588] dark:text-secondary-text">Tự động nộp bài khi hết giờ</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#e5e7eb] dark:border-[#232f48] rounded-lg overflow-hidden h-9">
                    <input
                      type="number"
                      value={timeLimit}
                      onChange={(e) => setTimeLimit(Number(e.target.value))}
                      disabled={!timeLimitEnabled}
                      className="w-12 bg-transparent text-center text-sm font-bold focus:outline-none border-none p-0 h-full disabled:opacity-50"
                    />
                    <span className="bg-gray-100 dark:bg-[#232f48] px-2 text-xs text-[#637588] h-full flex items-center">
                      phút
                    </span>
                  </div>
                  <button
                    onClick={() => setTimeLimitEnabled(!timeLimitEnabled)}
                    className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors ${
                      timeLimitEnabled ? 'bg-primary' : 'bg-gray-300 dark:bg-[#232f48]'
                    }`}
                  >
                    <div
                      className={`absolute top-1 size-4 bg-white rounded-full shadow-sm transition-transform ${
                        timeLimitEnabled ? 'right-1' : 'left-1'
                      }`}
                    ></div>
                  </button>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-5">
              <h2 className="text-xl font-bold leading-tight flex items-center gap-2">
                <span className="flex items-center justify-center size-8 rounded-full bg-primary/20 text-primary text-sm font-bold">
                  4
                </span>
                Nâng cao
              </h2>
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl divide-y divide-[#e5e7eb] dark:divide-[#232f48]">
                {[
                  { name: 'Xáo trộn câu hỏi', desc: 'Thay đổi thứ tự câu hỏi ngẫu nhiên', icon: 'shuffle', enabled: true },
                  {
                    name: 'Hiển thị đáp án ngay',
                    desc: 'Biết kết quả ngay sau khi chọn',
                    icon: 'lightbulb',
                    enabled: false,
                  },
                  { name: 'Lặp lại thông minh', desc: 'Ưu tiên các từ bạn hay sai', icon: 'repeat', enabled: true },
                ].map((option, idx) => (
                  <div key={idx} className="p-4 flex items-center justify-between">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#637588] dark:text-secondary-text mt-0.5">
                        {option.icon}
                      </span>
                      <div>
                        <p className="text-sm font-bold">{option.name}</p>
                        <p className="text-xs text-[#637588] dark:text-secondary-text mt-0.5">{option.desc}</p>
                      </div>
                    </div>
                    <button
                      className={`w-11 h-6 rounded-full relative cursor-pointer flex-shrink-0 transition-colors ${
                        option.enabled ? 'bg-primary' : 'bg-gray-300 dark:bg-[#232f48]'
                      }`}
                    >
                      <div
                        className={`absolute top-1 size-4 bg-white rounded-full shadow-sm transition-transform ${
                          option.enabled ? 'right-1' : 'left-1'
                        }`}
                      ></div>
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="sticky bottom-4 md:bottom-8 z-20 mt-4">
            <div className="bg-surface-light dark:bg-[#1b2537] rounded-2xl p-4 shadow-xl border border-[#e5e7eb] dark:border-[#232f48] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-[960px] mx-auto backdrop-blur-xl bg-opacity-95 dark:bg-opacity-95">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm w-full sm:w-auto text-center sm:text-left">
                <div className="flex items-center gap-2 text-[#637588] dark:text-secondary-text">
                  <span className="material-symbols-outlined">format_list_numbered</span>
                  <span>{questionCount} Câu hỏi</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
                <div className="flex items-center gap-2 text-[#637588] dark:text-secondary-text">
                  <span className="material-symbols-outlined">schedule</span>
                  <span>{timeLimit} Phút</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
                <div className="flex items-center gap-2 text-[#637588] dark:text-secondary-text">
                  <span className="material-symbols-outlined">category</span>
                  <span>Tổng hợp</span>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button className="hidden sm:flex h-12 w-12 items-center justify-center rounded-xl bg-transparent hover:bg-gray-100 dark:hover:bg-[#232f48] text-[#637588] dark:text-secondary-text transition-colors">
                  <span className="material-symbols-outlined">save</span>
                </button>
                <Link
                  href={
                    selectedModes.includes('Flashcard')
                      ? '/test/flashcard'
                      : selectedModes.includes('Viết từ')
                      ? '/test/writing'
                      : selectedModes.includes('Ghép từ')
                      ? '/test/matching'
                      : '/test/multiple-choice'
                  }
                  className="flex-1 sm:flex-none h-12 px-8 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-base shadow-lg shadow-blue-500/20 transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Bắt đầu làm bài</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

