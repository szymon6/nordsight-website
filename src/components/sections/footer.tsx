import Link from "next/link"

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border bg-white py-4 dark:bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <span>&copy; 2025 Nordsight Analytics. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a
            href="mailto:hello@nordsightanalytics.com"
            className="transition-colors hover:text-foreground"
          >
            Contact us
          </a>
          <Link
            href="/privacy"
            className="transition-colors hover:text-foreground"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
