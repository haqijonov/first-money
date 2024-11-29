import YouTube from "/assets/svg/youtube-min.svg";
import Facebook from "/assets/svg/facebook-min.svg";
import Instagram from "/assets/svg/instagram-min.svg";
export default function Socials() {
  const socials = [
    {
      path: "https://www.youtube.com/@kork_factory/featured",
      icon: YouTube,
      title: "YouTube",
    },
    {
      path: "https://www.facebook.com/profile.php?id=61558070602925",
      icon: Facebook,
      title: "Facebook",
    },
    {
      path: "https://www.instagram.com/kork_factory?igsh=MTd3d2JyNTJ2Zjd2aA%3D%3D",
      icon: Instagram,
      title: "Instagram",
    },
  ];

  return (
    <ul className="flex gap-2">
      {socials.map(({ title, icon, path }) => {
        return (
          <li
            className="relative h-10 w-10 rounded-lg bg-socials-icon-cl p-4 hover:opacity-80"
            key={title}
          >
            <a
              className="absolute inset-0 block text-white no-underline transition"
              href={path}
              target="_blank"
            >
              <img
                className="absolute left-2/4 top-2/4 shrink-0 -translate-x-2/4 -translate-y-2/4"
                src={icon}
                alt={title}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
