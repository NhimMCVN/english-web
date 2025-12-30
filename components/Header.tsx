'use client'

export default function Header() {
  return (
    <header className="h-16 flex items-center justify-between px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-20">
      <button className="lg:hidden mr-4 text-slate-500">
        <span className="material-symbols-outlined">menu</span>
      </button>
      <div className="flex-1 max-w-md">
        <div className="relative group">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors material-symbols-outlined text-[20px]">
            search
          </span>
          <input
            className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full py-2 pl-10 pr-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
            placeholder="Search words or packages..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 ml-4">
        <button className="relative size-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <span className="material-symbols-outlined text-amber-500 text-[18px] filled">
            local_fire_department
          </span>
          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">12 Days</span>
        </div>
      </div>
    </header>
  )
}
