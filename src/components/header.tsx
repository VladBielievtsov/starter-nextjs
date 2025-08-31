import Link from "next/link";
import { Link as CustomLink } from "@/components/common/link";
import { Cat, Github, Twitter } from 'lucide-react';
import ToggleTheme from "./toggle-theme";
import { MY_LINK } from "@/lib/constants";

export default function Header() {
  const LINKS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ]

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
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-normal text-subtext0 hover:text-foreground transition-colors"
            >{link.label}</Link>
          ))}
          <div>
            <CustomLink
              href={MY_LINK.TWITTER}
              target="_blank"
              variant={"ghost"}
              size={"icon"}
              className="text-subtext0 hover:text-foreground transition-colors"
            >
              <Twitter size={19} />
            </CustomLink>
            <CustomLink
              href={MY_LINK.GITHUB}
              target="_blank"
              variant={"ghost"}
              size={"icon"}
              className="text-subtext0 hover:text-foreground transition-colors"
            >
              <Github size={19} />
            </CustomLink>
            <ToggleTheme />
          </div>
        </nav>
      </div>
    </header>
  )
}
