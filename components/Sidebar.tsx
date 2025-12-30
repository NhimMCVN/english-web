'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import CreatePackageModal from './CreatePackageModal'

export default function Sidebar() {
  const pathname = usePathname()
  const [openPackages, setOpenPackages] = useState<string[]>(['IELTS Core'])
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const togglePackage = (packageName: string) => {
    setOpenPackages((prev) =>
      prev.includes(packageName)
        ? prev.filter((p) => p !== packageName)
        : [...prev, packageName]
    )
  }

  const isActive = (path: string) => pathname === path

  const handleCreatePackage = (data: { name: string; description: string; icon: string; isPrivate: boolean }) => {
    console.log('Creating package:', data)
    // TODO: Implement API call to create package
    // You can add toast notification here
  }

  return (
    <aside className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0 z-30 transition-colors duration-300">
      <div className="h-16 flex items-center px-6 border-b border-slate-100 dark:border-slate-800/50">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <span className="material-symbols-outlined text-[22px]">school</span>
          </div>
          <h1 className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">
            VocabMaster
          </h1>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-8">
        <div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">
            Menu
          </div>
          <nav className="flex flex-col gap-1">
            <Link
              href="/dashboard"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium ${
                isActive('/dashboard')
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span className={`material-symbols-outlined ${isActive('/dashboard') ? 'filled' : ''}`}>
                dashboard
              </span>
              Dashboard
            </Link>
            <Link
              href="/community"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium ${
                isActive('/community')
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined">forum</span>
              Community
            </Link>
            <Link
              href="/settings"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium ${
                isActive('/settings')
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined">settings</span>
              Settings
            </Link>
          </nav>
        </div>
        <div>
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              My Packages
            </div>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">add_circle</span>
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col">
              <button
                onClick={() => togglePackage('IELTS Core')}
                className="group flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer mb-2"
              >
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <span className="material-symbols-outlined filled text-[20px]">folder</span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white truncate">
                    IELTS Core
                  </h3>
                </div>
                <span
                  className={`material-symbols-outlined text-slate-400 text-[20px] transition-transform ${
                    openPackages.includes('IELTS Core') ? 'rotate-180' : ''
                  }`}
                >
                  expand_less
                </span>
              </button>
              {openPackages.includes('IELTS Core') && (
                <div className="pl-5 flex flex-col gap-1 border-l-2 border-slate-100 dark:border-slate-800 ml-4">
                  <Link
                    href="/topic/environment"
                    className={`flex items-center justify-between px-4 py-2 rounded-lg font-medium text-sm border-l-2 -ml-[2px] transition-colors ${
                      pathname.includes('/topic/environment')
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-500'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 border-transparent'
                    }`}
                  >
                    <span>Environment</span>
                    <span className="text-[10px] font-bold bg-blue-100 dark:bg-blue-800 px-1.5 py-0.5 rounded text-blue-600 dark:text-blue-300">
                      45
                    </span>
                  </Link>
                  <Link
                    href="/topic/technology"
                    className="flex items-center justify-between px-4 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm border-l-2 border-transparent -ml-[2px]"
                  >
                    <span>Technology</span>
                    <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-500">
                      32
                    </span>
                  </Link>
                  <Link
                    href="/topic/education"
                    className="flex items-center justify-between px-4 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm border-l-2 border-transparent -ml-[2px]"
                  >
                    <span>Education</span>
                    <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-500">
                      28
                    </span>
                  </Link>
                </div>
              )}
            </div>
            <button
              onClick={() => togglePackage('TOEIC 600')}
              className="group flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">folder</span>
                </div>
                <h3 className="font-medium text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white truncate">
                  TOEIC 600
                </h3>
              </div>
              <span
                className={`material-symbols-outlined text-slate-400 text-[20px] transition-transform ${
                  openPackages.includes('TOEIC 600') ? 'rotate-180' : ''
                }`}
              >
                expand_more
              </span>
            </button>
            <button
              onClick={() => togglePackage('Tech Terms')}
              className="group flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">folder</span>
                </div>
                <h3 className="font-medium text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white truncate">
                  Tech Terms
                </h3>
              </div>
              <span
                className={`material-symbols-outlined text-slate-400 text-[20px] transition-transform ${
                  openPackages.includes('Tech Terms') ? 'rotate-180' : ''
                }`}
              >
                expand_more
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-slate-100 dark:border-slate-800">
        <button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left">
          <div
            className="size-10 rounded-full bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-700"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDT2oXU45agU91W5nwhcjArDd5AYcqnLT4GA1N7XZZv6GOSFMmf77uB4fVLBu5Qfu_dkYZ3MHh2pVkmb1bwLVo9WhA3satka3mQgRJPVn5Qo0OM8ed_kKybRg5FaUOqcjO08xLBb6i62d1flfFlnotUTY3mbhyCaUCitC38iCuNLJYbhF6vDXL09mp3HIQTSJLJzI5T6KLIJiUiPk0dXVdVFA7ucBCmkyHA6EgX6K0zgNBI4159Zmgqngcz2xQVvrS0986N5vj9pDGI')",
            }}
          ></div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-slate-900 dark:text-white truncate">
              Alex Morgan
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Free Plan</p>
          </div>
          <span className="material-symbols-outlined text-slate-400">expand_more</span>
        </button>
      </div>
      <CreatePackageModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreatePackage}
      />
    </aside>
  )
}
