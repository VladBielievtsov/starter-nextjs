import { cn } from "@/lib/utils";

export function Button({
  children,
  className,
  ...props
}: React.ComponentProps<"button"> &
  Readonly<{
    children: React.ReactNode;
    className?: string;
  }>) {

  return (
    <button
      {...props}
      className={cn("mt-2 cursor-pointer h-9 px-4 py-2 bg-black text-white dark:bg-secondary dark:text-foreground shadow dark:hover:bg-secondary/80 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground disabled:opacity-50 disabled:cursor-default dark:disabled:bg-secondary/80 dark:disabled:text-foreground/80", className)}
    >
      {children}
    </button>
  )
}
