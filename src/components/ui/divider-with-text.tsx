import type {ReactNode} from "react";
import {cn} from "@/lib/utils.ts";

type DividerWithTextProps = {
  children: ReactNode
  className?: string
}

export function DividerWithText({children, className}: DividerWithTextProps) {
  return (
    <div className={cn([className, "flex items-center gap-3 w-full"])}>
      <div className="flex-1 h-px bg-border"/>
      <span className="text-sm font-medium text-gray-300">
        {children}
      </span>
      <div className="flex-1 h-px bg-border"/>
    </div>
  )
}
