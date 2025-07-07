import { Suspense } from 'react';

async function getWakaTimeStats() {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) {
    console.error("WakaTime API key is not set.");
    return "API Key Not Configured";
  }

  try {
    const url = `https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=${apiKey}`;
    
    const response = await fetch(
      url,
      {
        next: {
          revalidate: 3600, // 每小时重新获取一次数据
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`WakaTime API request failed with status: ${response.status}`);
      console.error(`WakaTime API error response: ${errorText}`);
      return "Error Fetching Data";
    }

    const stats = await response.json();
    return stats.data?.text || "No activity yet";
  } catch (error) {
    console.error("Failed to fetch WakaTime stats:", error);
    return "Server Error";
  }
}

async function WakaTimeData() {
    const stats = await getWakaTimeStats();
    return (
        <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stats}</div>
            <div className="text-slate-600 font-medium">总编码时长</div>
            <div className="text-sm text-slate-500 mt-1">通过WakaTime实时记录</div>
        </div>
    );
}

export default function WakaTimeStats() {
  return (
    <div className="stats-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold text-slate-800">开发统计</h3>
        </div>
        <Suspense fallback={
            <div className="text-center">
                <div className="text-3xl font-bold text-slate-400 mb-2">--</div>
                <div className="text-slate-600 font-medium">正在加载...</div>
                <div className="text-sm text-slate-500 mt-1">获取编码时长数据</div>
            </div>
        }>
            <WakaTimeData />
        </Suspense>
    </div>
  );
} 