"use client"

import * as React from "react"
import { useState } from "react"
import { ChevronDown, ChevronUp, Heart, MessageCircle, Share2, Film, Users, TrendingUp, Search, Calendar, Moon, Sun, Download, RefreshCw } from "lucide-react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip as TooltipPrimitive,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PerformanceIndicator } from "@/components/performance-indicator";
import { ContentBreakdown } from "@/components/content-breakdown"
import { ComparativeMetrics } from "@/components/comparative-metrics"
import type { User } from "@/types/analytics"

const users: User[] = [
  {
    id: 1,
    username: "Abhishek Kumar",
    avatar: "/assets/abhi.jpg",
    posts: 245,
    likes: 15234,
    comments: 1234,
    shares: 432,
    reels: 45,
    followers: 23400,
    engagement: "8.5%",
    details: {
      topPosts: [
        { id: 1, likes: 1234, comments: 89, shares: 45, reach: 5600, date: "2024-02-15" },
        { id: 2, likes: 890, comments: 56, shares: 34, reach: 3400, date: "2024-02-10" },
      ],
      reachGrowth: "+15%",
      avgLikesPerPost: 623,
      performanceScore: 85,
      contentBreakdown: {
        photos: 150,
        videos: 45,
        stories: 280,
        reels: 45,
      },
      growthData: [
        { date: "2024-01-01", followers: 20000, engagement: 7.2, reach: 45000, impressions: 55000 },
        { date: "2024-01-15", followers: 21200, engagement: 7.8, reach: 48000, impressions: 58000 },
        { date: "2024-02-01", followers: 22100, engagement: 8.1, reach: 51000, impressions: 62000 },
        { date: "2024-02-15", followers: 23400, engagement: 8.5, reach: 54000, impressions: 65000 },
      ],
      engagementData: [
        { date: "2024-01-01", followers: 20000, engagement: 7.2 },
        { date: "2024-01-15", followers: 21200, engagement: 7.8 },
        { date: "2024-02-01", followers: 22100, engagement: 8.1 },
        { date: "2024-02-15", followers: 23400, engagement: 8.5 },
      ],
    },
  },
  {
    id: 2,
    username: "Suryash Jha",
    avatar: "/assets/suryash.jpg",
    posts: 189,
    likes: 12654,
    comments: 987,
    shares: 345,
    reels: 32,
    followers: 18900,
    engagement: "7.2%",
    details: {
      topPosts: [
        { id: 1, likes: 987, comments: 76, shares: 34, reach: 4200, date: "2024-02-12" },
        { id: 2, likes: 765, comments: 45, shares: 23, reach: 2800, date: "2024-02-05" },
      ],
      reachGrowth: "+12%",
      avgLikesPerPost: 543,
      performanceScore: 72,
      contentBreakdown: {
        photos: 100,
        videos: 40,
        stories: 150,
        reels: 32,
      },
      growthData: [
        { date: "2024-01-01", followers: 16000, engagement: 6.5, reach: 35000, impressions: 40000 },
        { date: "2024-01-15", followers: 17200, engagement: 6.8, reach: 38000, impressions: 43000 },
        { date: "2024-02-01", followers: 18100, engagement: 7.0, reach: 40000, impressions: 46000 },
        { date: "2024-02-15", followers: 18900, engagement: 7.2, reach: 42000, impressions: 48000 },
      ],
      engagementData: [
        { date: "2024-01-01", followers: 16000, engagement: 6.5 },
        { date: "2024-01-15", followers: 17200, engagement: 6.8 },
        { date: "2024-02-01", followers: 18100, engagement: 7.0 },
        { date: "2024-02-15", followers: 18900, engagement: 7.2 },
      ],
    },
  },
  {
    id: 3,
    username: "Vivek Kumar",
    avatar: "/assets/viv.jpg",
    posts: 312,
    likes: 18765,
    comments: 1567,
    shares: 589,
    reels: 67,
    followers: 28900,
    engagement: "9.1%",
    details: {
      topPosts: [
        { id: 1, likes: 1567, comments: 98, shares: 56, reach: 7800, date: "2024-02-20" },
        { id: 2, likes: 1234, comments: 87, shares: 45, reach: 6500, date: "2024-02-18" },
      ],
      reachGrowth: "+18%",
      avgLikesPerPost: 789,
      performanceScore: 91,
      contentBreakdown: {
        photos: 180,
        videos: 60,
        stories: 220,
        reels: 67,
      },
      growthData: [
        { date: "2024-01-01", followers: 24000, engagement: 8.2, reach: 60000, impressions: 70000 },
        { date: "2024-01-15", followers: 25800, engagement: 8.5, reach: 64000, impressions: 75000 },
        { date: "2024-02-01", followers: 27400, engagement: 8.8, reach: 68000, impressions: 80000 },
        { date: "2024-02-15", followers: 28900, engagement: 9.1, reach: 72000, impressions: 85000 },
      ],
      engagementData: [
        { date: "2024-01-01", followers: 24000, engagement: 8.2 },
        { date: "2024-01-15", followers: 25800, engagement: 8.5 },
        { date: "2024-02-01", followers: 27400, engagement: 8.8 },
        { date: "2024-02-15", followers: 28900, engagement: 9.1 },
      ],
    },
  },
  {
    id: 4,
    username: "Shivam rana",
    avatar: "/assets/shiv.jpg",
    posts: 245,
    likes: 15234,
    comments: 1234,
    shares: 432,
    reels: 45,
    followers: 23400,
    engagement: "8.5%",
    details: {
      topPosts: [
        { id: 1, likes: 1234, comments: 89, shares: 45, reach: 5600, date: "2024-02-15" },
        { id: 2, likes: 890, comments: 56, shares: 34, reach: 3400, date: "2024-02-10" },
      ],
      reachGrowth: "+15%",
      avgLikesPerPost: 623,
      performanceScore: 85,
      contentBreakdown: {
        photos: 150,
        videos: 45,
        stories: 280,
        reels: 45,
      },
      growthData: [
        { date: "2024-01-01", followers: 20000, engagement: 7.2, reach: 45000, impressions: 55000 },
        { date: "2024-01-15", followers: 21200, engagement: 7.8, reach: 48000, impressions: 58000 },
        { date: "2024-02-01", followers: 22100, engagement: 8.1, reach: 51000, impressions: 62000 },
        { date: "2024-02-15", followers: 23400, engagement: 8.5, reach: 54000, impressions: 65000 },
      ],
      engagementData: [
        { date: "2024-01-01", followers: 20000, engagement: 7.2 },
        { date: "2024-01-15", followers: 21200, engagement: 7.8 },
        { date: "2024-02-01", followers: 22100, engagement: 8.1 },
        { date: "2024-02-15", followers: 23400, engagement: 8.5 },
      ],
    },
  },
]

