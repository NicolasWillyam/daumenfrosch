import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function page() {
  return (
    <div className="w-full">
      <div className="w-full bg-[#1652f0]  fixed top-0 z-10">
        <div className="header px-4 w-full max-w-6xl mx-auto h-20 grid grid-cols-3">
          <div className="flex w-full items-center justify-between">
            <div className="animate-bounce">
              <Image
                src="/logo_small.png"
                alt="logo_small.png"
                width={240}
                height={40}
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Link href={"https://t.me/DaumenOnBase"}>
              <div className="h-8 w-8 rounded-full hover:bg-black/50 flex items-center justify-center duration-300">
                <FaTelegramPlane size={20} />
              </div>
            </Link>

            <Link href={"https://twitter.com/daumenonbase"}>
              <div className="h-8 w-8 rounded-full hover:bg-black/50 flex items-center justify-center duration-300">
                <FaTwitter size={20} />
              </div>
            </Link>
          </div>
          <div className="flex items-center ml-auto">
            <Link href={"https://app.uniswap.org/swap"}>
              <button className=" ml-auto flex item-center uppercase font-bold sm:px-9 sm:py-3 px-4 py-2 border-[3px] rounded-lg hover:bg-black/20 duration-300">
                buy now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <main className="w-full max-w-6xl mx-auto px-4">
        <div className="my-20  pt-[20%] h-[80vh] grid sm:grid-cols-2">
          <div className="">
            <div className="text-2xl font-bold">WELCOME TO</div>
            <Image
              className=""
              alt="image"
              src={"/text.png"}
              width={500}
              height={100}
            />
            <div className="font-semibold">
              Daumenfrosch is a poorly drawn variation of Pepe the Frog. The
              character is often portrayed as the antagonist of Apu Apustaja.
            </div>
            <div className="flex items-center ml-auto mt-8">
              <Link href={"/"}>
                <button className=" ml-auto flex items-center gap-2 item-center uppercase font-bold px-9 py-3 border-[3px] rounded-lg hover:bg-black/20 duration-300">
                  telegram
                  <FaTelegramPlane />
                </button>
              </Link>
            </div>
          </div>

          <div className="mx-auto animate-bounce">
            <Image alt="image" src={"/logo.png"} width={300} height={100} />
          </div>
        </div>

        <div className="w-full grid sm:grid-cols-2">
          <div className="mx-auto hidden sm:block animate-bounce">
            <Image alt="image" src={"/logo.png"} width={300} height={100} />
          </div>

          <div className="mb-40">
            <div className="text-2xl font-bold">Our Tokenomics</div>
            <div className="text-6xl font-bold mt-4">Tokenomics</div>

            <div className="font-semibold mt-4">
              Daumenfrosch supply 1.000.000
            </div>
            <div className="font-semibold ">LP Burned</div>

            <div className="font-semibold ">Revoked Mint</div>
            <div className="flex items-center ml-auto mt-8">
              <Link href={"https://t.me/DaumenOnBase"}>
                <button className=" ml-auto flex items-center gap-2 item-center uppercase font-bold px-9 py-3 border-[3px] rounded-lg hover:bg-black/20 duration-300">
                  telegram
                  <FaTelegramPlane />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-40 mt-20 text-center">
          <div className="text-6xl font-bold mb-20">HOW TO BUY</div>
          <div className=" text-center grid sm:grid-cols-4 gap-5">
            <div className="bg-black/20 border-black border-2 rounded-tl-xl rounded-br-xl p-8">
              <div className="text-2xl font-bold">Create a Wallet</div>
              <hr className="w-2/3 mx-auto my-6" />
              <div className="">
                Download Metamask or your wallet of choice from the app store or
                google play store for free. Desktop users, download the google
                chrome extension by going to Metamask .
              </div>
            </div>

            <div className="bg-black/20 border-black border-2 rounded-tl-xl rounded-br-xl p-8">
              <div className="text-2xl font-bold">Get Some ETH</div>
              <hr className="w-2/3 mx-auto my-6" />
              <div className="">
                Have ETH in your wallet to switch to $FROSCH. If you don{"'"}t
                have any ETH, you can buy directly on Metamask , transfer from
                another wallet, or buy on another exchange and send it to your
                wallet.
              </div>
            </div>

            <div className="bg-black/20 border-black border-2 rounded-tl-xl rounded-br-xl p-8">
              <div className="text-2xl font-bold">Go to Uniswap</div>
              <hr className="w-2/3 mx-auto my-6" />
              <div className="">
                Connect to Uniswap. Go to uniswap in google chrome or on the
                browser inside your Metamask app. Connect your wallet. Paste the
                $FROSCH token address into Raydium, select $FROSCH, and confirm.
                When Metamask prompts you for a wallet signature, sign.
              </div>
            </div>

            <div className="bg-black/20 border-black border-2 rounded-tl-xl rounded-br-xl p-8">
              <div className="text-2xl font-bold">Daumenfroscht</div>
              <hr className="w-2/3 mx-auto my-6" />
              <div className="">
                Switch ETH for $FROSCH. We have Zero taxes so you don{"'"}t need
                to worry about buying with a specific slippage, although you may
                need to use slippage during times of market volatility.
              </div>
            </div>
          </div>
        </div>

        <div className="  mt-20">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="">
              <div className="text-6xl font-bold mt-4">Join our journey</div>
              <div className="text-lg font-medium mt-4">
                This is Daumenfrosch. join us on the journey of board the meme
                enjoys growing popularity.
              </div>
              <div className="flex w-fit mt-4 items-center justify-center gap-3">
                <Link href={"https://twitter.com/daumenonbase"}>
                  <div className="h-8 w-8 rounded-full hover:bg-black/50 flex items-center justify-center duration-300">
                    <FaTelegramPlane size={20} />
                  </div>
                </Link>

                <Link href={"https://twitter.com/daumenonbase"}>
                  <div className="h-8 w-8 rounded-full hover:bg-black/50 flex items-center justify-center duration-300">
                    <FaTwitter size={20} />
                  </div>
                </Link>
              </div>
            </div>

            <div className="">
              <Image
                className="border-black border-1"
                alt="image"
                src={"/banner.jpg"}
                width={600}
                height={200}
              />
            </div>
          </div>
          <div className="w-full text-center mt-8">
            <div className="font-semibold text-lg">support@Daumenfrosch</div>
            <Image
              className="border-black border-1 mx-auto"
              alt="image"
              src={"/text.png"}
              width={300}
              height={200}
            />
            <div className="text-sm my-5 border-t pt-5">
              Copyright © 2024 DAUMENFROSCH | Powered by DAUMENFROSCH
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default page;
