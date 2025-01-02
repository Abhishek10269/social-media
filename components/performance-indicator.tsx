interface PerformanceIndicatorProps {
  score: number
  size?: "sm" | "lg"
}

export function PerformanceIndicator({ score, size = "sm" }: PerformanceIndicatorProps) {
  const getColor = (score: number) => {
    if (score >= 80) return "text-green-500"
    if (score >= 60) return "text-yellow-500"
    return "text-red-500"
  }

  const getLabel = (score: number) => {
    if (score >= 80) return "Excellent"
    if (score >= 60) return "Good"
    return "Needs Improvement"
  }

  return (
    <div className="flex items-center gap-2">
      <div
        className={`${getColor(score)} font-bold ${
          size === "lg" ? "text-4xl" : "text-xl"
        }`}
      >
        {score}
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-slate-500 dark:text-slate-400">Performance Score</span>
        <span className={`text-sm ${getColor(score)}`}>{getLabel(score)}</span>
      </div>
    </div>
  )
}

