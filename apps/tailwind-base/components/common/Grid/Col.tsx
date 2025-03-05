import * as React from "react"

import { cn } from "@/utils/classNames"
import { useContext, useMemo } from "react"
import { RowContext } from "./RowContext"

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
  children: React.ReactNode
}

const Col = React.forwardRef<HTMLDivElement, ColProps>(
  ({ className, xs, sm, md, lg, xl, xxl, children, ...props }, ref) => {
    const { layout } = useContext(RowContext)
    const prefixLayoutCls = useMemo(
      () => (layout === "vertical" ? "row" : "col"),
      [layout],
    )
    // xs is the remaining media
    const xsLayoutGen = useMemo(
      () => `${prefixLayoutCls}-span-${xs}`,
      [xs, prefixLayoutCls],
    )
    const smLayoutGen = useMemo(
      () => `sm:${prefixLayoutCls}-span-${xs}`,
      [xs, prefixLayoutCls],
    )
    const mdLayoutGen = useMemo(
      () => `md:${prefixLayoutCls}-span-${md}`,
      [md, prefixLayoutCls],
    )
    const lgLayoutGen = useMemo(
      () => `lg:${prefixLayoutCls}-span-${lg}`,
      [lg, prefixLayoutCls],
    )
    const xlLayoutGen = useMemo(
      () => `xl:${prefixLayoutCls}-span-${xl}`,
      [xl, prefixLayoutCls],
    )
    const xxlLayoutGen = useMemo(
      () => `2xl:${prefixLayoutCls}-span-${xxl}`,
      [xxl, prefixLayoutCls],
    )

    return (
      <div
        className={cn(
          {
            [xsLayoutGen]: !!xs,
            [smLayoutGen]: !!sm,
            [mdLayoutGen]: !!md,
            [lgLayoutGen]: !!lg,
            [xlLayoutGen]: !!xl,
            [xxlLayoutGen]: !!xxl,
          },
          className,
        )}
        ref={ref}
        {...props}
      >
        <>{children}</>
      </div>
    )
  },
)
Col.displayName = "Col"

export { Col, type ColProps }
