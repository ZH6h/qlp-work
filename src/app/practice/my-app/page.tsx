import Link from 'next/link';
import Image from 'next/image';
import MyAppDemo from "../my-app-demo";
import MyAppHello from "../my-app-hello";

export default function MyAppHome() {
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
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <Image 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="响应式Web应用" 
                width={280} 
                height={180} 
                className="rounded-2xl shadow-lg" 
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-4">响应式Web应用</h1>
              <p className="text-slate-600 mb-4 leading-relaxed">
                采用React框架构建的现代化单页应用，展示组件化开发和响应式设计的最佳实践。
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200">React</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200">响应式设计</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200">SPA</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-card rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">组件演示区</h2>
          <div className="space-y-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <MyAppDemo />
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <MyAppHello />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 