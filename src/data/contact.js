import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faSalesforce } from '@fortawesome/free-brands-svg-icons/faSalesforce';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/snlucas',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.salesforce.com/trailblazer/snlucas',
    label: 'Salesforce',
    icon: faSalesforce,
  },
  {
    link: 'https://www.linkedin.com/in/sn-lucas/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:lucas.sn@protonmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
