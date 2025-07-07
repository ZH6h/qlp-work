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
              动态交互界面
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              运用高级CSS技术，展示盒模型、布局系统(Flexbox)和过渡动画的现代化实现。
            </p>
          </div>
        </header>

        <div className="space-y-8">
          
          {/* Section: Box Model */}
          <section className="stats-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              CSS盒模型 (Box Model)
            </h2>
            <p className="text-slate-600 mb-6">
              CSS盒模型是网页布局的基础，定义了元素的空间占用方式：内容 → 内边距 → 边框 → 外边距
            </p>
            <div className="flex justify-center items-center bg-slate-50 p-10 rounded-xl">
              <div className="relative">
                <div className="bg-red-100 border-2 border-red-300 rounded-lg p-8">
                  <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-6">
                    <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-6 text-center">
                      <span className="text-blue-800 font-medium">内容区域</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-8 left-0 text-xs text-red-600 font-medium">Margin</div>
                <div className="absolute -top-8 left-20 text-xs text-yellow-600 font-medium">Border</div>
                <div className="absolute -top-8 left-40 text-xs text-blue-600 font-medium">Padding</div>
              </div>
            </div>
          </section>

          {/* Section: Layout */}
          <section className="stats-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              现代布局系统
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">Display: inline</h3>
                <p className="text-slate-600 mb-4 text-sm">
                  将块级元素转换为行内元素，可以在同一行内并排显示
                </p>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <div className="inline-block bg-sky-100 text-sky-800 px-3 py-2 rounded m-1">元素一</div>
                  <div className="inline-block bg-sky-100 text-sky-800 px-3 py-2 rounded m-1">元素二</div>
                  <div className="inline-block bg-sky-100 text-sky-800 px-3 py-2 rounded m-1">元素三</div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">Display: flex</h3>
                <p className="text-slate-600 mb-4 text-sm">
                  Flexbox是强大的一维布局模型，提供灵活的元素对齐和分布
                </p>
                <div className="bg-white p-4 rounded-lg border border-slate-200 flex justify-around items-center">
                  <div className="bg-indigo-100 text-indigo-800 px-3 py-2 rounded">Flex 1</div>
                  <div className="bg-indigo-100 text-indigo-800 px-3 py-2 rounded">Flex 2</div>
                  <div className="bg-indigo-100 text-indigo-800 px-3 py-2 rounded">Flex 3</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Animation */}
          <section className="stats-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              CSS过渡动画
            </h2>
            <p className="text-slate-600 mb-6">
              通过transition属性为CSS属性变化添加平滑的动画效果，提升用户体验
            </p>
            <div className="flex justify-center items-center bg-slate-50 rounded-xl p-8">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 flex justify-center items-center text-white font-bold cursor-pointer transition-all duration-500 ease-in-out hover:from-blue-400 hover:to-cyan-400 hover:rounded-full hover:scale-110 hover:rotate-180 hover:shadow-2xl rounded-lg shadow-lg">
                悬停我
              </div>
            </div>
            <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-sm text-purple-800">
                💫 将鼠标悬停在方块上，观察颜色、形状、大小和旋转的平滑过渡效果
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
} 