import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Link from 'next/link'

export function generateStaticParams() {
  // Return all topic slugs that should be pre-rendered at build time
  return [
    { slug: 'environment' },
    { slug: 'technology' },
    { slug: 'education' },
  ]
}

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topicName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1)

  return (
    <div className="font-sans text-slate-900 bg-slate-50 dark:bg-slate-950 dark:text-slate-100 antialiased h-screen flex overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
          <div className="max-w-6xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                    <span>IELTS Core</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="text-blue-600 dark:text-blue-400">{topicName}</span>
                  </div>
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                    {topicName}
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400">
                    Essential vocabulary related to nature, climate change, and preservation.
                  </p>
                </div>
                <div className="flex gap-6 bg-white dark:bg-slate-800 px-6 py-3 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">45</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Total</div>
                  </div>
                  <div className="w-px bg-slate-200 dark:bg-slate-700"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-500">15</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Mastered</div>
                  </div>
                  <div className="w-px bg-slate-200 dark:bg-slate-700"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-500">10</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Learning</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-500 filled">bolt</span>
                    Quick Test
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                    <Link
                      href={`/test/flashcard?topic=${params.slug}`}
                      className="group relative flex flex-col items-center justify-center gap-3 p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-xl border border-indigo-200 dark:border-indigo-800/50 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-200"
                    >
                      <div className="size-10 bg-white dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">style</span>
                      </div>
                      <div className="text-center">
                        <span className="block font-bold text-slate-900 dark:text-white">Flashcard Nhanh</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">Review visually</span>
                      </div>
                    </Link>
                    <Link
                      href={`/test/multiple-choice?topic=${params.slug}`}
                      className="group relative flex flex-col items-center justify-center gap-3 p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-xl border border-emerald-200 dark:border-emerald-800/50 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-200"
                    >
                      <div className="size-10 bg-white dark:bg-emerald-900/50 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">quiz</span>
                      </div>
                      <div className="text-center">
                        <span className="block font-bold text-slate-900 dark:text-white">Trắc nghiệm Nhanh</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">Multiple choice</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-6 h-full">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col flex-1">
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-purple-500 filled">tune</span>
                      Custom Test
                    </h3>
                    <div className="flex-1 flex flex-col justify-center">
                      <Link
                        href="/create-test"
                        className="flex-1 group flex items-center justify-between p-5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all duration-200 text-white w-full text-left"
                      >
                        <div className="flex flex-col gap-1">
                          <span className="font-bold text-xl">Tùy chỉnh Bài kiểm tra</span>
                          <span className="text-purple-100 text-sm font-medium opacity-90">
                            Create a test with specific settings
                          </span>
                        </div>
                        <div className="size-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                          <span className="material-symbols-outlined text-[28px]">arrow_forward</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <button className="w-full bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all group text-left flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                        <span className="material-symbols-outlined text-[26px]">add</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          Add Word to Topic
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Expand your vocabulary list</p>
                      </div>
                    </div>
                    <div className="size-10 rounded-full border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:border-blue-100 group-hover:text-blue-600 dark:group-hover:bg-blue-900/30 dark:group-hover:border-blue-800 dark:group-hover:text-blue-400 transition-all">
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined filled text-blue-500">list_alt</span>
                    Topic Vocabulary
                  </h2>
                  <div className="flex gap-2">
                    <button className="size-8 flex items-center justify-center rounded-lg bg-white dark:bg-slate-800 text-slate-500 hover:text-blue-600 shadow-sm border border-slate-200 dark:border-slate-700 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">sort</span>
                    </button>
                    <button className="size-8 flex items-center justify-center rounded-lg bg-white dark:bg-slate-800 text-slate-500 hover:text-blue-600 shadow-sm border border-slate-200 dark:border-slate-700 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">filter_list</span>
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { word: 'Contamination', status: 'Learning', pronunciation: '/kənˌtaməˈnāSH(ə)n/' },
                    { word: 'Renewable', status: 'Mastered', pronunciation: '/rəˈn(y)o͞oəb(ə)l/' },
                    { word: 'Biodiversity', status: 'New', pronunciation: '/ˌbīōˌdīˈvərsədē/' },
                    { word: 'Emission', status: 'New', pronunciation: '/əˈmiSH(ə)n/' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="group bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md dark:hover:border-slate-600 transition-all relative overflow-hidden"
                    >
                      <div
                        className={`absolute top-0 left-0 w-1 h-full ${
                          item.status === 'Mastered'
                            ? 'bg-emerald-500'
                            : item.status === 'Learning'
                            ? 'bg-amber-400'
                            : 'bg-slate-300 dark:bg-slate-600'
                        }`}
                      ></div>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex gap-4">
                          <div className="size-12 rounded-xl bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 flex items-center justify-center font-display font-bold text-xl">
                            {item.word.substring(0, 2)}
                          </div>
                          <div>
                            <div className="flex items-center gap-3">
                              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.word}</h3>
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                  item.status === 'Mastered'
                                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20'
                                    : item.status === 'Learning'
                                    ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20'
                                    : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600'
                                }`}
                              >
                                {item.status}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                              <span className="font-mono">{item.pronunciation}</span>
                              <button className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                <span className="material-symbols-outlined text-[16px]">volume_up</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <button className="text-slate-300 hover:text-amber-400 transition-colors">
                          <span className="material-symbols-outlined">star_rate</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full py-3 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-center gap-2">
                  Load more words
                  <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                </button>
              </div>
              <div className="flex flex-col gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Topic Progress</h2>
                  <div className="relative size-48 mx-auto">
                    <svg className="size-full -rotate-90 transform" viewBox="0 0 100 100">
                      <circle
                        className="text-slate-100 dark:text-slate-700"
                        cx="50"
                        cy="50"
                        fill="transparent"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                      ></circle>
                      <circle
                        className="text-emerald-500"
                        cx="50"
                        cy="50"
                        fill="transparent"
                        r="40"
                        stroke="currentColor"
                        strokeDasharray="84 251.2"
                        strokeLinecap="round"
                        strokeWidth="8"
                      ></circle>
                      <circle
                        className="text-amber-400"
                        cx="50"
                        cy="50"
                        fill="transparent"
                        r="40"
                        stroke="currentColor"
                        strokeDasharray="56 251.2"
                        strokeDashoffset="-84"
                        strokeLinecap="round"
                        strokeWidth="8"
                      ></circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-display font-bold text-slate-900 dark:text-white">55%</span>
                      <span className="text-xs font-medium text-slate-500 uppercase">Complete</span>
                    </div>
                  </div>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3">
                        <div className="size-3 rounded-full bg-emerald-500"></div>
                        <span className="text-slate-600 dark:text-slate-300">Mastered</span>
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white">15</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3">
                        <div className="size-3 rounded-full bg-amber-400"></div>
                        <span className="text-slate-600 dark:text-slate-300">Learning</span>
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white">10</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3">
                        <div className="size-3 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                        <span className="text-slate-600 dark:text-slate-300">New</span>
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white">20</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl shadow-lg shadow-blue-500/20 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 size-24 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div>
                      <h3 className="font-bold text-lg">Daily Goal</h3>
                      <p className="text-blue-100 text-sm mt-1">Focus on &quot;{topicName}&quot; today!</p>
                    </div>
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      <span className="material-symbols-outlined text-white">emoji_events</span>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="flex justify-between text-xs font-medium text-blue-100 mb-2">
                      <span>5 learned</span>
                      <span>Goal: 10</span>
                    </div>
                    <div className="w-full bg-black/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full transition-all duration-500" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

