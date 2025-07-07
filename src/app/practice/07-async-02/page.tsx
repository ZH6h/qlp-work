'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [lastPushDate, setLastPushDate] = useState<string | null>(null);

  useEffect(() => {
    async function asyncDemo() {
      await new Promise<void>((resolve) => {
        setTimeout(function () {
          console.log('🎯 异步任务完成');
          resolve();
        }, 2000);
      });
    }
    asyncDemo().then(
      () => console.log('✅ 异步函数执行成功')
    );
    console.log('🚀 同步代码继续执行');

    async function getLastPushedDate(owner: string, repo: string) {
      const url = `https://api.github.com/repos/${owner}/${repo}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('网络请求失败');
        }
        const data = await response.json();
        return data.pushed_at as string;
      } catch (error) {
        console.error('❌ 获取推送日期失败:', error);
        return null;
      }
    }

    getLastPushedDate('yangjh-xbmu', 'Web-develop').then(date => {
      console.log('📅 最后一次推送日期:', date);
      setLastPushDate(date);
    });
  }, []);

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
              数据可视化平台
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              基于现代Web API的实时数据获取与展示平台，集成GitHub数据源。
            </p>
          </div>
        </header>

        <section className="stats-card rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">异步数据处理</h2>
              <ul className="text-slate-600 space-y-1 text-sm">
                <li>• async/await 异步编程模式</li>
                <li>• Promise链式调用处理</li>
                <li>• Fetch API数据获取</li>
                <li>• 实时状态更新机制</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-lg">
            <p className="text-indigo-800 text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              页面加载后会自动从GitHub API获取仓库信息，展示现代异步编程技术
            </p>
          </div>
        </section>

        <section className="stats-card rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-800 mb-6">GitHub仓库数据监控</h3>
            
            <div
              ref={demoRef}
              className="w-full bg-gradient-to-r from-slate-50 to-indigo-50 rounded-xl p-6 border border-slate-200 text-center"
            >
              {lastPushDate ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-slate-700 font-medium">数据获取成功</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-indigo-200">
                    <p className="text-sm text-slate-600 mb-2">最后推送时间</p>
                    <p className="text-lg font-mono text-indigo-700 bg-indigo-50 px-3 py-2 rounded border">
                      {new Date(lastPushDate).toLocaleString('zh-CN')}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-slate-600">正在获取GitHub数据...</span>
                </div>
              )}
            </div>
            
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-2"></div>
                <div className="text-sm font-medium text-slate-800">Async/Await</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                <div className="text-sm font-medium text-slate-800">Promise</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                <div className="text-sm font-medium text-slate-800">Fetch API</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mx-auto mb-2"></div>
                <div className="text-sm font-medium text-slate-800">状态管理</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 