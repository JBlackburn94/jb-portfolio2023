export default function Footer() {
  const footerLinks = [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/about",
      title: "About",
    },
    {
      link: "/contact",
      title: "Contact",
    },
  ];
  return (
    <footer className="mx-4 mt-16 mb-4 bg-black bg-opacity-50 rounded-lg md:mt-4 drop-shadow-lg">
      <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl whitespace-nowrap">
              Jason Blackburn
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
            {footerLinks.map(({ link, title }) => (
              <li className="text-xl">
                <a href={link} className="hover:underline me-4 md:me-6">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Jason Blackburn™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
