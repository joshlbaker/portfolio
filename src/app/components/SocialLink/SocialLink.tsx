import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

type IconName = 'linkedin' | 'github' | 'email';

export interface Props {
  href: string;
  icon: IconName;
}

export default function SocialLink({ href, icon }: Props) {

  const getIcon = () => {
    switch (icon) {
      case 'linkedin':
        return (
          <FaLinkedin />
        )
      case 'github':
        return (
          <FaGithub />
        )
      default:
        return (
          <FaEnvelope />
        )
    }
  }

  const renderIcon = getIcon();

  return (
    <Link href={href} target="_blank">
      {renderIcon}
    </Link>
  )
}
