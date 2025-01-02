export function calculatePerformanceScore(user: any): number {
  // Normalize values between 0 and 1
  const normalizeValue = (value: number, max: number) => Math.min(value / max, 1)

  // Weight factors (total = 1)
  const weights = {
    engagement: 0.4,
    growth: 0.3,
    consistency: 0.3,
  }

  // Calculate engagement score
  const engagementScore = normalizeValue(parseFloat(user.engagement), 10) * 100

  // Calculate growth score
  const growthRate = parseFloat(user.details.reachGrowth) / 100
  const growthScore = normalizeValue(growthRate * 100, 30) * 100

  // Calculate consistency score
  const postsPerMonth = user.posts / 3 // Assuming 3 months of data
  const consistencyScore = normalizeValue(postsPerMonth, 30) * 100

  // Calculate weighted average
  const finalScore = (
    engagementScore * weights.engagement +
    growthScore * weights.growth +
    consistencyScore * weights.consistency
  )

  return Math.round(finalScore)
}

