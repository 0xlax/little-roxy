"use client";

import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { useRouter } from "next/navigation";
import AppRouterInstance from "next/router";

const Navbar = () => {
  // const router = useRouter() as any;
  // const routesToHideNavbar = ["/app/app/(auth)/login/page"];
  // const pathname

  // console.log("Current path:", router.pathname);

  // const shouldHideNavbar = routesToHideNavbar.includes(router.pathname);

  // console.log("Should hide navbar:", shouldHideNavbar);

  // if (shouldHideNavbar) {
  //   return null; // Hide the navbar for the specified route(s).
  // }
  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b  backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="z-40 flex font-semibold">
            <span>ANALYTIX</span>
          </Link>

          {/* todo add mobile navbar */}

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="http://app.localhost:3000/login"
                className={buttonVariants({
                  //   variant: "outline",
                  size: "sm",
                })}
              >
                For Creators
              </Link>
              <Link
                href="/brands"
                className={buttonVariants({
                  size: "sm",
                })}
              >
                For Brands
              </Link>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
