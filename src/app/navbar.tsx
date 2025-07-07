import Link from "next/link";

export default function DdddddNavbar() {
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