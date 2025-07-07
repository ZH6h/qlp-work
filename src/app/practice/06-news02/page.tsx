'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 汽车类演示
    class Vehicle {
      brand: string;
      model: string;
      year: number;
      constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
      }
      start() {
        console.log(`🚗 ${this.brand} ${this.model} (${this.year}) 启动成功`);
      }
      stop() {
        console.log(`🛑 ${this.brand} ${this.model} 已停车`);
      }
    }
    const vehicle = new Vehicle('Tesla', 'Model 3', 2024);
    vehicle.start();
    vehicle.stop();

    class SmartCar extends Vehicle {
      range: number;
      autopilot: boolean;
      constructor(brand: string, model: string, year: number, range: number, autopilot: boolean = true) {
        super(brand, model, year);
        this.range = range;
        this.autopilot = autopilot;
      }
      charge() {
        console.log(`🔋 ${this.brand} ${this.model} 正在智能充电，续航${this.range}km`);
      }
      enableAutopilot() {
        if (this.autopilot) {
          console.log(`🤖 ${this.brand} ${this.model} 自动驾驶系统已启动`);
        }
      }
    }
    const smartCar = new SmartCar('Tesla', 'Model S', 2024, 500);
    smartCar.start();
    smartCar.charge();
    smartCar.enableAutopilot();

    // 异步回调演示
    console.log('⚡ 程序开始执行');
    setTimeout(function () {
      console.log('⏰ 定时任务完成');
    }, 2000);
    console.log('🚀 程序继续执行');

    // DOM 操作
    if (divRef.current) {
      console.log('🎯 目标元素:', divRef.current);
      divRef.current.innerHTML = '✨ 这是通过JavaScript动态生成的内容（点击体验）';
      divRef.current.onclick = function () {
        alert('🎉 DOM事件绑定成功！你触发了点击事件。');
      };
    }
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
              媒体内容管理系统
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              功能完整的内容管理平台，支持复杂布局设计和高级脚本功能。
            </p>
          </div>
        </header>

        <section className="stats-card rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">面向对象编程演示</h2>
              <ul className="text-slate-600 space-y-1 text-sm">
                <li>• TypeScript类定义与继承体系</li>
                <li>• 构造函数与方法重写机制</li>
                <li>• 异步回调与事件循环</li>
                <li>• DOM元素动态操作</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-r-lg">
            <p className="text-emerald-800 text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              本页面演示了现代汽车管理系统的面向对象设计模式
            </p>
          </div>
        </section>

        <section className="stats-card rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col items-center">
            <Image
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="未来智能汽车"
              width={400}
              height={200}
              className="rounded-xl mb-6 shadow-lg"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-full">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">基础车辆类 (Vehicle)</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 品牌、型号、年份属性</li>
                  <li>• 启动与停车基础方法</li>
                  <li>• 构造函数初始化</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">智能汽车类 (SmartCar)</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 继承Vehicle基础功能</li>
                  <li>• 扩展续航与自动驾驶</li>
                  <li>• 充电与智能功能</li>
                </ul>
              </div>
            </div>
            
            <h1
              ref={h1Ref}
              style={{ cursor: 'pointer', transition: 'all 0.3s' }}
              onClick={() => alert('🚗 欢迎体验智能汽车管理系统！')}
              className="text-3xl font-bold mb-6 text-center hover:text-green-600 hover:scale-105 transform"
            >
              🚗 智能汽车系统演示（点击体验）
            </h1>
            
            <div
              ref={divRef}
              className="text-lg text-slate-600 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 cursor-pointer hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border border-slate-200 hover:border-green-300 hover:shadow-lg transform hover:scale-105 w-full text-center"
            >
              原始内容区域
            </div>
            
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-2"></div>
                <div className="text-sm font-medium text-slate-800">类继承</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                <div className="text-sm font-medium text-slate-800">方法重写</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                <div className="text-sm font-medium text-slate-800">异步回调</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mx-auto mb-2"></div>
                <div className="text-sm font-medium text-slate-800">DOM操作</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 