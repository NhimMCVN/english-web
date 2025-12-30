'use client'

import { useState } from 'react'

interface CreatePackageModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit?: (data: PackageData) => void
}

interface PackageData {
  name: string
  description: string
  icon: string
  isPrivate: boolean
}

const icons = [
  'school',
  'language',
  'menu_book',
  'flight',
  'work',
  'star',
  'emoji_objects',
  'music_note',
  'business_center',
  'terminal',
  'favorite',
  'sports_esports',
]

export default function CreatePackageModal({ isOpen, onClose, onSubmit }: CreatePackageModalProps) {
  const [packageName, setPackageName] = useState('')
  const [description, setDescription] = useState('')
  const [selectedIcon, setSelectedIcon] = useState('school')
  const [isPrivate, setIsPrivate] = useState(true)

  if (!isOpen) return null

  const handleSubmit = () => {
    if (!packageName.trim()) {
      return
    }

    const packageData: PackageData = {
      name: packageName.trim(),
      description: description.trim(),
      icon: selectedIcon,
      isPrivate,
    }

    onSubmit?.(packageData)
    handleClose()
  }

  const handleClose = () => {
    setPackageName('')
    setDescription('')
    setSelectedIcon('school')
    setIsPrivate(true)
    onClose()
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleBackdropClick}
      />
      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <div className="relative w-full max-w-[640px] transform flex flex-col rounded-xl bg-white dark:bg-[#111722] shadow-2xl transition-all border border-gray-200 dark:border-[#324467]">
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-[#1e2a3b]">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tạo Package Mới
            </h2>
            <button
              onClick={handleClose}
              className="group rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-[#192233] dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>
          {/* Modal Content (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 max-h-[calc(100vh-200px)]">
            {/* Package Name Input */}
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium leading-normal text-gray-700 dark:text-white"
                htmlFor="pkg-name"
              >
                Tên Package <span className="text-red-500">*</span>
              </label>
              <input
                autoFocus
                className="flex w-full min-w-0 resize-none overflow-hidden rounded-lg border border-gray-300 bg-gray-50 dark:bg-[#192233] dark:border-[#324467] text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-[#92a4c9] px-4 text-base font-normal leading-normal transition-all"
                id="pkg-name"
                placeholder="Ví dụ: Từ vựng IELTS, Giao tiếp cơ bản..."
                type="text"
                value={packageName}
                onChange={(e) => setPackageName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && packageName.trim()) {
                    handleSubmit()
                  }
                }}
              />
            </div>
            {/* Description Input */}
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium leading-normal text-gray-700 dark:text-white"
                htmlFor="pkg-desc"
              >
                Mô tả
                <span className="text-xs font-normal text-gray-500 dark:text-[#92a4c9] ml-1">
                  (Tùy chọn)
                </span>
              </label>
              <textarea
                className="flex w-full min-w-0 resize-none overflow-hidden rounded-lg border border-gray-300 bg-gray-50 dark:bg-[#192233] dark:border-[#324467] text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 focus:border-primary min-h-[100px] placeholder:text-gray-400 dark:placeholder:text-[#92a4c9] p-4 text-base font-normal leading-normal transition-all"
                id="pkg-desc"
                placeholder="Nhập mô tả ngắn về nội dung hoặc mục tiêu của package này..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            {/* Icon Selection */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium leading-normal text-gray-700 dark:text-white">
                Chọn Icon
              </label>
              <div className="grid grid-cols-5 sm:grid-cols-6 gap-3">
                {icons.map((icon) => (
                  <button
                    key={icon}
                    onClick={() => setSelectedIcon(icon)}
                    className={`aspect-square flex items-center justify-center rounded-lg cursor-pointer transition-all ${
                      selectedIcon === icon
                        ? 'bg-primary text-white shadow-lg shadow-primary/30 ring-2 ring-offset-2 ring-primary dark:ring-offset-[#111722]'
                        : 'bg-gray-100 dark:bg-[#192233] border border-transparent dark:border-[#324467] text-gray-500 dark:text-[#92a4c9] hover:bg-gray-200 dark:hover:bg-[#25324b] hover:text-primary dark:hover:text-primary'
                    }`}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[28px]">{icon}</span>
                  </button>
                ))}
              </div>
            </div>
            {/* Privacy Toggle */}
            <div className="pt-2">
              <div className="flex items-center justify-between rounded-xl bg-gray-50 dark:bg-[#192233] p-4 border border-gray-200 dark:border-[#324467]">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Chế độ riêng tư
                  </span>
                  <span className="text-xs text-gray-500 dark:text-[#92a4c9] mt-1">
                    Chỉ mình bạn mới có thể thấy và học package này
                  </span>
                </div>
                {/* Toggle Switch */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    className="sr-only peer"
                    type="checkbox"
                    checked={isPrivate}
                    onChange={(e) => setIsPrivate(e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-gray-300 dark:bg-[#324467] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
          {/* Modal Footer */}
          <div className="flex items-center justify-end gap-3 px-6 py-5 border-t border-gray-100 dark:border-[#1e2a3b] bg-gray-50/50 dark:bg-[#111722]/50 rounded-b-xl">
            <button
              onClick={handleClose}
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-[#92a4c9] hover:bg-gray-100 dark:hover:bg-[#192233] hover:text-gray-900 dark:hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-gray-400"
              type="button"
            >
              Hủy
            </button>
            <button
              onClick={handleSubmit}
              disabled={!packageName.trim()}
              className="px-6 py-2.5 rounded-lg bg-primary hover:bg-blue-600 text-white text-sm font-medium shadow-lg shadow-primary/25 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:ring-offset-[#111722] disabled:opacity-50 disabled:cursor-not-allowed"
              type="button"
            >
              Tạo Package
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

