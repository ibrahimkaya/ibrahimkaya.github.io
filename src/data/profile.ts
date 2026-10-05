// Single source of truth for the site's numbers.
// My own contributions, Nov 2022 – Oct 2026. Names are generic on purpose.

export const person = {
  name: 'Ibrahim Kaya',
  role: 'Senior Backend Engineer · Tech Lead',
  location: 'İzmir, Türkiye · open to remote',
  email: '96ibrahimkaya@gmail.com',
  github: 'https://github.com/ibrahimkaya',
  linkedin: 'https://www.linkedin.com/in/kayaibrahim',
};

export const asOf = 'October 2026';

export const headline = [
  { value: '6', unit: 'years', label: 'building backend systems in Java' },
  { value: '3', unit: 'services', label: 'built end to end' },
  { value: '5', unit: 'services', label: 'shaped from idea to architecture' },
  { value: '583', unit: 'merged PRs', label: 'across 25 repositories' },
  { value: '1,946', unit: 'PR reviews', label: 'across 15 repositories' },
  { value: '38', unit: 'engineering docs', label: 'including 4 RFCs / ADRs' },
];

// Builder → multiplier: own merged PRs vs. reviews of other people's PRs, per year.
// 2022 covers Nov–Dec only; 2026 runs to 5 October.
export const yearly = [
  { year: '2022', note: 'Nov–Dec', prs: 13, reviews: 23, inline: 0, ticketsWritten: 0 },
  { year: '2023', prs: 125, reviews: 265, inline: 218, ticketsWritten: 7 },
  { year: '2024', prs: 167, reviews: 521, inline: 560, ticketsWritten: 78 },
  { year: '2025', prs: 147, reviews: 635, inline: 489, ticketsWritten: 79 },
  { year: '2026', note: 'to Oct', prs: 131, reviews: 502, inline: 465, ticketsWritten: 70 },
];

// Tickets I developed, grouped by theme. Relative share only (largest theme = 100).
export const themes = [
  { name: 'Courier app & ops back-office features', share: 100 },
  { name: 'Courier assignment engine', share: 85 },
  { name: 'Observability, performance, resilience', share: 79 },
  { name: 'Event-driven order processing & DLT', share: 65 },
  { name: 'Multi-tenant platform for external clients', share: 63 },
  { name: 'Platform & engineering productivity', share: 50 },
  { name: 'Support & data fixes', share: 50 },
  { name: 'Runtime configuration platform', share: 38 },
  { name: 'Mid-mile operations service', share: 38 },
  { name: 'ETA & new delivery verticals', share: 35 },
  { name: 'External provider integration', share: 33 },
  { name: 'Location alerting', share: 21 },
  { name: 'Route optimisation as a shared service', share: 21 },
  { name: 'Documentation & analysis', share: 19 },
  { name: 'Area-related service', share: 17 },
];

export const docs = [
  { type: 'Architecture & flows', count: 12 },
  { type: 'Team guides', count: 8 },
  { type: 'Integration docs', count: 5 },
  { type: 'Incident reports', count: 5 },
  { type: 'RFCs / ADRs', count: 4 },
  { type: 'Analyses', count: 4 },
];

export const reach = [
  { value: '1,946', label: 'pull requests I reviewed, across 15 repositories' },
  { value: '1,736', label: 'inline review comments' },
  { value: '234', label: 'tickets I wrote for teammates' },
];

export const flow = [
  { value: '6.4 h', label: 'median time from opening a PR to merge' },
  { value: '1,537', label: 'pull requests approved after review' },
  { value: '46%', label: 'of my 880+ ticket comments went to work owned by others' },
];

// Technologies I use day to day, grouped.
export const toolbox = [
  { group: 'Language & frameworks', use: 'Services, APIs and BFFs', items: ['Java', 'Spring Boot', 'JPA / Hibernate', 'RxJava'] },
  { group: 'Messaging & events', use: 'Event-driven flows that survive bad events', items: ['Kafka', 'retry & dead-letter topics', 'Kafka state stores', 'Avro', 'RabbitMQ', 'CDC'] },
  { group: 'Data', use: 'Transactional data, caches and search', items: ['MySQL', 'Redis', 'MongoDB', 'Cassandra', 'Elasticsearch', 'memcached'] },
  { group: 'Platform', use: 'Running and scaling services', items: ['AWS', 'Kubernetes', 'HPA', 'GitHub Actions', 'Airflow'] },
  { group: 'Observability & testing', use: 'Knowing what production does', items: ['Prometheus', 'Grafana', 'Datadog', 'JMeter', 'JUnit 5'] },
  { group: 'Ways of working', use: 'Decisions others can follow', items: ['RFCs & ADRs', 'incident postmortems', 'code review', 'mentoring'] },
];

export const experience = [
  {
    company: 'StartupHeroes',
    client: 'consulting for Migros One',
    roles: [
      { title: 'Tech Lead', period: 'Jan 2025 – now' },
      { title: 'Software Engineer', period: 'Nov 2022 – Feb 2025' },
    ],
    blurb:
      'Fast Delivery & Delivery domain of a quick-commerce platform: courier assignment, real-time courier tracking and alerting, the BFFs behind the courier app and operations back-office, and the new services around them.',
  },
  {
    company: 'Huawei',
    roles: [{ title: 'Software Developer', period: 'Dec 2021 – Nov 2022' }],
    blurb: 'Wrote a service end to end in a Kafka-based pipeline that let AI models process images more efficiently for an AI image-recognition security product.',
  },
  {
    company: 'Kartaca',
    roles: [{ title: 'Software Developer', period: 'Oct 2020 – Nov 2021' }],
    blurb: 'Core features for a personalised shopping and loyalty marketplace; moved slow report generation to an asynchronous flow.',
  },
];
