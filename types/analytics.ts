export interface TopPost {
  id: number
  likes: number
  comments: number
  shares: number
  reach: number
  date: string
}

export interface TimeSeriesData {
  date: string
  followers: number
  engagement: number
  reach?: number
  impressions?: number
}

export interface UserDetails {
  topPosts: TopPost[]
  reachGrowth: string
  avgLikesPerPost: number
  growthData: TimeSeriesData[]
  engagementData: TimeSeriesData[]
  performanceScore: number
  contentBreakdown: {
    photos: number
    videos: number
    stories: number
    reels: number
  }
}

export interface User {
  id: number
  username: string
  avatar: string
  posts: number
  likes: number
  comments: number
  shares: number
  reels: number
  followers: number
  engagement: string
  details: UserDetails
}

