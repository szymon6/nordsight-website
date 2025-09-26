import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t border-border bg-white py-4 dark:bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <span>&copy; 2025 Nordsight Analytics. All rights reserved.</span>
        <Link
          href="/privacy"
          className="transition-colors hover:text-foreground"
        >
          Privacy
        </Link>
      </div>
    </footer>
  )
}

export default Footer
