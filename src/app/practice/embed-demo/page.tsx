"use client";
import Link from 'next/link';

export default function EmbedDemoPage() {
  return (
    <div className="min-h-screen text-slate-700">
      <nav className="bg-white/90 backdrop-blur-md text-slate-700 p-6 shadow-sm border-b border-slate-200/50 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>返回作品集</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-lg font-bold text-slate-800">智能问答系统</span>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section className="container mx-auto px-6 py-6 max-w-4xl">
          <div className="glass-card rounded-2xl p-6 mb-4 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800 mb-2">项目特色</h2>
                <ul className="text-slate-600 space-y-1 text-sm">
                  <li>• 基于QAnything技术的智能问答平台集成</li>
                  <li>• iframe技术实现第三方服务无缝嵌入</li>
                  <li>• 现代化UI设计，优化用户体验</li>
                  <li>• 支持全屏交互，实时智能对话</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full" style={{ height: 'calc(100vh - 200px)' }}>
          <iframe
            src="https://ai.youdao.com/saas/qanything/#/home"
            title="智能问答系统 - QAnything"
            width="100%"
            height="100%"
            className="border-0 shadow-lg"
            allowFullScreen
          />
        </div>
      </main>
    </div>
  );
} 