// Calculate average metrics for comparison
const averageMetrics = {
  engagement: 7.5,
  followers: 20000,
  posts: 200,
}

export default function AnalyticsDashboard() {
  const [expandedRows, setExpandedRows] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [timeRange, setTimeRange] = useState("30")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const toggleRow = (userId: number) => {
    setExpandedRows((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    )
  }

  // Filter users based on search term
  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Calculate total metrics
  const totalMetrics = filteredUsers.reduce(
    (acc, user) => ({
      posts: acc.posts + user.posts,
      likes: acc.likes + user.likes,
      comments: acc.comments + user.comments,
      shares: acc.shares + user.shares,
      reels: acc.reels + user.reels,
      followers: acc.followers + user.followers,
    }),
    { posts: 0, likes: 0, comments: 0, shares: 0, reels: 0, followers: 0 }
  )

  // Handle data refresh
  const handleRefresh = async () => {
    setIsRefreshing(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsRefreshing(false)
  }

  // Handle data export
  const handleExport = () => {
    const data = JSON.stringify(filteredUsers, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); // Correct element creation
    a.href = url;
    a.download = "analytics-export.json"; // Correct file name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="container mx-auto py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold">User Performance Analytics</h1>
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <TooltipPrimitive>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleRefresh}
                    disabled={isRefreshing}
                  >
                    <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Refresh data</p>
                </TooltipContent>
              </TooltipPrimitive>
            </TooltipProvider>
            <TooltipProvider>
              <TooltipPrimitive>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleExport}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Export data</p>
                </TooltipContent>
              </TooltipPrimitive>
            </TooltipProvider>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-500 dark:text-slate-400" />
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
          <Select
            value={timeRange}
            onValueChange={setTimeRange}
          >
            <SelectTrigger className="w-[180px]">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">Total Engagement</CardTitle>
              <TrendingUp className="h-4 w-4 text-slate-500 dark:text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalMetrics.likes.toLocaleString()}</div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Likes across all users
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">Total Content</CardTitle>
              <Film className="h-4 w-4 text-slate-500 dark:text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalMetrics.posts + totalMetrics.reels}</div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Posts and reels combined
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">Total Followers</CardTitle>
              <Users className="h-4 w-4 text-slate-500 dark:text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalMetrics.followers.toLocaleString()}</div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Across all users
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Table */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]"></TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Posts</TableHead>
                <TableHead>Likes</TableHead>
                <TableHead>Comments</TableHead>
                <TableHead>Shares</TableHead>
                <TableHead>Reels</TableHead>
                <TableHead>Followers</TableHead>
                <TableHead>Engagement</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <React.Fragment key={user.id}>
                  <TableRow>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleRow(user.id)}
                      >
                        {expandedRows.includes(user.id) ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </TableCell>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2 font-bold">
                        <img
                          src={user.avatar}
                          alt={user.username}
                          className="w-8 h-8 rounded-full"
                        />
                        {user.username}
                      </div>
                    </TableCell>
                    <TableCell>
                      <PerformanceIndicator score={user.details.performanceScore} />
                    </TableCell>
                    <TableCell>{user.posts}</TableCell>
                    <TableCell>{user.likes.toLocaleString()}</TableCell>
                    <TableCell>{user.comments.toLocaleString()}</TableCell>
                    <TableCell>{user.shares}</TableCell>
                    <TableCell>{user.reels}</TableCell>
                    <TableCell>{user.followers.toLocaleString()}</TableCell>
                    <TableCell>{user.engagement}</TableCell>
                  </TableRow>
                  {expandedRows.includes(user.id) && (
                    <TableRow key={`${user.id}-expanded`}>
                      <TableCell colSpan={10}>
                        <div className="p-4 bg-slate-100/50 dark:bg-slate-800/50">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            {/* Followers Growth Chart */}
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-sm">Followers Growth</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <ChartContainer
                                  config={{
                                    followers: {
                                      label: "Followers",
                                      color: "#86efac",
                                    },
                                  }}
                                  className="h-[200px]"
                                >
                                  <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={user.details.growthData}>
                                      <XAxis
                                        dataKey="date"
                                        tickFormatter={(value) => new Date(value).toLocaleDateString()}
                                      />
                                      <YAxis />
                                      <ChartTooltip content={<ChartTooltipContent />} />
                                      <Line
                                        type="monotone"
                                        dataKey="followers"
                                        stroke="#86efac"
                                        strokeWidth={3}
                                      />
                                    </LineChart>
                                  </ResponsiveContainer>
                                </ChartContainer>
                              </CardContent>
                            </Card>

                            {/* Engagement Rate Chart */}
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-sm">Engagement Rate Trend</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <ChartContainer
                                  config={{
                                    engagement: {
                                      label: "Engagement Rate",
                                      color: "#ef4444",
                                    },
                                  }}
                                  className="h-[200px]"
                                >
                                  <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={user.details.engagementData}>
                                      <XAxis
                                        dataKey="date"
                                        tickFormatter={(value) => new Date(value).toLocaleDateString()}
                                      />
                                      <YAxis />
                                      <ChartTooltip content={<ChartTooltipContent />} />
                                      <Line
                                        type="monotone"
                                        dataKey="engagement"
                                        stroke="#ef4444"
                                        strokeWidth={3}
                                      />
                                    </LineChart>
                                  </ResponsiveContainer>
                                </ChartContainer>
                              </CardContent>
                            </Card>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <ContentBreakdown data={user.details.contentBreakdown} />
                            <ComparativeMetrics
                              userData={{
                                engagement: parseFloat(user.engagement),
                                followers: user.followers,
                                posts: user.posts,
                              }}
                              avgData={averageMetrics}
                            />
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-sm">Top Posts Performance</CardTitle>
                              </CardHeader>
                              <CardContent>
                                {user.details.topPosts.map((post) => (
                                  <div
                                    key={post.id}
                                    className="flex items-center gap-4 mb-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                                  >
                                    <div className="flex items-center gap-2">
                                      <Heart className="h-4 w-4 text-rose-500" />
                                      <span className="text-sm font-medium">{post.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <MessageCircle className="h-4 w-4 text-blue-500" />
                                      <span className="text-sm font-medium">{post.comments}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Share2 className="h-4 w-4 text-green-500" />
                                      <span className="text-sm font-medium">{post.shares}</span>
                                    </div>
                                  </div>
                                ))}
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

