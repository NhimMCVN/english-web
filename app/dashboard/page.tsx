'use client'

import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Link from 'next/link'
import CreatePackageModal from '@/components/CreatePackageModal'
import { useState } from 'react'

export default function Dashboard() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const handleCreatePackage = (data: { name: string; description: string; icon: string; isPrivate: boolean }) => {
    console.log('Creating package:', data)
    // TODO: Implement API call to create package
    // You can add toast notification here
  }

  return (
    <div className="font-sans text-slate-900 bg-slate-50 dark:bg-slate-950 dark:text-slate-100 antialiased h-screen flex overflow-hidden selection:bg-primary-500 selection:text-white transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
        <Header />
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Dashboard
                </h1>
                <p className="text-slate-500 dark:text-slate-400">
                  Welcome back, Alex! You're making great progress.
                </p>
              </div>
              <Link
                href="/create-test"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/20"
              >
                <span className="material-symbols-outlined text-[20px]">add</span>
                Create Test
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
                <div className="size-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">translate</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                    Words Learned
                  </p>
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                    1,245
                  </h3>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
                <div className="size-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">flag</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                    Weekly Goal
                  </p>
                  <div className="flex items-baseline gap-1">
                    <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                      85
                    </h3>
                    <span className="text-sm text-slate-400">/ 100</span>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
                <div className="size-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                    Accuracy
                  </p>
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                    94%
                  </h3>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
                <div className="size-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                    Time Spent
                  </p>
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                    12h 30m
                  </h3>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="size-2 rounded-full bg-blue-500"></span>
                    My Packages
                  </h2>
                  <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    View All
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link
                    href="/topic/environment"
                    className="group bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all shadow-sm hover:shadow-md cursor-pointer relative"
                  >
                    <div className="absolute top-5 right-5 size-10">
                      <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-slate-100 dark:text-slate-700"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        ></path>
                        <path
                          className="text-blue-500"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeDasharray="70, 100"
                          strokeWidth="3"
                        ></path>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-slate-700 dark:text-slate-300">
                        70%
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="size-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mb-3 shadow-lg shadow-blue-500/20">
                        <span className="material-symbols-outlined">school</span>
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                        IELTS Core
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">500 essential words</p>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                        Academic
                      </span>
                      <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                        Advanced
                      </span>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
                      <span className="text-xs text-slate-400">Last learned 2h ago</span>
                      <span className="material-symbols-outlined text-slate-300 group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </Link>
                  <div className="group bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all shadow-sm hover:shadow-md cursor-pointer relative">
                    <div className="absolute top-5 right-5 size-10">
                      <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-slate-100 dark:text-slate-700"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        ></path>
                        <path
                          className="text-emerald-500"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeDasharray="45, 100"
                          strokeWidth="3"
                        ></path>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-slate-700 dark:text-slate-300">
                        45%
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="size-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white mb-3 shadow-lg shadow-emerald-500/20">
                        <span className="material-symbols-outlined">business_center</span>
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                        TOEIC 600
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Business vocabulary</p>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                        Business
                      </span>
                      <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                        Intermediate
                      </span>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
                      <span className="text-xs text-slate-400">Last learned 1d ago</span>
                      <span className="material-symbols-outlined text-slate-300 group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                  <div className="group bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-amber-500 dark:hover:border-amber-500 transition-all shadow-sm hover:shadow-md cursor-pointer relative">
                    <div className="absolute top-5 right-5 size-10">
                      <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-slate-100 dark:text-slate-700"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        ></path>
                        <path
                          className="text-amber-500"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeDasharray="15, 100"
                          strokeWidth="3"
                        ></path>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-slate-700 dark:text-slate-300">
                        15%
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="size-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white mb-3 shadow-lg shadow-amber-500/20">
                        <span className="material-symbols-outlined">terminal</span>
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                        Tech Terms
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">IT & Programming</p>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                        Technical
                      </span>
                      <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                        Beginner
                      </span>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
                      <span className="text-xs text-slate-400">Last learned 5d ago</span>
                      <span className="material-symbols-outlined text-slate-300 group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="flex flex-col items-center justify-center gap-4 p-5 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-800/50 transition-all group"
                  >
                    <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/30 text-slate-400 group-hover:text-blue-600 transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined">add</span>
                    </div>
                    <span className="font-bold text-slate-500 dark:text-slate-400 group-hover:text-blue-600 transition-colors">
                      Create New Package
                    </span>
                  </button>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl shadow-lg shadow-blue-500/20 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 size-24 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div>
                      <h3 className="font-bold text-lg">Daily Goal</h3>
                      <p className="text-blue-100 text-sm mt-1">Keep the momentum!</p>
                    </div>
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm border border-white/10">
                      <span className="material-symbols-outlined text-white">emoji_events</span>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="flex justify-between text-xs font-medium text-blue-100 mb-2">
                      <span>12 learned</span>
                      <span>Goal: 20</span>
                    </div>
                    <div className="w-full bg-black/20 rounded-full h-2.5">
                      <div
                        className="bg-white h-2.5 rounded-full shadow transition-all duration-500 relative"
                        style={{ width: '60%' }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 size-3 bg-white rounded-full shadow-md"></div>
                      </div>
                    </div>
                    <p className="text-xs text-blue-200 mt-4 text-center">
                      8 more words to reach your goal today!
                    </p>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-slate-900 dark:text-white">Achievements</h3>
                    <button className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide hover:underline">
                      View All
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 flex items-center justify-center ring-4 ring-white dark:ring-slate-800">
                        <span className="material-symbols-outlined text-[20px] filled">bolt</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">7 Day Streak</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Maintained for 7 days</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center ring-4 ring-white dark:ring-slate-800">
                        <span className="material-symbols-outlined text-[20px] filled">workspace_premium</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Vocab Master</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Learned 1000 words</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 opacity-50">
                      <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-400 flex items-center justify-center ring-4 ring-white dark:ring-slate-800">
                        <span className="material-symbols-outlined text-[20px]">lock</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Speed Reader</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Complete 50 quizzes</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-indigo-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-indigo-100 dark:border-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400 shrink-0">
                      <span className="material-symbols-outlined text-[20px]">update</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Review Time</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                        You have{' '}
                        <span className="font-bold text-indigo-600 dark:text-indigo-400">25 words</span> scheduled
                        for review today based on spaced repetition.
                      </p>
                      <button className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors flex items-center gap-1">
                        Start Review
                        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <CreatePackageModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreatePackage}
      />
    </div>
  )
}

