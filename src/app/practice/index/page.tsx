import Link from 'next/link';
import Image from 'next/image';

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
        <section className="glass-card rounded-3xl p-8 mb-12 shadow-xl">
          <h1 className="text-3xl font-bold text-slate-800 mb-6">经典Web首页</h1>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">项目特色</h3>
            <ul className="list-disc list-inside text-blue-700 space-y-1">
              <li>采用纯HTML构建，展示扎实的前端基础技能</li>
              <li>语义化标记，包括标题、段落、超链接、列表、图片、表格和表单</li>
              <li>所有元素均可交互体验，表单功能完整</li>
            </ul>
          </div>
        </section>

        <section className="stats-card rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">HTML5标准演示</h2>
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">语义化标记示例</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              这是一个段落标记示例，其中包含了一个
              <a href="https://yangzh.cn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline mx-1">外部链接</a>
              ，展示了现代Web标准的实现。
            </p>
            
            <div className="bg-slate-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-medium text-slate-800 mb-3">有序列表演示</h4>
              <ol className="list-decimal list-inside text-slate-600 space-y-1">
                <li>HTML5语义化结构</li>
                <li>CSS3样式系统</li>
                <li>JavaScript交互逻辑</li>
                <li>响应式设计实现</li>
              </ol>
            </div>

            <div className="flex gap-6 flex-wrap items-center mb-6">
              <div className="flex-shrink-0">
                <Image 
                  src="/practice/images/th.jpg" 
                  alt="项目示例图片" 
                  width={200} 
                  height={120} 
                  className="rounded-lg shadow-md border border-slate-200"
                />
              </div>
              <div className="flex-shrink-0">
                <Image 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                  alt="现代Web技术" 
                  width={200} 
                  height={120} 
                  className="rounded-lg shadow-md border border-slate-200"
                />
              </div>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-slate-300 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 p-3 text-left font-medium text-slate-800">技术栈</th>
                    <th className="border border-slate-300 p-3 text-left font-medium text-slate-800">应用场景</th>
                    <th className="border border-slate-300 p-3 text-left font-medium text-slate-800">优势特点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 p-3 text-slate-600">HTML5</td>
                    <td className="border border-slate-300 p-3 text-slate-600">结构标记</td>
                    <td className="border border-slate-300 p-3 text-slate-600">语义化清晰</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-3 text-slate-600">CSS3</td>
                    <td className="border border-slate-300 p-3 text-slate-600">样式设计</td>
                    <td className="border border-slate-300 p-3 text-slate-600">视觉效果丰富</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3 text-slate-600">JavaScript</td>
                    <td className="border border-slate-300 p-3 text-slate-600">交互逻辑</td>
                    <td className="border border-slate-300 p-3 text-slate-600">用户体验优秀</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-medium text-slate-800 mb-4">搜索功能演示</h4>
              <form action="https://search.douban.com/book/subject_search" method="get" className="flex gap-3 items-center">
                <input 
                  type="text" 
                  name="search_text" 
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="输入书名进行搜索..." 
                />
                <input 
                  type="submit" 
                  value="搜索" 
                  className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors cursor-pointer shadow-sm" 
                />
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 