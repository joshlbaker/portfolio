import Head from "next/head";
import Image from "next/image";

import GithubIcon from './icons/github.svg'
import MailIcon from './icons/mail.svg'
import LinkedInIcon from './icons/linkedin.svg'
import MapPin from './icons/map-pin.svg'


export default function Home() {
  return (
    <>
      <Head>
        <title>Josh Baker</title>
      </Head>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="text-center">
            <h1 className="text-2xl font-medium">Josh Baker</h1>
            <p className="text-base italic">Software Developer / Cat Dad</p>
            <p className="text-base"> <Image src={MapPin} className="inline" width={16} alt="Location icon" /> Pittsburgh, Pa</p>
            <p className="text-base">Ex Shopify</p>

            <div className="flex items-center justify-center mt-8">
              <a href="https://github.com/joshlbaker" target="_blank" className="mx-2 pb-1 border-transparent hover:border-black hover:dark:border-white border-b-2">
                <Image src={GithubIcon} className="w-6" alt="Github icon" />
              </a>
              <a href="https://www.linkedin.com/in/joshlbaker/" target="_blank" className="mx-2 pb-1 border-transparent hover:border-black hover:dark:border-white border-b-2">
                <Image src={LinkedInIcon} className="w-6" alt="LinkedIn Icon" />
              </a>
              <a href="mailto:hellojoshbaker@gmail.com" target="_blank" className="mx-2 pb-1 border-transparent hover:border-black hover:dark:border-white border-b-2">
                <Image src={MailIcon} className="w-6" alt="Mail icon" />
              </a>
            </div>

            <p className="text-xl mt-8">Site under construction, check back soon!</p>
          </div>
        </main>
      </div>
    </>
  );
}
