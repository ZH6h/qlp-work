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
              现代UI组件库
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              基于CSS3的现代化UI组件系统，展示选择器优化、动画效果和用户界面设计的最佳实践。
            </p>
          </div>
        </header>

        <section className="stats-card rounded-2xl p-8 shadow-lg">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">CSS选择器演示</h2>
            <p className="text-slate-600">展示标签选择器、类选择器、ID选择器和伪类选择器的实际应用</p>
          </div>

          <div className="space-y-6">
            {/* 标题演示 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-2" style={{ fontFamily: 'monospace' }}>
                CSS3技术演示
              </h3>
              <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">标签选择器应用</span>
            </div>
            
            {/* ID选择器演示 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h4 id="CSSbase" className="text-xl font-semibold text-green-800 mb-2">
                CSS语法核心基础
              </h4>
              <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">ID选择器 (#CSSbase)</span>
            </div>
            
            {/* 类选择器演示 */}
            <div className="abstract bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-400">
              <p className="text-purple-800 italic leading-relaxed mb-2">
                这是一个应用了类选择器的摘要段落，展示了CSS类选择器的灵活性和可重用性。
                通过类选择器可以为多个元素应用相同的样式规则。
              </p>
              <span className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded">类选择器 (.abstract)</span>
            </div>

            {/* 伪类选择器演示 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <h4 className="text-lg font-medium text-slate-800 mb-4">伪类选择器交互演示</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                以下链接演示了不同的伪类选择器效果：
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#demo1" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  🔗 悬停效果链接
                </a>
                <a href="#demo2" className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 visited:bg-purple-800">
                  📝 访问状态链接
                </a>
                <a href="#demo3" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 active:bg-green-800 transition-all duration-300">
                  ⚡ 激活状态链接
                </a>
              </div>
              
              <div className="mt-4 p-3 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600">
                  💡 这些链接展示了 :hover、:visited、:active 等伪类选择器的实际应用效果
                </p>
              </div>
            </div>

            {/* 技术特点说明 */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h4 className="text-lg font-medium text-slate-800 mb-4">技术特点</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-600">响应式设计</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-600">优化选择器性能</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-600">现代动画效果</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-slate-600">跨浏览器兼容</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 