import {Input} from "@/components/ui/input"
import type {ComponentProps, ReactNode} from "react";

type InputWithRightIconProps = {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  onLeftIconClick?: () => void
  onRightIconClick?: () => void
} & ComponentProps<"input">

export function InputWithIcon(
  {
    leftIcon,
    rightIcon,
    onLeftIconClick,
    onRightIconClick,
    ...props
  }: InputWithRightIconProps) {
  const stylesLeftIcon = "absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-muted-foreground"
  const stylesRightIcon = "absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 text-muted-foreground cursor-pointer"
  return (
    <div className="relative">
      {leftIcon &&
        <div className={stylesLeftIcon} onClick={onLeftIconClick}>{leftIcon}</div>
      }

      <Input className="px-8" {...props}/>

      {rightIcon &&
        <div className={stylesRightIcon} onClick={onRightIconClick}>{rightIcon}</div>
      }
    </div>
  )
}
