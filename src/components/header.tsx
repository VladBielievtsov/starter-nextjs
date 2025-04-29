import Link from "next/link";
import { Cat } from 'lucide-react';
import ToggleTheme from "./toggle-theme";

export default function Header() {
  return (
    <header className="h-21">
      <div className="flex items-center justify-between h-full px-6">
        <div>
          <Link href={"/"} className="flex items-center gap-2">
            <Cat />
            <span className="font-medium">starter - nextjs</span>
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          <Link href={"/"} className="font-medium opacity-80 text-foreground/60 hover:text-foreground/100 transition-colors">Home</Link>
          <Link href={"/about"} className="font-medium opacity-80 text-foreground/60 hover:text-foreground/100 transition-colors">About</Link>
          <ToggleTheme />
        </nav>
      </div>
    </header>
  )
}
