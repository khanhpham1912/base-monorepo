import { composeRefs } from "@/hooks"
import { getElementRef, mergeProps } from "@/utils/html"
import * as React from "react"

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

interface ComponentCloneProps {
  children: React.ReactNode
}

const IconWrapper = React.forwardRef<HTMLElement, IconProps>(
  (props, forwardedRef) => {
    const { children, ...slotProps } = props
    const isSvg = React.useMemo(
      () =>
        React.isValidElement(children) && children.type.toString() === "svg",
      [children],
    )
    return (
      <ComponentClone {...slotProps} ref={forwardedRef}>
        {isSvg ? <span>{children}</span> : children}
      </ComponentClone>
    )
  },
)

IconWrapper.displayName = "IconWrapper"

const ComponentClone = React.forwardRef<any, ComponentCloneProps>(
  (props, forwardedRef) => {
    const { children, ...slotProps } = props

    if (React.isValidElement(children)) {
      const childrenRef = getElementRef(children)
      return React.cloneElement(children, {
        ...mergeProps(slotProps, children.props),
        // @ts-ignore
        ref: forwardedRef
          ? composeRefs(forwardedRef, childrenRef)
          : childrenRef,
      })
    }

    return null
  },
)

ComponentClone.displayName = "ComponentClone"

export { IconWrapper }
export type { IconProps }
