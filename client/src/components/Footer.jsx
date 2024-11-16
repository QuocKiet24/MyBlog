import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub } from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer container className="border-t-8 border-indigo-400">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 w-full justify-between sm:flex ">
          <div className="mt-5">
            <Link
              to="/"
              className="whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 via-indigo-400 to-blue-500 rounded-lg text-white">
                QuocKiet&apos;s
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </Footer.Link>
                <Footer.Link
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/sahandghavidel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="QuocKiet's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/kiet6996"
              icon={BsFacebook}
            />

            <Footer.Icon href="https://github.com/QuocKiet24" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
