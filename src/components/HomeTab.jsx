import MotionCard from './MotionCard';

export default function HomeTab({ mobile = false }) {
  const cards = [
    {
      title: 'Who am I?',
      description: [
        'I’m a lifelong learner with a track record of building end-to-end software solutions for both startups and enterprise systems. I thrive on solving user-facing challenges and continuously expanding my skillset. Also, I’m a huge D&D fan.',
      ],
      type: 'text',
      dimensions: '2x1',
    },
    {
      title: 'Frontend to backend. Scalable systems and great UX.',
      description: [],
      dimensions: '1x2',
    },
    {
      title: 'K Logo',
      description: ['Full Stack • Data Engineering • AI'],
      type: 'logo',
      dimensions: '1x2',
    },
    {
      title: 'Kiran Manikonda',
      description: ['Software Engineer'],
      direction: 'none',
      dimensions: '1x1',
    },
    {
      title: 'Tech Stack',
      description: [
        'React • Next.js • Node.js • Django • Docker • Snowflake • Azure',
        'Python • JavaScript • TypeScript • SQL • HTML/CSS',
      ],
      dimensions: '2x1',
    },
  ];

  const mobileOrder = [3, 2, 4, 0, 1];
  const mobileDirections = ['right', 'right', 'right', 'right', 'right'];
  const desktopDirections = ['right', 'down', 'up', 'none', 'left'];
  const mobileDelays = [100, 200, 300, 600, 900];
  const desktopDelays = [300, 500, 700, 0, 900];

  const orderedCards = mobile ? mobileOrder.map((index) => cards[index]) : cards;

  return (
    <div
      className="homeGrid"
      style={{
        display: 'grid',
        minHeight: mobile ? 'auto' : '100%',
        height: mobile ? 'auto' : '100%',
        gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)',
        gridAutoRows: mobile ? 'auto' : 'minmax(200px, auto)',
        alignContent: 'stretch',
        gap: '24px',
        padding: '0 24px',
      }}
    >
      {orderedCards.map((card, index) => (
        <MotionCard
          key={card.title}
          title={card.title}
          description={card.description}
          direction={mobile ? mobileDirections[index] : card.direction || desktopDirections[index]}
          delay={mobile ? mobileDelays[index] : desktopDelays[index]}
          dimensions={card.dimensions}
          type={card.type}
          mobile={mobile}
        />
      ))}
    </div>
  );
}
