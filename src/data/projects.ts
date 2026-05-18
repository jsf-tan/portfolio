export const projects = [
  {
    image: '../../../assets/images/CartonCloud.jpg',
    link: 'https://www.cartoncloud.com',
    type: 'Analytics Platform',
    title: 'Cloud-based business analytics system',
    description:
      'Built for a mid-sized logistics reporting platform handling operational analytics across multiple warehouses. The original system struggled with slow report generation and inconsistent dashboard performance during peak usage.',
    work: 'Redesigned the reporting pipeline using asynchronous workers, Redis caching, and optimized aggregation queries. Supported 120k+ reporting requests per day while reducing dashboard latency by roughly 70% and improving backend stability during peak operational hours.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
  },
  {
    image: '../../../assets/images/orderful.jpg',
    link: 'https://www.orderful.com',
    type: 'SaaS Infrastructure',
    title: 'Multi-tenant SaaS architecture with scalable APIs',
    description:
      'Developed for a subscription-based internal operations platform used by distributed remote teams. The main challenge was maintaining stable API performance and tenant isolation as customer usage increased.',
    work: 'Implemented event-driven backend services, queue-based processing, API versioning, and deployment automation. Reduced deployment failures across internal releases while supporting growing multi-tenant workloads and increasing concurrent API traffic.',
    stack: ['Next.js', 'Kafka', 'AWS', 'Docker'],
  },
  {
    image: '../../../assets/images/devtron.jpg',
    link: 'https://devtron.ai',
    type: 'Developer Platform',
    title: 'Modern frontend platform with infrastructure integration',
    description:
      'Created for a client-facing SaaS dashboard that needed a faster and more maintainable frontend architecture. The previous application suffered from inconsistent UI behavior, deployment friction, and slow rendering performance.',
    work: 'Rebuilt the frontend platform with scalable component architecture, CI/CD workflows, and infrastructure monitoring integration. Improved frontend render performance, reduced deployment friction, and lowered infrastructure maintenance overhead for active production users.',
    stack: ['Next.js', 'TypeScript', 'GraphQL', 'Kubernetes'],
  },
]

export const overview =
  'A collection of scalable platforms, SaaS systems, and modern web applications focused on reliability, architecture quality, and production performance.'
