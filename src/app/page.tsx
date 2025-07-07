import Link from "next/link";
import DdddddExerciseCard, { ExerciseCardProps } from "./exercise-card";
import exercisesData from './exercises.json';
import WakaTimeStats from "./wakatime-stats";

function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md text-slate-700 p-6 shadow-sm w-full z-50 border-b border-slate-200/50">
      <div className="container mx-auto flex justify-between items-center max-w-6xl">
        <Link href="/" className="text-2xl font-bold hover:text-blue-600 transition-colors duration-300 tracking-wide text-slate-800">
          作品集
        </Link>
        <div className="space-x-8 text-base font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors duration-300">首页</Link>
          <Link href="/archive" className="hover:text-blue-600 transition-colors duration-300">项目归档</Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors duration-300">关于我</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors duration-300">联系方式</Link>
        </div>
      </div>
    </nav>
  );
}

// 统计数据组件
function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
      <div className="stats-card rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="text-4xl font-bold text-blue-600 mb-2">{exercisesData.length}+</div>
        <div className="text-slate-600 font-medium">完成项目</div>
        <div className="text-sm text-slate-500 mt-1">涵盖前端开发各个领域</div>
      </div>
      <div className="stats-card rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
        <div className="text-slate-600 font-medium">代码质量</div>
        <div className="text-sm text-slate-500 mt-1">注重代码规范与最佳实践</div>
      </div>
      <div className="stats-card rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
        <div className="text-slate-600 font-medium">开发时长</div>
        <div className="text-sm text-slate-500 mt-1">持续学习与技术精进</div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen text-slate-700">
      <Navbar />

      <main className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Hero Section */}
        <header className="text-center mb-16 pt-8">
          <div className="glass-card rounded-3xl p-12 mb-12 shadow-xl">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              前端开发项目
              <span className="block text-blue-600 text-4xl md:text-5xl mt-2">作品集展示</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              探索现代Web开发技术，展示创新项目成果
            </p>
            <div className="mt-8">
              <Link 
                href="#projects" 
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                查看项目
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <StatsSection />

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">精选项目展示</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              以下是我在前端开发学习过程中完成的一些代表性项目
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exercisesData.map((exercise: ExerciseCardProps) => (
              <DdddddExerciseCard
                key={exercise.id}
                id={exercise.id}
                title={exercise.title}
                description={exercise.description}
                imageUrl={exercise.imageUrl}
                link={exercise.link}
                tags={exercise.tags}
              />
            ))}
          </div>
        </section>

        {/* WakaTime Stats */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">开发时间统计</h2>
            <p className="text-lg text-slate-600">
              通过WakaTime记录的真实开发时间和技术栈使用情况
            </p>
          </div>
          <WakaTimeStats />
        </section>
      </main>
    </div>
  );
}
