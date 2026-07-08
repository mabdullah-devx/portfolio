import React from 'react';
import './Skills.css';

interface Skill {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const skillsData: Omit<Skill, 'position'>[] = [
  {
    id: 'react',
    name: 'React',
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" fill="#61dafb">
        <circle cx="0" cy="0" r="2.05" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: (
      <svg viewBox="0 0 24 24" fill="#F7DF1E">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M11.41 18.06c-.66.42-1.6.86-2.67.86-1.57 0-2.45-.89-2.45-2.61V11h2.24v4.96c0 .8.34 1.15 1.05 1.15.53 0 .97-.2 1.25-.4l.58 1.35zm5.79 1.14c-1.89 0-3.05-.98-3.37-2.34l2.03-.8c.17.65.65 1.22 1.41 1.22.84 0 1.27-.41 1.27-.93 0-.69-.53-.88-1.74-1.29-1.68-.58-2.6-1.42-2.6-2.69 0-1.57 1.28-2.58 2.97-2.58 1.54 0 2.59.81 2.95 2.14l-1.95.73c-.15-.65-.57-1.07-1.15-1.07-.63 0-1.03.35-1.03.85 0 .54.4.78 1.58 1.18 1.83.62 2.77 1.45 2.77 2.87 0 1.6-1.18 2.71-3.14 2.71z" fill="#000" />
        <path d="M0 0h24v24H0z" fill="#F7DF1E" />
        <path d="M12.2 17.51c-.6.38-1.46.78-2.43.78-1.43 0-2.24-.81-2.24-2.38V11.1h2.04v4.52c0 .73.31 1.05.96 1.05.48 0 .89-.18 1.14-.36l.53 1.2zm5.28 1.04c-1.72 0-2.78-.89-3.07-2.13l1.85-.73c.15.59.59 1.11 1.29 1.11.77 0 1.16-.37 1.16-.85 0-.63-.48-.8-1.59-1.18-1.53-.53-2.37-1.29-2.37-2.45 0-1.43 1.17-2.35 2.71-2.35 1.4 0 2.36.74 2.69 1.95l-1.78.67c-.14-.59-.52-.98-1.05-.98-.57 0-.94.32-.94.77 0 .49.36.71 1.44 1.07 1.67.57 2.53 1.32 2.53 2.61 0 1.46-1.08 2.47-2.86 2.47z" fill="#000" />
      </svg>
    ),
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: (
      <svg viewBox="0 0 24 24" fill="#3178C6">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M0 0h24v24H0z" fill="#3178C6" />
        <path d="M12.63 17.65c-.65.41-1.55.85-2.61.85-1.54 0-2.4-.87-2.4-2.56V10.8h2.2v4.86c0 .78.33 1.13 1.03 1.13.52 0 .95-.2 1.22-.39l.56 1.25zm5.66 1.12c-1.85 0-2.98-.96-3.29-2.29l1.98-.78c.17.64.64 1.2 1.38 1.2.82 0 1.24-.4 1.24-.91 0-.68-.52-.86-1.71-1.26-1.64-.57-2.54-1.39-2.54-2.64 0-1.54 1.25-2.53 2.91-2.53 1.5 0 2.53.79 2.89 2.1l-1.91.72c-.15-.64-.56-1.05-1.12-1.05-.62 0-1.01.34-1.01.83 0 .53.39.76 1.55 1.16 1.79.61 2.71 1.42 2.71 2.81 0 1.57-1.15 2.65-3.08 2.65z" fill="#FFF" />
        <path d="M9.81 10.8h2.2v8.52h-2.2z" fill="#FFF" />
      </svg>
    ),
  },
  {
    id: 'mysql',
    name: 'MySQL',
    icon: (
      <svg viewBox="0 0 24 24" fill="#4479A1">
        <path d="M12 2C6.48 2 2 4.24 2 7c0 2.76 4.48 5 10 5s10-2.24 10-5c0-2.76-4.48-5-10-5zm0 8.5c-4.42 0-8-1.79-8-4 0-.17.15-.34.42-.5C5.81 7.25 8.71 8 12 8s6.19-.75 7.58-2c.27.16.42.33.42.5 0 2.21-3.58 4-8 4zm10 2c0 2.76-4.48 5-10 5s-10-2.24-10-5v-1.1c1.86 1.73 5.6 2.9 10 2.9s8.14-1.17 10-2.9v1.1z" />
        <path d="M22 17c0 2.76-4.48 5-10 5s-10-2.24-10-5v-1.1c1.86 1.73 5.6 2.9 10 2.9s8.14-1.17 10-2.9V17z" />
      </svg>
    ),
  },
  {
    id: 'cpp',
    name: 'C++',
    icon: (
      <svg viewBox="0 0 24 24" fill="#00599C">
        <path d="M22.5 10.5h-2.5v-2.5h-1.5v2.5h-2.5v1.5h2.5v2.5h1.5v-2.5h2.5v-1.5zm-9 0h-2.5v-2.5h-1.5v2.5h-2.5v1.5h2.5v2.5h1.5v-2.5h2.5v-1.5zm-6.17-1.07c-1.15-1.14-2.8-1.5-4.42-.94C1.3 9.05.15 10.42 0 12.08c-.14 1.57.65 3.12 1.95 3.96 1.39.88 3.16.92 4.58.12 1.05-.59 1.75-1.58 1.94-2.77h1.53c-.22 1.83-1.3 3.39-2.91 4.19-1.92.96-4.22.75-5.91-.56-1.58-1.22-2.31-3.23-1.91-5.18.42-2.07 2.05-3.69 4.14-4.04 1.82-.31 3.65.25 4.96 1.48 1.08 1.02 1.68 2.45 1.74 3.96h-1.52c-.06-1.21-.57-2.36-1.42-3.21z"/>
      </svg>
    ),
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 6.5C10.5 4 8 4 6 4s-4 1.5-4 4 2.5 5.5 5 5.5c1.5 0 2.5-1 4-2.5 1-1 1-2 2-2s1.5 1 1.5 2c0 2 2.5 4.5 5 4.5s4-1.5 4-4-2.5-5.5-5-5.5c-1.5 0-2.5 1-4 2.5-1 1-1 2-2 2s-1.5-1-1.5-2z" fill="#06B6D4" />
      </svg>
    ),
  },
  {
    id: 'gsap',
    name: 'GSAP',
    icon: (
      <svg viewBox="0 0 24 24" fill="#88CE02">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.89 13.56c-.66.42-1.6.86-2.67.86-1.57 0-2.45-.89-2.45-2.61V8.81h2.24v4.96c0 .8.34 1.15 1.05 1.15.53 0 .97-.2 1.25-.4l.58 1.35zm5.79 1.14c-1.89 0-3.05-.98-3.37-2.34l2.03-.8c.17.65.65 1.22 1.41 1.22.84 0 1.27-.41 1.27-.93 0-.69-.53-.88-1.74-1.29-1.68-.58-2.6-1.42-2.6-2.69 0-1.57 1.28-2.58 2.97-2.58 1.54 0 2.59.81 2.95 2.14l-1.95.73c-.15-.65-.57-1.07-1.15-1.07-.63 0-1.03.35-1.03.85 0 .54.4.78 1.58 1.18 1.83.62 2.77 1.45 2.77 2.87 0 1.6-1.18 2.71-3.14 2.71z"/>
      </svg>
    ),
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: (
      <svg viewBox="0 0 24 24" fill="#339933">
        <path d="M11.874 0L1.75 5.864v12.271l10.124 5.864 10.375-5.864V5.864zM16.536 14.153c-1.077 1.341-2.637 1.795-4.496 1.795-3.217 0-5.512-1.745-5.512-4.996 0-3.321 2.316-4.996 5.512-4.996 1.611 0 3.033.454 3.996 1.433v-1.637c-.963-1.006-2.455-1.433-3.996-1.433-4.145 0-7.391 2.275-7.391 6.633 0 4.254 3.163 6.633 7.391 6.633 1.939 0 3.813-.487 5.094-1.928l-.598-.504z"/>
      </svg>
    ),
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    icon: (
      <svg viewBox="0 0 24 24" fill="#47A248">
        <path d="M12.012 0c-1.613 3.666-3.805 9.06-3.805 13.064 0 3.13 1.942 5.176 3.805 6.435 1.863-1.259 3.805-3.305 3.805-6.435C15.817 9.06 13.625 3.666 12.012 0zm-1.02 19.98c-1.096-1.085-1.782-2.585-1.782-4.35 0-3.11 1.782-7.59 2.802-10.74C13.033 8.04 14.815 12.52 14.815 15.63c0 1.765-.686 3.265-1.782 4.35v2.856l-.506.714-.515-.714v-2.856z"/>
      </svg>
    ),
  },
  {
    id: 'figma',
    name: 'Figma',
    icon: (
      <svg viewBox="0 0 38 57" fill="none" width="100%" height="100%">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/>
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
      </svg>
    ),
  },
  {
    id: 'sketch',
    name: 'Sketch',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" width="100%" height="100%">
        <path d="M15.42 16.42L32 3.86l16.58 12.56-16.58 44.5L15.42 16.42z" fill="#FDB300"/>
        <path d="M32 3.86L15.42 16.42 4.12 16.42 16.65 3.86 32 3.86z" fill="#EA6C00"/>
        <path d="M32 3.86l16.58 12.56 11.3 0L47.35 3.86 32 3.86z" fill="#EA6C00"/>
        <path d="M4.12 16.42l11.3 0 16.58 44.5L4.12 16.42z" fill="#FDAD00"/>
        <path d="M59.88 16.42l-11.3 0-16.58 44.5 27.88-44.5z" fill="#FDAD00"/>
        <path d="M32 60.92l16.58-44.5H15.42L32 60.92z" fill="#FDD231"/>
      </svg>
    ),
  },
  {
    id: 'vercel',
    name: 'Vercel',
    icon: (
      <svg viewBox="0 0 256 222" fill="currentColor">
        <path d="M128 0l128 221.7H0z"/>
      </svg>
    ),
  }
];

export const Skills: React.FC = () => {
  // Split data into two rows
  const midpoint = Math.ceil(skillsData.length / 2);
  const row1 = skillsData.slice(0, midpoint);
  const row2 = skillsData.slice(midpoint);

  const renderMarquee = (items: typeof skillsData, reverse: boolean = false) => (
    <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
      <div className="marquee-content">
        {items.map((skill) => (
          <div key={skill.id} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
      <div className="marquee-content" aria-hidden="true">
        {items.map((skill) => (
          <div key={`${skill.id}-dup`} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="skills-section">
      <div className="container-custom">
        <h2 className="skills-title" data-reveal>Core Technologies</h2>
      </div>
      
      <div className="marquee-container">
        {renderMarquee(row1)}
        {renderMarquee(row2, true)}
      </div>
    </section>
  );
};

export default Skills;
