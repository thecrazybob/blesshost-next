import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { GiftIcon, XIcon } from "@heroicons/react/outline";
import { useCart } from "../contexts/CartContext";
import { useCurrency } from "../contexts/CurrencyContext";
import priceString from "../lib/pricing";
import { fetchPostJSON } from "../lib/stripe-helpers";
import getStripe, { formatAmountForStripe } from "../lib/get-stripe";
import { parseCookies } from "nookies";

export default function Checkout({ open, setOpen }) {
  const {
    globalState: { products },
    dispatch,
  } = useCart();
  const { currency } = useCurrency();
  const [promoCodeOpen, setPromoCodeOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addingToCart, setAddingToCart] = useState(false);

  let total = 0.0;

  let maxDecimal = 2;

  let object = {};

  const cookies = parseCookies();

  //Stripe Checkout Button Handler

  const handleCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Format Cart items for stripe.
    const items = products?.map((product) => {
      return {
        price_data: {
          currency: currency.name,
          product_data: {
            name: product.title,
            metadata: {
              order_pid: product?.pid,
              order_interval: product.billingInterval,
            },
          },
          unit_amount: formatAmountForStripe(
            parseFloat(
              priceString({
                pid: product?.pid,
                term: product.billingInterval,
                currency: currency,
                raw: true,
              })
            ),
            currency.name
          ),
        },
        quantity: 1,
      };
    });

    const meta = products?.map((product) => {
      object[product.pid] = product.billingInterval;
      return object;
    });

    // Create a Checkout Session.
    const response = await fetchPostJSON("/api/checkout_sessions", {
      products: items,
      affiliate: cookies.affiliate_id,
      meta: meta,
    });

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
    setLoading(false);
  };

  //Format Number for display
  function format(number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.name || "usd",
      minimumFractionDigits: 0,
      maximumFractionDigits: maxDecimal,
    }).format(number);
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-hidden z-50"
        open={open}
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                  <div className="min-h-0 flex-1 flex flex-col py-6 overflow-y-scroll">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Your cart
                        </Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 relative flex-1 px-4 sm:px-6">
                      {/* Content */}
                      <div className="bg-white overflow-hidden shadow border border-gray-100 rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                          {/* Replace with your content */}
                          {products.length >= 1 ? (
                            products.map((product, idx) => {
                              total += +priceString({
                                pid: product?.pid,
                                term: product.billingInterval,
                                currency: currency,
                                raw: true,
                              });
                              return (
                                <div
                                  key={idx}
                                  className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer "
                                >
                                  <div className="pr-2">
                                    <svg
                                      className="h-12 w-12 text-blue-500"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        d="M21 12v0a9 9 0 01-9 9m9-9v0a9 9 0 00-9-9m9 9H3m9 9h0a9 9 0 01-9-9s0 0 0 0m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9m-9 9h0a9 9 0 019-9"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                  <div className="flex-auto w-32">
                                    <div className="font-bold">
                                      {product.title}
                                    </div>
                                    <div className="truncate">
                                      {product.description}
                                    </div>
                                  </div>
                                  <div className="flex flex-col w-18 font-medium items-end">
                                    <button
                                      onClick={() =>
                                        dispatch({
                                          type: "removefromcart",
                                          payload: {
                                            pid: product.pid,
                                          },
                                        })
                                      }
                                      className="mt-1 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-blue focus:border-blue-300 active:bg-gray-100 active:text-red-900 transition ease-in-out duration-150"
                                    >
                                      <svg
                                        className="w-5 h-5 text-red-500"
                                        stroke="currentColor"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          d="M19 7l-.87 12.14h0a2 2 0 01-2 1.86H7.87h0a2 2 0 01-2-1.86L5 7m5 4v6m4-6v6m1-10V4v0a1 1 0 00-1-1h-4 0a1 1 0 00-1 1s0 0 0 0v3M4 7h16"
                                          strokeLinecap="round"
                                          strokeWidth="2"
                                          fill="none"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </button>
                                    <div>
                                      {currency.name} {``}
                                      {priceString({
                                        pid: product?.pid,
                                        term: product.billingInterval,
                                        currency: currency,
                                        raw: true,
                                      })}
                                    </div>
                                  </div>
                                </div>
                              );
                            })
                          ) : (
                            <p className="text-center"> Your Cart is Empty </p>
                          )}
                        </div>
                        <div className="bg-gray-50 px-4 py-4 sm:px-6 text-center">
                          <div className="font-bold py-2 flex flex-col space-y-2">
                            {/* Promo code */}
                            <div>
                              <div className="text-left">
                                {/* <button
                                  onClick={() =>
                                    setPromoCodeOpen(!promoCodeOpen)
                                  }
                                  className="font-normal text-sm text-gray-700 underline"
                                >
                                  Do you have a promotional code?
                                </button> */}
                              </div>
                              {promoCodeOpen ? (
                                <div className="my-4">
                                  <div className="mt-1 flex rounded-md shadow-sm">
                                    <div className="relative flex items-stretch flex-grow focus-within:z-10">
                                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <GiftIcon
                                          className="h-5 w-5 text-gray-400"
                                          aria-hidden="true"
                                        />
                                      </div>
                                      <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
                                        placeholder="Enter your coupon code here"
                                      />
                                    </div>
                                    <button className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                                      <span>Apply</span>
                                    </button>
                                  </div>
                                </div>
                              ) : null}
                            </div>
                            {/* /Promo code */}
                            {/* Totals */}
                            <div className="flex justify-between pb-2 border-b border-gray-200">
                              <div>Subtotal</div>
                              <div>
                                {currency.name === "USD"
                                  ? format(total)
                                  : format(0.95 * total)}
                              </div>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-gray-200">
                              <div>Tax</div>
                              <div>
                                {currency.name === "USD"
                                  ? format(0)
                                  : format(0.05 * (total / 1.05))}
                              </div>
                            </div>
                            {/* <div className="flex justify-between pb--2 border-b border-gray-200">
                              <div>Discount</div>
                              <div>$0.00</div>
                            </div> */}
                            <div className="flex justify-between pb-2 border-gray-200">
                              <div>Total</div>
                              <div>{format(total)}</div>
                            </div>
                            {/* /Totals */}
                          </div>
                        </div>
                      </div>
                      {/* end of Content */}
                    </div>
                  </div>
                  <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                    {products.length > 0 ? (
                      <button
                        onClick={(e) => {
                          handleCheckout(e);
                          setAddingToCart(true);
                        }}
                        className="flex-grow inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        {addingToCart ? (
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        ) : (
                          ""
                        )}
                        Checkout
                      </button>
                    ) : null}

                    <button
                      type="button"
                      className="flex-grow bg-white py-2 px-2 ml-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      onClick={() => setOpen(false)}
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
