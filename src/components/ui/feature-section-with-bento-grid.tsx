import {
  type LucideIcon,
  BarChart3,
  Brain,
  LineChart,
  Workflow,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

type FeatureLayout = 'wide' | 'square'

type FeatureItem = {
  title: string
  description: string
  icon: LucideIcon
  layout?: FeatureLayout
}

type FeatureContent = {
  badge: string
  title: string
  description: string
  items: FeatureItem[]
}

type FeatureProps = {
  content?: FeatureContent
}

const defaultContent: FeatureContent = {
  badge: 'What we do?',
  title: 'Closing the Gap',
  description: '',
  items: [
    {
      title: 'Applied AI Research',
      description:
        'We bridge the gap between emerging technologies and business needs, turning technology breakthroughs into practical solutions.',
      icon: Brain,
      layout: 'wide',
    },
    {
      title: 'Predictive Analytics',
      description:
        "We develop models that don't just forecast the future - they guide smarter action.",
      icon: LineChart,
    },
    {
      title: 'Business Intelligence',
      description:
        'We deploy AI agents that translate complex data into strategy and execution.',
      icon: BarChart3,
    },
    {
      title: 'Process Optimization',
      description:
        'We use AI to analyze workflows to uncover inefficiencies and introduce data-driven improvements that scale.',
      icon: Workflow,
      layout: 'wide',
    },
  ],
}

const cardClassName: Record<FeatureLayout, string> = {
  wide: 'bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col',
  square:
    'bg-muted rounded-md  aspect-square p-6 flex justify-between flex-col',
}

function Feature({ content = defaultContent }: FeatureProps) {
  const { badge, title, description, items } = content

  return (
    <section className="relative z-10 w-full bg-background py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>{badge}</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                {title}
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                {description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map(
              ({
                title: itemTitle,
                description: itemDescription,
                icon: Icon,
                layout = 'square',
              }) => (
                <div key={itemTitle} className={cardClassName[layout]}>
                  <Icon className="w-8 h-8 stroke-1" />
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">{itemTitle}</h3>
                    <p className="text-muted-foreground max-w-xs text-base">
                      {itemDescription}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Feature }
