import React from "react";
import { cn } from "@/lib/utils";

function IndexedCardGroup({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const items = React.Children.toArray(children);
  return (
    <div className={cn(className)}>
      {items.map((child, i) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ index: number }>, {
              index: i + 1,
            })
          : child,
      )}
    </div>
  );
}

function IndexedCard({
  className,
  children,
  index,
  title,
}: {
  className?: string;
  children: React.ReactNode;
  index?: number;
  title?: string;
}) {
  const label = index !== undefined ? String(index).padStart(2, "0") : "";

  return (
    <div className={cn("w-full flex flex-col gap-3", className)}>
      {/* 顶部装饰矩形：左红右黑，斜线分割 */}
      <div className="relative w-full h-13 overflow-hidden">
        {/* 左侧红色：clip-path 保留斜线左边部分 */}
        <div
          className="absolute inset-0 bg-red-500"
          style={{
            clipPath:
              "polygon(0 0, calc(min(calc(80% - 0.5rem), calc(100% - 8rem)) + 3.25rem) 0, min(calc(80% - 0.5rem), calc(100% - 8rem)) 100%, 0 100%)",
          }}
        />
        {/* 右侧黑色：clip-path 保留斜线右边部分 */}
        <div
          className="absolute inset-0 bg-black"
          style={{
            clipPath:
              "polygon(calc(min(calc(80% + 0.5rem), calc(100% - 7rem)) + 3.25rem) 0, 100% 0, 100% 100%, min(calc(80% + 0.5rem), calc(100% - 7rem)) 100%)",
          }}
        />
        {/* 标题：红色梯形左侧，垂直居中 */}
        {title && (
          <span className="absolute left-4 top-0 h-full flex items-center text-white font-bold text-3xl">
            {title}
          </span>
        )}
        {/* 序号：叠加在黑色梯形上，空心白字 */}
        <span
          className="absolute right-0 top-0 w-[10%] h-full flex items-center justify-center text-4xl font-bold"
          style={{
            color: "white",
            fontFamily: '"Microsoft YaHei", "微软雅黑", sans-serif',
          }}
        >
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

export { IndexedCardGroup, IndexedCard };
