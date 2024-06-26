import XLogo from "@/public/assets/svg/twitterx.svg";
import InstagramLogo from "@/public/assets/svg/instagram.svg";
import GithubLogo from "@/public/assets/svg/github.svg";

const footerLinks = [
  {
    title: "rss",
    link: "/rss",
  },
  {
    title: "This site's source code",
    link: "https://github.com/arielsaldana/ariel.io",
  },
];

const socialMediaLinks = [
  {
    icon: XLogo,
    link: "https://x.com/arielsaldana_",
  },
  {
    icon: GithubLogo,
    link: "https://github.com/arielsaldana",
  },
  {
    icon: InstagramLogo,
    link: "https://instagram.com/arielsaldana_",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <div className="flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300 justify-between">
        <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
          {footerLinks.map((footerLink) => (
            <li key={footerLink.link}>
              <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href={footerLink.link}
              >
                <ArrowIcon />
                <p className="ml-2 h-7">{footerLink.title}</p>
              </a>
            </li>
          ))}
        </ul>
        <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
          {socialMediaLinks.map((socialMediaLink) => (
            <li key={socialMediaLink.link} className="h-5 w-5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="h-5 w-5 dark:fill-white"
                href={socialMediaLink.link}
              >
                <socialMediaLink.icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  );
}
