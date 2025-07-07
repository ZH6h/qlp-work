'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  useEffect(() => {
    const a = 100;
    console.log(a);
    const api_key = 'demo-key-2024';
    console.log(api_key);
    console.log(typeof a, typeof api_key, typeof true);
    const b = '1';
    console.log(a + b);
    console.log(a + Number(b));
    const c = '100';
    console.log(typeof a, typeof c);
    console.log(a == c);
    console.log(a === c);
    
    // 分支语句
    const current_time = '12:20';
    if (current_time == '12:20') {
      console.log('开始工作！');
    } else {
      console.log('休息时间...');
    }
    
    // for循环
    for (let i = 1; i <= 10; i++) {
      console.log(`循环第${i}次`);
    }
    
    // while循环
    let energy = 60;
    while (energy > 0) {
      console.log('持续工作中...');
      energy = energy - 10;
    }
    
    // 函数
    function intro() {
      console.log('你好，这是一个现代化的JavaScript应用！');
    }
    intro();
    
    function intro2(content: any) {
      console.log('输出内容： ' + String(content));
    }
    console.log(typeof intro2('这是传入的参数'));
    
    function intro3(content1: any, content2: any) {
      console.log('合并内容： ' + String(content1) + String(content2));
    }
    intro3('参数1', '参数2');
    
    function intro4(content: any) {
      console.log(content);
      return content + ' - 已处理';
    }
    const result = intro4('带返回值的函数');
    console.log(result);
    
    alert('🎉 页面加载完成，请查看控制台输出！');
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
              新闻门户平台
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              使用语义化HTML和现代CSS技术构建的新闻资讯平台，注重SEO优化和可访问性。
            </p>
          </div>
        </header>

        <section className="stats-card rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">JavaScript基础演示</h2>
              <ul className="text-slate-600 space-y-1 text-sm">
                <li>• 变量声明与类型判断系统</li>
                <li>• 条件分支与循环控制结构</li>
                <li>• 函数定义与参数传递机制</li>
                <li>• 控制台输出与用户交互</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <p className="text-blue-800 text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              页面加载后会自动执行JavaScript代码，请按 F12 打开浏览器开发者工具查看控制台输出
            </p>
          </div>
        </section>

        <section className="stats-card rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col items-center">
            <Image
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="现代编程环境"
              width={400}
              height={200}
              className="rounded-xl mb-6 shadow-lg"
            />
            <div className="text-center">
              <h3 className="text-xl font-bold text-slate-800 mb-4">JavaScript语法核心概念</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-2"></div>
                  <div className="text-sm font-medium text-slate-800">变量类型</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                  <div className="text-sm font-medium text-slate-800">条件分支</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                  <div className="text-sm font-medium text-slate-800">循环结构</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mx-auto mb-2"></div>
                  <div className="text-sm font-medium text-slate-800">函数定义</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg border border-blue-200">
                <p className="text-slate-700 font-medium">
                  ⚡ 本页面展示了JavaScript编程的核心概念实现
                </p>
                <p className="text-slate-600 text-sm mt-2">
                  无可视化界面内容，所有演示效果请在浏览器控制台中查看
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 