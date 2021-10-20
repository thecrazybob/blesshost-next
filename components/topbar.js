import React from "react";

import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import createPersistedState from "use-persisted-state";
import priceString from "../lib/pricing";
import { useCurrency } from "../contexts/CurrencyContext";

export default function Topbar() {
  const { currency } = useCurrency();
  const useOfferState = createPersistedState("showOffer");
  const [showOffer, setShowOffer] = useOfferState(true);
  const onClick = () => setShowOffer(false);

  return (
    <>
      {showOffer ? (
        <div className="relative bg-blue-600">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:text-center sm:px-16">
              <p className="font-medium text-white">
                <span className="md:hidden">Web Hosting for just 2 AED!</span>
                <span className="hidden md:inline">
                  Big news! Try our most popular 360 Unlimited Web Hosting for
                  just{" "}
                  {priceString({
                    pid: 91,
                    term: "monthly",
                    currency: currency,
                  })}{" "}
                  / month!
                </span>
                <span className="block sm:ml-2 sm:inline-block">
                  <Link href="/web-hosting">
                    <a className="text-white font-bold underline">
                      {" "}
                      Learn more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </Link>
                </span>
              </p>
            </div>
            <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
              <button
                type="button"
                className="flex p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white"
                onClick={onClick}
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      ) : null}{" "}
    </>
  );
}
