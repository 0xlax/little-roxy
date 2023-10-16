import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Bell } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-left justify-left text-left">
        <div className="sentence-wrapper mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <Link href="/blog/introducing-Analytix">
            <p className="text-sm font-semibold text-gray-700">Coming Soon</p>
          </Link>
        </div>
        <h1 className="m max-wa-4xl text-5xl font-normal md:text-6xl lg:text-8xl sentence">
          Your{" "}
          <div className="words words-1">
            {" "}
            <span>All-In-One</span>
            <span>Instagram</span>
            <span>Youtube</span>
            <span>Twitch</span>
            <span> X</span>
            <span>Facebook</span>
          </div>
          <br />
          <span className=" text-blue-600"></span> Showcase.
        </h1>
        <p className="mt-10 mb-10 max-w-prose text-zinc-700 sm:text-lg">
          Experience the future of digital influence with Analytix, where data
          fuels your brand's ascent. Unleash your online potential, master the
          art of impact, and redefine your digital persona.
        </p>
        <p className="mt-2 mb-2 max-w-prose text-zinc-700 sm:text-lg">
          Join the waitlist today and enjoy a complimentary one-month full
          access.
        </p>

        <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="
      transition-colors
      h-11 rounded-md px-8
      bg-slate-100
      border-[3px] border-slate-200
      focus:outline-none focus:border-black
      text-center
    "
          />

          <Link
            className={buttonVariants({
              size: "lg",
              variant: "default",
              className: "h-11", // Match the height of the input
            })}
            href="/dashboard"
            target="_blank"
          >
            Notify Me! <Bell className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* <div className="flex">
        <Link
          className={buttonVariants({
            size: "lg",
            variant: "default",
            className: "mt-5 ",
          })}
          href="/dashboard"
          target="_blank"
        >
          I Aam A Creator <Bell className="ml-2 h-5 w-5" />
        </Link>
        <Link
          className={buttonVariants({
            size: "lg",
            variant: "default",
            className: "mt-5 ",
          })}
          href="/dashboard"
          target="_blank"
        >
          I Am An Agency <Bell className="ml-2 h-5 w-5" />
        </Link>
      </div> */}
      </MaxWidthWrapper>

      <div className="slider">
        <div className="slide-track ">
          <div className="slide">
            <img
              src="https://cdn-dalgk.nitrocdn.com/bbIrDNJblQnjXiKOWESJrbxPEorviHrY/assets/images/optimized/rev-5f29d13/locobuzz.com/wp-content/uploads/ig-logo-1024x341.png"
              alt="brand-number-one-1"
              height="100"
              width="250"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.ibb.co/3WgLMfR/brand-number-two-1.png"
              width="250"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.ibb.co/Vp5Q57N/brand-number-three.png"
              height="100"
              width="250"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.ibb.co/LYhVKBy/brand-number-four-1.png"
              height="100"
              width="250"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.ibb.co/6gsyP1h/brand-number-five-1.png"
              height="100"
              width="250"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.ibb.co/Yt15RLr/brand-number-six-1.png"
              height="100"
              width="250"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.ibb.co/6WTZ118/brand-number-seven-1.png"
              height="100"
              width="250"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.ibb.co/QPLgPL0/brand-number-eight.png"
              height="100"
              width="250"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.ibb.co/FKj2H3X/svkcrypto-podcast-500x200.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://i.ibb.co/wd7FSnZ/brand-number-ten-1.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://i.ibb.co/fDL9QLz/brand-number-eleven.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://i.ibb.co/z5YCnWD/brand-number-twelve.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img src="" height="100" width="250" alt="" />
          </div>
        </div>
      </div>

      {/* {Value Proposition} */}
      <div>
        <div className="relative isolate">
          {/* Blob 1 */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1e7dc0] to-[#053e71] opacity-0 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] moving-element"
            />
          </div>

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.jpg"
                    alt="product preview"
                    width={1920}
                    height={1080}
                    quality={100}
                    className=" bg-white sm:p-8 md:p-10  "
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1e7dc0] to-[#053e71] opacity-0 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] moving-element"
            />
          </div>
        </div>
      </div>

      {/* /Feature Section */}
      <div className="bg-gradient-to-t from-blue-200 to-transparent pt-4 pb-4">
        <div className="border-t-0 border-b-0 border-zinc-300">
          <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56 relative">
            <div className="mb-12 px-6 lg:px-8">
              <div className="mx-auto max-w-2x1 sm:text-center">
                <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
                  Unlocking Influence, Elevating{" "}
                  <span className="text-blue-600">Creators</span>
                </h2>
                <p className="mt-4 text-lg text-black">
                  Bridging Creators and Brands Effortlessly.
                </p>
              </div>
            </div>

            {/* Steps and Advantages */}
            <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="font-bold text-4xl font-black text-gray-700">
                    {" "}
                    Automated Analytics Sharing{" "}
                  </span>
                  <span className="text-base font-normal">
                    Share your success effortlessly with real-time analytics
                    sharing. Stay up-to-date without the need for screenshots.
                  </span>
                  {/* <span className="mt-2 text-zinc-700">
                Unlock Access to a Network of{" "}
                <Link
                  href="/brands"
                  className="text-blue-700 underline underline-offset-2"
                >
                  Brands
                </Link>
              </span> */}
                </div>
              </li>
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-1-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="font-bold text-4xl font-black text-gray-700">
                    {" "}
                    Enhanced Brand Visibility{" "}
                  </span>
                  <span className="text-base font-normal">
                    Amplify your brand's visibility and expand collaboration
                    opportunities. We make it effortless for brands to discover
                    and connect with you.
                  </span>
                  <span className="mt-2 text-zinc-700"></span>
                </div>
              </li>
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-1-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="font-bold text-4xl font-black text-gray-700">
                    {" "}
                    Tailored Analytics Showcase{" "}
                  </span>
                  <span className="text-base font-normal">
                    Craft a Tailored Showcase for Your Brand Pitch. Share
                    Analytics with One Link. Connect All Your Social Platforms.
                  </span>
                  <span className="mt-2 text-zinc-700"></span>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="sm:text-center max-w-5xl sm:mt-56 relative  mx-auto max-w-6xl px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center md:space-x-12 ">
        <div className="lg:w-1/2">
          {/* Add your explanatory text here */}
          <p className="text-lg text-gray-500">
            Your explanatory text goes here. You can customize it as needed.
          </p>
        </div>
        <div className="mt-16 flow-root sm:mt-24 lg:w-1/2">
          <div className="-m-2 rounded-xl bg-blue-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2x1 lg:p-4">
            <Image
              src="/dashboard-preview.jpg"
              alt="product preview"
              width={1920}
              height={1080}
              quality={100}
              className=" bg-white sm:p-8 md:p-10  "
            />
          </div>
        </div>
      </div>
    </>
  );
}
