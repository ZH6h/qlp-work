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
              精准定位系统
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              利用CSS相对定位和绝对定位技术，实现像素级精确的页面元素控制和复杂布局设计。
            </p>
          </div>
        </header>

        <div className="space-y-8">
          
          {/* Section: Relative vs Absolute */}
          <section className="stats-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                </svg>
              </div>
              相对定位 vs 绝对定位
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6">
              <p className="text-blue-800 text-sm">
                <strong>绝对定位 (absolute)</strong> 的元素会相对于其最近的非static定位祖先元素进行定位，
                如果找不到则相对于初始包含块定位。
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-xl h-80 relative border-2 border-dashed border-slate-300">
              <div className="absolute top-2 left-2 text-xs text-slate-500 bg-white px-2 py-1 rounded">
                父容器 (position: relative)
              </div>
              
              <div className="w-48 h-20 bg-white border-2 border-slate-300 rounded-lg p-4 text-center shadow-sm">
                <p className="font-medium text-slate-800">默认位置元素</p>
                <p className="text-xs text-slate-500">(position: static)</p>
              </div>

              <div className="w-48 h-20 bg-rose-100 border-2 border-rose-300 rounded-lg p-4 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg">
                <p className="font-medium text-rose-800">绝对定位元素</p>
                <p className="text-xs text-rose-600">top: 50%; left: 50%</p>
              </div>

               <div className="w-48 h-20 bg-indigo-100 border-2 border-indigo-300 rounded-lg p-4 text-center absolute bottom-4 right-4 shadow-lg">
                <p className="font-medium text-indigo-800">另一个绝对元素</p>
                <p className="text-xs text-indigo-600">bottom: 1rem; right: 1rem</p>
              </div>
            </div>
          </section>

          {/* Section: Fixed */}
          <section className="stats-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              固定定位 (Fixed)
            </h2>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg mb-6">
              <p className="text-green-800 text-sm">
                <strong>固定定位 (fixed)</strong> 的元素相对于浏览器视口定位，
                即使页面滚动也会保持在相同位置。
              </p>
            </div>
            
            <div className="h-48 flex justify-center items-center bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <p className="text-slate-600">向下滚动页面，观察右下角的固定元素</p>
                </div>
            </div>
          </section>

          {/* 技术特点说明 */}
          <section className="bg-slate-50 rounded-xl p-6">
            <h3 className="text-lg font-medium text-slate-800 mb-4">定位技术对比</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="w-3 h-3 bg-gray-400 rounded-full mb-2"></div>
                <h4 className="font-medium text-slate-800 mb-1">Static</h4>
                <p className="text-xs text-slate-600">默认定位，文档流中</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mb-2"></div>
                <h4 className="font-medium text-slate-800 mb-1">Relative</h4>
                <p className="text-xs text-slate-600">相对自身原位置</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="w-3 h-3 bg-blue-400 rounded-full mb-2"></div>
                <h4 className="font-medium text-slate-800 mb-1">Absolute</h4>
                <p className="text-xs text-slate-600">相对最近定位祖先</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="w-3 h-3 bg-green-400 rounded-full mb-2"></div>
                <h4 className="font-medium text-slate-800 mb-1">Fixed</h4>
                <p className="text-xs text-slate-600">相对浏览器视口</p>
              </div>
            </div>
          </section>

          {/* This is the fixed element */}
          <div className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 text-white font-bold rounded-full shadow-xl flex justify-center items-center z-50 animate-bounce hover:animate-pulse cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>

        </div>

        {/* Add some space to allow for scrolling */}
        <div className="h-96"></div>

      </main>
    </div>
  );
} 