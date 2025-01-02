import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

interface ComparativeMetricsProps {
  userData: {
    engagement: number
    followers: number
    posts: number
  }
  avgData: {
    engagement: number
    followers: number
    posts: number
  }
}

export function ComparativeMetrics({ userData, avgData }: ComparativeMetricsProps) {
  const data = [
    {
      metric: "Engagement",
      User: userData.engagement,
      Average: avgData.engagement,
    },
    {
      metric: "Followers",
      User: userData.followers / 1000, // Convert to K
      Average: avgData.followers / 1000,
    },
    {
      metric: "Posts",
      User: userData.posts,
      Average: avgData.posts,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Comparison with Average</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="metric" />
              <YAxis />
              <Bar dataKey="User" fill="#0ea5e9" />
              <Bar dataKey="Average" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#0ea5e9]" />
            <span className="text-sm">User</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#8b5cf6]" />
            <span className="text-sm">Average</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

