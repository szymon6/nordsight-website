import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Understand how the Nordsight Analytics website handles visitor data and analytics.',
}

const sections = [
  {
    heading: 'Website Data Collection',
    body: 'When you browse our site, we store minimal technical details to keep the website running reliably. If you submit a form, we store the contact information you provide so we can respond.',
  },
  {
    heading: 'Cookies and Analytics',
    body: 'We use privacy-focused analytics tools to understand how visitors navigate the site. These tools rely on first-party cookies that collect aggregated insights about page views, time on site, and referral sources. We do not use analytics cookies for advertising or cross-site tracking.',
  },
  {
    heading: 'How We Use Information',
    body: 'Insights from logs and analytics help us monitor performance, troubleshoot issues, and prioritize improvements. Contact information is used only to answer your requests or share the specific updates you asked for.',
  },
  {
    heading: 'Sharing and Retention',
    body: 'We do not sell personal information. Aggregated analytics data remains within our analytics tooling. Logs and form submissions are retained for as long as needed to operate the website or until removal is requested.',
  },
  {
    heading: 'Your Choices',
    body: 'You can disable cookies in your browser or contact privacy@nordsightanalytics.com to request access, updates, or deletion of information associated with you.',
  },
]

export default function PrivacyPage() {
  return (
    <div className="bg-white dark:bg-background">
      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-12 px-6 py-16 text-muted-foreground sm:px-10">
        <header className="space-y-3 text-left">
          <h1 className="text-4xl font-semibold text-foreground">
            Privacy Policy
          </h1>
          <p className="max-w-2xl text-base leading-relaxed">
            This page explains how the Nordsight Analytics website handles
            visitor information.
          </p>
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                {section.heading}
              </h2>
              <p className="text-base leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        <footer className="border-t border-border pt-8">
          <p className="text-sm">
            If you have additional questions about our privacy practices, please
            reach out and we will respond promptly.
          </p>
        </footer>
      </div>
    </div>
  )
}
