import { ThemeProvider } from "@/components/providers/theme-provider";
import { DEFAULT_THEME } from "@/lib/constants";

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider defaultTheme={DEFAULT_THEME} attribute="class">
      {children}
    </ThemeProvider>
  );
}
