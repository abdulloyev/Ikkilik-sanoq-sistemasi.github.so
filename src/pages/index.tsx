import Image from "next/image";
import { Inter } from "next/font/google";
import { Input } from "@/components";
import Link from "next/link";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <title>Abdulloyev | Ikkilik sanoq sistemasi</title>
      </Head>
      <main
        className={`flex min-h-screen justify-center items-center text-center p-5 ${inter.className}`}
      >
        <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
          <Link
            href={"/"}
            className="overflow-hidden object-cover w-full text-center flex justify-center items-center"
          >
            <Image
              className="relative scale-x-150 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/logo.png"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </Link>

          <div className="py-[50px]">
            <Input />
          </div>

          <Link
            className="hover:underline text-sm text-white/50 hover:text-white/100"
            href="https://t.me/abdulloyevuzb"
            target="_blank"
          >
            abdulloyev
          </Link>

          <p>sayit xato hisoblab qolsa men javob bermayman!</p>
        </div>
      </main>
    </>
  );
}
