import React from 'react'
import Header from './components/Header'

function DashboardPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif;' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#181611] tracking-light text-[32px] font-bold leading-tight min-w-72">Automation Controller</p>
            </div>
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f2b90c] text-[#181611] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">New VIP Order</span>
                </button>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f5f3f0] text-[#181611] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">New Normal Order</span>
                </button>
              </div>
            </div>
            <div className="flex px-4 py-3 justify-start">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f2b90c] text-[#181611] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">+ Bot</span>
              </button>
            </div>
            <div className="flex px-4 py-3 justify-start">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f5f3f0] text-[#181611] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">- Bot</span>
              </button>
            </div>
            <h2 className="text-[#181611] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">PENDING Orders</h2>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
              <div className="flex flex-col justify-center">
                <p className="text-[#181611] text-base font-medium leading-normal line-clamp-1">Order #12345</p>
                <p className="text-[#8a8060] text-sm font-normal leading-normal line-clamp-2">VIP</p>
              </div>
              <div className="shrink-0">
                <div className="flex size-7 items-center justify-center"><div className="size-3 rounded-full bg-[#078812]"></div></div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="flex flex-col justify-center">
                <p className="text-[#181611] text-base font-medium leading-normal line-clamp-1">Order #67890</p>
                <p className="text-[#8a8060] text-sm font-normal leading-normal line-clamp-2">Normal</p>
              </div>
            </div>
            <h2 className="text-[#181611] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">COMPLETED Orders</h2>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="flex flex-col justify-center">
                <p className="text-[#181611] text-base font-medium leading-normal line-clamp-1">Order #111213</p>
                <p className="text-[#8a8060] text-sm font-normal leading-normal line-clamp-2">Completed</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="flex flex-col justify-center">
                <p className="text-[#181611] text-base font-medium leading-normal line-clamp-1">Order #141516</p>
                <p className="text-[#8a8060] text-sm font-normal leading-normal line-clamp-2">Completed</p>
              </div>
            </div>
            <h2 className="text-[#181611] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Bots</h2>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="flex flex-col justify-center">
                <p className="text-[#181611] text-base font-medium leading-normal line-clamp-1">Bot 1</p>
                <p className="text-[#8a8060] text-sm font-normal leading-normal line-clamp-2">Idle</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
              <div className="flex flex-col justify-center">
                <p className="text-[#181611] text-base font-medium leading-normal line-clamp-1">Bot 2</p>
                <p className="text-[#8a8060] text-sm font-normal leading-normal line-clamp-2">Processing Order #12345</p>
              </div>
              <div className="shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-[88px] overflow-hidden rounded-sm bg-[#e6e3db]"><div className="h-1 rounded-full bg-[#181611]" style={{ width: "56.8182%" }}></div></div>
                  <p className="text-[#181611] text-sm font-medium leading-normal">50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
