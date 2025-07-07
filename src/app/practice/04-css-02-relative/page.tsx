import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen text-slate-700">
      <nav className="bg-white/80 backdrop-blur-md text-slate-700 p-6 shadow-sm border-b border-slate-200/50">
        <div className="container mx-auto max-w-6xl">
          <Link href="/" className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>返回作品集</span>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <header className="text-center mb-12">
          <div className="glass-card rounded-3xl p-8 shadow-xl">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              流体布局引擎
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              深度应用相对定位技术，构建自适应的流体布局系统，适配多种设备尺寸。
            </p>
          </div>
        </header>

        <section className="stats-card rounded-2xl p-8 shadow-lg mb-8">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6">
            <p className="text-blue-800 text-sm">
              <strong>相对定位 (position: relative)</strong> 使元素相对于其在正常文档流中的原始位置进行偏移，
              但其原始空间仍被保留，不影响其他元素的布局。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Section: Normal Flow */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4 text-center">正常文档流</h2>
              <div className="space-y-3">
                <div className="p-3 bg-white border border-slate-200 rounded-lg text-center shadow-sm">
                  <span className="text-slate-700 font-medium">元素 1</span>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg text-center shadow-sm">
                  <span className="text-slate-700 font-medium">元素 2</span>
                </div>
                <div className="p-3 bg-blue-100 border-2 border-blue-300 rounded-lg text-center">
                  <span className="text-blue-800 font-medium">元素 3 (目标元素)</span>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg text-center shadow-sm">
                  <span className="text-slate-700 font-medium">元素 4</span>
                </div>
              </div>
            </div>

            {/* Section: Relative Positioning */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4 text-center">相对定位效果</h2>
              <div className="space-y-3 relative">
                <div className="p-3 bg-white border border-slate-200 rounded-lg text-center shadow-sm">
                  <span className="text-slate-700 font-medium">元素 1</span>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg text-center shadow-sm">
                  <span className="text-slate-700 font-medium">元素 2</span>
                </div>
                
                {/* Ghost element showing original position */}
                <div className="p-3 border-2 border-dashed border-slate-300 rounded-lg text-center bg-slate-100/50">
                  <span className="text-slate-400 text-sm">元素 3 的原始位置</span>
                </div>

                {/* The relatively positioned element */}
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-center absolute shadow-lg transform translate-x-8 -translate-y-2 w-[calc(100%-2rem)]">
                  <span className="font-medium">元素 3 (已移动)</span>
                  <div className="text-xs mt-1">relative + left: 2rem + top: -0.5rem</div>
                </div>

                <div className="p-3 bg-white border border-slate-200 rounded-lg text-center shadow-sm">
                  <span className="text-slate-700 font-medium">元素 4</span>
                </div>

                <div className="mt-16 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800 text-center">
                    💡 注意：元素4的位置没有改变，因为元素3在文档流中的空间被保留了
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-slate-50 rounded-xl p-6">
          <h3 className="text-lg font-medium text-slate-800 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            核心代码示例
          </h3>
          <div className="bg-slate-800 text-white p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm">
              <code>{`.target-element {
  position: relative;
  top: -8px;     /* 相对于原始位置向上移动 8px */
  left: 32px;    /* 相对于原始位置向右移动 32px */
  
  /* 其他样式保持不变 */
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}`}</code>
            </pre>
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <h4 className="font-medium text-slate-800 mb-2">空间保留</h4>
              <p className="text-sm text-slate-600">原始空间在文档流中保留</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <h4 className="font-medium text-slate-800 mb-2">相对偏移</h4>
              <p className="text-sm text-slate-600">相对于原始位置进行偏移</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <h4 className="font-medium text-slate-800 mb-2">布局稳定</h4>
              <p className="text-sm text-slate-600">不影响其他元素的位置</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
} 