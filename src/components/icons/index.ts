// src/components/icons/index.ts
import { GitHubIcon } from "./GitHubIcon";
import { LinkedInIcon } from "./LinkedInIcon";
import { FacebookIcon } from "./FacebookIcon";

export type IconType =
  | "github"
  | "linkedin"
  | "facebook"
  | "x"
  | "globe"
  | "mail"
  | "phone";

export const ICON_COMPONENTS: Record<
  IconType,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  x: GitHubIcon,     // placeholders if you don't have separate icons yet
  globe: GitHubIcon,
  mail: GitHubIcon,
  phone: GitHubIcon,
};

export { GitHubIcon, LinkedInIcon, FacebookIcon };
export default ICON_COMPONENTS;
