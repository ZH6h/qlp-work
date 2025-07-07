export default function MyAppHello() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">👋</span>
        </div>
        <h3 className="text-xl font-bold text-slate-800">欢迎体验</h3>
      </div>
      <p className="text-slate-700 leading-relaxed">
        欢迎来到现代化的Web开发世界！这里展示了前端技术的无限可能。
      </p>
      <div className="mt-4 flex gap-2">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">现代化</span>
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">响应式</span>
        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">用户友好</span>
      </div>
    </div>
  );
} 