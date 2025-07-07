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
              自适应布局系统
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              深度运用CSS盒模型和Flexbox技术，展示CSS样式引入的三种经典方法及其最佳实践。
            </p>
          </div>
        </header>

        <section className="stats-card rounded-2xl p-8 shadow-lg">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">CSS样式引入方式演示</h2>
            <p className="text-slate-600">展示外部样式表、内部样式表和内联样式的实际应用与优先级</p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-slate-800 mb-4">三种样式引入方式对比</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <h4 className="font-semibold text-green-800">外部样式表 (External Stylesheet)</h4>
                  </div>
                  <p className="text-green-700 leading-relaxed mb-2">
                    通过链接外部CSS文件定义样式，具有最佳的可维护性和重用性。本项目的全局样式由 globals.css 提供。
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r">
                    <code className="text-sm text-green-800">&lt;link rel=&ldquo;stylesheet&rdquo; href=&ldquo;styles.css&rdquo;&gt;</code>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <h4 className="font-semibold text-yellow-800">内部样式表 (Internal Stylesheet)</h4>
                  </div>
                  <p className="text-yellow-700 leading-relaxed mb-2 underline decoration-wavy">
                    在HTML文档的&lt;head&gt;部分定义样式，适用于单个页面的特定样式需求。现代框架中常通过CSS-in-JS实现。
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r">
                    <code className="text-sm text-yellow-800">&lt;style&gt; .className {"{"}{"color: yellow;"}{"}"} &lt;/style&gt;</code>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <h4 className="font-semibold" style={{ color: '#FBBF24' }}>内联样式 (Inline Style)</h4>
                  </div>
                  <p style={{ color: '#8A2BE2', fontWeight: 'bold' }} className="leading-relaxed mb-2">
                    直接在HTML元素上通过style属性定义样式，具有最高的CSS优先级，适用于动态样式调整。
                  </p>
                  <div className="bg-purple-50 border-l-4 border-purple-400 p-3 rounded-r">
                    <code className="text-sm text-purple-800">&lt;p style="color: purple; font-weight: bold;"&gt;</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-medium text-blue-800 mb-4">CSS优先级规则</h3>
              <div className="space-y-2 text-blue-700">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-purple-600">1.</span>
                  <span>内联样式 (style属性) - 最高优先级</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-yellow-600">2.</span>
                  <span>内部样式表 (&lt;style&gt;标签)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-green-600">3.</span>
                  <span>外部样式表 (链接CSS文件) - 基础优先级</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  💡 在现代开发中，推荐使用外部样式表配合CSS模块化和预处理器来管理样式
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 