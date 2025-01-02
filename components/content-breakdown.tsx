import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

interface ContentBreakdownProps {
  data: {
    photos: number
    videos: number
    stories: number
    reels: number
  }
}

export function ContentBreakdown({ data }: ContentBreakdownProps) {
  const chartData = [
    { name: "Photos", value: data.photos, color: "#0ea5e9" },
    { name: "Videos", value: data.videos, color: "#8b5cf6" },
    { name: "Stories", value: data.stories, color: "#f59e0b" },
    { name: "Reels", value: data.reels, color: "#ec4899" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Content Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {chartData.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

