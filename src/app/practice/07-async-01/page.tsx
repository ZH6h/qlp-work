'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [tableHtml, setTableHtml] = useState('');

  useEffect(() => {
    setTimeout(() => {
      console.log('⏰ 定时器任务执行');
    }, 2000);
    console.log('🚀 主线程继续运行');

    function promiseDemo() {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log('✅ Promise任务完成');
          resolve();
        }, 1000);
      });
    }
    promiseDemo().then(() => {
      console.log('🎯 Promise链式调用完成');
    });

    async function asyncAwaitDemo() {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log('💫 async/await任务完成');
          resolve();
        }, 1000);
      });
    }
    (async () => {
      await asyncAwaitDemo();
      console.log('⚡ async/await执行完毕');
    })();

    async function getAllCommitDates(owner: string, repo: string) {
      const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('网络响应失败');
        }
        const commits = await response.json();
        const dates = commits.map((commit: any) => commit.commit.author.date);
        return dates;
      } catch (error) {
        console.error('❌ 获取提交数据失败:', error);
        return [];
      }
    }

    function renderCommitTable(dates: string[]) {
      let html = '<div class="overflow-x-auto"><table class="w-full border-collapse border border-slate-300 rounded-lg overflow-hidden">';
      html += '<thead><tr class="bg-blue-100"><th class="p-3 border border-slate-300 text-left font-medium text-slate-800">序号</th><th class="p-3 border border-slate-300 text-left font-medium text-slate-800">提交时间</th></tr></thead><tbody>';
      dates.forEach((date, idx) => {
        const formattedDate = new Date(date).toLocaleString('zh-CN');
        const rowClass = idx % 2 === 0 ? 'bg-white' : 'bg-slate-50';
        html += `<tr class="${rowClass}"><td class="p-3 border border-slate-300 text-slate-700">${idx + 1}</td><td class="p-3 border border-slate-300 text-slate-700">${formattedDate}</td></tr>`;
      });
      html += '</tbody></table></div>';
      setTableHtml(html);
    }

    getAllCommitDates('yangjh-xbmu', 'Web-develop')
      .then(dates => {
        console.log('📊 获取到提交记录:', dates.length, '条');
        renderCommitTable(dates);
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
              开发者协作平台
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              集成版本控制系统的现代化开发者协作平台，实时展示项目提交历史。
            </p>
          </div>
        </header>

        <section className="stats-card rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">异步编程与API集成</h2>
              <ul className="text-slate-600 space-y-1 text-sm">
                <li>• setTimeout定时器机制</li>
                <li>• Promise异步处理模式</li>
                <li>• async/await语法糖应用</li>
                <li>• Fetch API与GitHub集成</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <p className="text-blue-800 text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              页面会自动获取GitHub提交记录并生成表格，演示完整的异步数据处理流程
            </p>
          </div>
        </section>

        <section className="stats-card rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2 2 2 0 00-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">项目提交历史</h3>
            <p className="text-slate-600">实时从GitHub API获取的项目提交记录</p>
          </div>
          
          {tableHtml ? (
            <div className="bg-slate-50 rounded-xl p-6" dangerouslySetInnerHTML={{ __html: tableHtml }} />
          ) : (
            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-slate-600 font-medium">正在获取提交数据...</span>
              </div>
              <p className="text-sm text-slate-500">请稍候，正在从GitHub API加载数据</p>
            </div>
          )}
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mx-auto mb-2"></div>
              <div className="text-sm font-medium text-slate-800">setTimeout</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mx-auto mb-2"></div>
              <div className="text-sm font-medium text-slate-800">Promise</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
              <div className="text-sm font-medium text-slate-800">async/await</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-2"></div>
              <div className="text-sm font-medium text-slate-800">fetch API</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 