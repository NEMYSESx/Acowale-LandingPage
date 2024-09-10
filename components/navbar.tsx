import MaxWidthWrapper from "./max-width-wrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { MdKeyboardArrowDown, MdSearch } from "react-icons/md";
import Image from "next/image";

const Navbar = async () => {
  return (
    <nav className="sticky z-[100] h-20 inset-x-0 top-0 w-full border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-20 items-center justify-between border-zinc-200 px-4">
          <Link href="/">
            <Image
              src="https://acowale.com/wp-content/uploads/2024/09/aw-logo-blu.svg"
              alt="title"
              width={130}
              height={50}
              className="hover:opacity-90 transition-opacity"
            />
          </Link>
          <div className="h-full flex items-center space-x-6">
            <Link
              href="/story"
              className={buttonVariants({
                size: "md",
                variant: "custom",
                className: "hover:text-blue-600 transition-colors duration-200",
              })}
            >
              Story
            </Link>
            <div className="relative group">
              <Link
                href="/company"
                className={buttonVariants({
                  size: "md",
                  variant: "custom",
                  className:
                    "flex items-center space-x-1 hover:text-blue-600 transition-colors duration-200",
                })}
              >
                <span>Company</span>
                <MdKeyboardArrowDown className="h-5 w-5" />
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-40 text-sm">
                <Link
                  href="/company/about"
                  className="block px-4 py-2 hover:bg-gray-100 transition-all"
                >
                  About Us
                </Link>
                <Link
                  href="/company/careers"
                  className="block px-4 py-2 hover:bg-gray-100 transition-all"
                >
                  Careers
                </Link>
              </div>
            </div>
            <Link
              href="/zap"
              className={buttonVariants({
                size: "md",
                variant: "custom",
                className: "hover:text-blue-600 transition-colors duration-200",
              })}
            >
              Zap
            </Link>
            <Link
              href="/dash"
              className={buttonVariants({
                size: "md",
                variant: "custom",
                className: "hover:text-blue-600 transition-colors duration-200",
              })}
            >
              Dash
            </Link>
            <div className="relative group">
              <Link
                href="/resources"
                className={buttonVariants({
                  size: "md",
                  variant: "custom",
                  className:
                    "flex items-center space-x-1 hover:text-blue-600 transition-colors duration-200",
                })}
              >
                <span>Resources</span>
                <MdKeyboardArrowDown className="h-5 w-5" />
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-40 text-sm">
                <Link
                  href="/resources/docs"
                  className="block px-4 py-2 hover:bg-gray-100 transition-all"
                >
                  Docs
                </Link>
                <Link
                  href="/resources/blog"
                  className="block px-4 py-2 hover:bg-gray-100 transition-all"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-full py-1 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <MdSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            </div>
            <Link
              href="/product"
              className={buttonVariants({
                size: "md",
                variant: "custom",
                className:
                  "bg-white text-blue-600 border rounded-2xl border-blue-600 hover:bg-blue-700 hover:text-white transition-colors duration-200 px-4 py-2 ",
              })}
            >
              <span className="mt-1 font-bold">#Product</span>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
