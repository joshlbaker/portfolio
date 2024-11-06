type IconName = 'linkedin' | 'github' | 'email';

interface Social {
  href: string;
  icon: IconName;
}

const SOCIAL_LINKS: Social[] = [
  { href: 'https://www.linkedin.com/in/joshlbaker/', icon: 'linkedin' },
  { href: 'https://github.com/joshlbaker', icon: 'github' },
  { href: 'mailto:hellojoshbaker@gmail.com', icon: 'email' },
];
