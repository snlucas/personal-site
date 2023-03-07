const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Aura',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'LWC',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Apex',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Languages', 'DevOps'],
  },
  {
    title: 'Amazon Web Services',
    competency: 2,
    category: ['Web Development', 'Tools', 'DevOps'],
  },
  {
    title: 'Heroku',
    competency: 2,
    category: ['Web Development', 'Tools', 'DevOps'],
  },
  {
    title: 'SQLite3/SQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Selenium',
    competency: 2,
    category: ['Tools', 'Automation', 'Python'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools', 'DevOps'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'DevOps'],
  },
  {
    title: 'HTML + CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'Beautiful Soup',
    competency: 4,
    category: ['Tools', 'Python', 'Automation'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
