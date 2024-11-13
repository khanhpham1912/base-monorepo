import { useEffect, useState } from "react"

export function useWatch<T>(value: T) {
  const [watchValue, setWatchValue] = useState<T>(value)
  useEffect(() => {
    setWatchValue(value)
  }, [value])
  return [watchValue] as const
}
