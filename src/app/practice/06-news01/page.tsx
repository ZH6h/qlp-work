'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // 类和对象
    class Student {
      name: string;
      age: number;
      school: string;
      grade: number;
      constructor(name: string, age: number, school: string, grade: number) {
        this.name = name;
        this.age = age;
        this.school = school;
        this.grade = grade;
      }
      learn(subject = '编程') {
        console.log(`${this.name}正在学习${subject}，持续进步！`);
      }
      exam() {
        console.log(`${this.name} 正在参加考试`);
      }
    }
    const student = new Student('张同学', 20, '科技大学', 2);
    student.learn('前端开发');
    student.exam();

    class Developer extends Student {
      specialty: string;
      experience: number;
      constructor(name: string, age: number, school: string, grade: number, specialty: string, experience: number) {
        super(name, age, school, grade);
        this.specialty = specialty;
        this.experience = experience;
      }
      code(project: string) {
        console.log(`${this.name}正在开发${project}项目，获得宝贵经验！`);
        super.exam();
      }
    }
    const developer = new Developer('李开发', 22, '科技大学', 4, '前端开发', 2);
    developer.code('作品集网站');

    // 回调函数演示
    console.log('开始执行');
    setTimeout(function () { 
      console.log('延时执行完成'); 
    }, 1000);
    console.log('继续执行');

    // DOM 操作
    if (h1Ref.current) {
      console.log('标题元素:', h1Ref.current);
      h1Ref.current.innerHTML = '🎯 这是动态更新的标题内容（可点击）';
      h1Ref.current.style.color = '#2563eb';
    }
    if (pRef.current) {
      pRef.current.onclick = function () {
        alert('✨ 你点击了交互式段落！这展示了事件绑定功能。');
      };
    }
    alert('🚀 页面加载完成，开始体验交互功能！');
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
              交互式新闻应用
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              集成JavaScript交互功能的新闻应用，提供动态内容加载和用户个性化体验。
            </p>
          </div>
        </header>

        <section className="stats-card rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">高级JavaScript特性</h2>
              <ul className="text-slate-600 space-y-1 text-sm">
                <li>• TypeScript类与继承机制</li>
                <li>• 异步回调函数处理</li>
                <li>• DOM元素操作与事件绑定</li>
                <li>• 用户交互体验优化</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
            <p className="text-amber-800 text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              点击下方的标题和段落，体验JavaScript事件绑定与DOM操作效果
            </p>
          </div>
        </section>

        <section className="stats-card rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col items-center">
            <Image
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="现代校园科技环境"
              width={400}
              height={200}
              className="rounded-xl mb-6 shadow-lg"
            />
            
            <h1
              ref={h1Ref}
              style={{ cursor: 'pointer', transition: 'all 0.3s' }}
              onClick={() => alert('🎉 你点击了标题！这展示了React事件处理。')}
              className="text-3xl font-bold mb-6 text-center hover:text-blue-600 hover:scale-105 transform"
            >
              点击体验交互效果
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 w-full">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">类与继承</h3>
                <p className="text-sm text-blue-700">Student → Developer 继承关系</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">异步回调</h3>
                <p className="text-sm text-green-700">setTimeout 延时执行机制</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">DOM操作</h3>
                <p className="text-sm text-purple-700">动态内容更新与事件绑定</p>
              </div>
            </div>
            
            <p 
              ref={pRef} 
              className="text-lg text-slate-600 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 cursor-pointer hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border border-slate-200 hover:border-blue-300 hover:shadow-lg transform hover:scale-105"
            >
              🖱️ 这是一个可交互的段落，点击我体验事件绑定效果！
            </p>
          </div>
        </section>
      </main>
    </div>
  );
} 