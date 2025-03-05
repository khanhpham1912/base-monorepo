import { cn } from "@/utils/classNames"
import { Show } from "../Show"
import React from "react"

type LabelPosition = "start" | "end" | "center"

export const Divider = ({
  // soft for 2nd divider
  soft = false,
  label,
  labelPosition = "center",
  className,
  ...props
}: {
  soft?: boolean
  label?: React.ReactNode
  labelPosition?: LabelPosition
} & React.ComponentPropsWithoutRef<"hr">) => {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <hr
          {...props}
          className={cn(
            className,
            "w-full items-center border-t",
            soft && "border-zinc-950/5 dark:border-white/5",
            !soft && "border-zinc-950/10 dark:border-white/10",
          )}
        />
      </div>
      <Show when={!!label}>
        <div
          className={cn("relative flex", {
            "justify-start": labelPosition === "start",
            "justify-center": labelPosition === "center",
            "justify-end": labelPosition === "end",
          })}
        >
          <Show
            // detect when label !== number | string
            when={typeof label === "object"}
            fallback={<span className="bg-white px-2">{label}</span>}
          >
            {label}
          </Show>
        </div>
      </Show>
    </div>
  )
}
