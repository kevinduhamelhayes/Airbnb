import Link from "next/link";
import { ThemeToggle } from "../ui/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="font-bold">Airbnb Clone</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link
            href="/listings"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Listings
          </Link>
          <Link
            href="/host"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Become a Host
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
} 