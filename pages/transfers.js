import { useRef, useState } from "react";
import FAQSDark from "../components/faqs-dark";
import CTASimple from "../components/cta-simple";
import Seo from "../components/seo";
import { useRouter } from "next/router";

const faqs = [
  {
    question: "What are nameservers?",
    answer:
      "Nameservers help connect URLs with the IP address of web servers. Nameservers are an important part of the Domain Name System (DNS), which many people call the “phone book of the Internet”.    ",
  },
  {
    question: "What is cPanel?",
    answer:
      "cPanel is the world's most popular web hosting control panel. Your current hosting provider is likely using cPanel and your cPanel account's credentials will be required for the transfer of your website to us.",
  },
  {
    question: "Where can I find my cPanel login credentials?",
    answer:
      "You usually receive these credentials while signing up for a hosting account. If you haven't received these credentials, you should contact your current hosting provider and ask for these credentials.",
  },
  {
    question:
      "How can I get assistance from your support team to obtain my username and password?",
    answer:
      "We can handle it all for you. Just write an email to support@blesshost.com and we will take it from there so you can focus on growing your business!",
  },
];

const seo = {
  pageTitle: "Transfers",
  title: "Wondering how to transfer website hosting to a new host? | BlessHost",
  metaDesc:
    "Save time and effort by letting our expert staff transfer your existing website to a new host. We provide free website and domain transfer.",
  keywords:
    "how to transfer web hosting from one company to another, how to transfer website hosting, transfer website to new host, how to transfer domain name to new host",
  opengraphImage: {},
};

seo.opengraphImage.sourceUrl = `https://og-image-six-pi.vercel.app/${seo.pageTitle}?description=${seo.metaDesc}`;
seo.canonical = `${process.env.BASE_URL}/${seo.pageTitle.toLowerCase()}`;

export default function transfersPage() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const firstNameInput = useRef(null);
  const lastNameInput = useRef(null);
  const emailInput = useRef(null);
  const phoneInput = useRef(null);
  const domainInput = useRef(null);
  const domainLoginUrlInput = useRef(null);
  const domainLoginInput = useRef(null);
  const domainPassInput = useRef(null);
  const hostingInput = useRef(null);
  const hostingUserInput = useRef(null);
  const hostingPassInput = useRef(null);

  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState("");

  const contact = async (e) => {
    e.preventDefault();

    grecaptcha.ready(() => {
      grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
          action: "submit",
        })
        .then(async (token) => {
          // 3. Send a request to our API with the user's email address.
          const res = await fetch("/api/transfer", {
            body: JSON.stringify({
              first_name: firstNameInput.current.value,
              last_name: lastNameInput.current.value,
              email: emailInput.current.value,
              phone: phoneInput.current.value,
              domain_name: domainInput.current.value,
              domain_login: domainLoginInput.current.value,
              domain_login_url: domainLoginUrlInput.current.value,
              domain_pass: domainPassInput.current.value,
              hosting_name: hostingInput.current.value,
              hosting_user: hostingUserInput.current.value,
              hosting_pass: hostingPassInput.current.value,
              recaptchaResponse: token,
            }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });

          const { error } = await res.json();

          if (error) {
            // 4. If there was an error, update the message in state.
            setMessage(error);

            return;
          }

          // 5. Clear the input value and show a success message.
          firstNameInput.current.value = "";
          lastNameInput.current.value = "";
          emailInput.current.value = "";
          phoneInput.current.value = "";
          emailInput.current.value = "";
          domainInput.current.value = "";
          domainLoginInput.current.value = "";
          domainLoginUrlInput.current.value = "";
          domainPassInput.current.value = "";
          hostingInput.current.value = "";
          hostingUserInput.current.value = "";
          hostingPassInput.current.value = "";

          setMessage(
            "Success! 🎉 Our team will get back to you as soon as possible."
          );
        });
    });
  };

  return (
    <>
      <Seo seo={seo} />

      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              alt=""
            />
          </div>
        </div>
        <div
          id="form"
          className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2"
        >
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Transfer your site to BlessHost
              </h2>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                Send us the details and we'll get back to you as soon as
                possible!
              </p>
              <form
                onSubmit={contact}
                className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                {/* First Name */}
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      ref={firstNameInput}
                      type="text"
                      name="first_name"
                      id="first_name"
                      autoComplete="given-name"
                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      ref={lastNameInput}
                      type="text"
                      name="last_name"
                      id="last_name"
                      autoComplete="family-name"
                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      ref={emailInput}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <span
                      id="phone_description"
                      className="text-sm text-gray-500"
                    >
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      ref={phoneInput}
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      aria-describedby="phone_description"
                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                {/* Domain Name */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Domain Name
                  </label>
                  <div className="mt-1">
                    <input
                      ref={domainInput}
                      type="text"
                      name="company"
                      id="company"
                      placeholder="yourcompany.com"
                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                {/* Domain Login URL */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="domain_login_url"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Domain Login URL
                  </label>
                  <div className="mt-1">
                    <input
                      ref={domainLoginInput}
                      type="url"
                      name="domain_login_url"
                      id="domain_login_url"
                      placeholder=""
                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                {/* Domain Username */}
                <div>
                  <label
                    htmlFor="domain_username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Domain Username
                  </label>
                  <div className="mt-1">
                    <input
                      ref={domainLoginInput}
                      type="text"
                      name="domain_username"
                      id="domain_username"
                      autoComplete="given-name"
                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                {/* Domain Password */}
                <div>
                  <label
                    htmlFor="domain_password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Domain Password
                  </label>
                  <div className="mt-1">
                    <input
                      ref={domainPassInput}
                      type="password"
                      name="domain_password"
                      id="domain_password"
                      autoComplete="family-name"
                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                {/* Hosting Login URL */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="hosting_login_url"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Hosting Login URL
                  </label>
                  <div className="mt-1">
                    <input
                      ref={hostingInput}
                      type="url"
                      name="hosting_login_url"
                      id="hosting_login_url"
                      placeholder=""
                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                {/* Hosting Username */}
                <div>
                  <label
                    htmlFor="hosting_username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Hosting Username
                  </label>
                  <div className="mt-1">
                    <input
                      ref={hostingUserInput}
                      type="text"
                      name="hosting_username"
                      id="hosting_username"
                      autoComplete="given-name"
                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                {/* Hosting Password */}
                <div>
                  <label
                    htmlFor="hosting_password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Hosting Password
                  </label>
                  <div className="mt-1">
                    <input
                      ref={hostingPassInput}
                      type="password"
                      name="hosting_password"
                      id="hosting_password"
                      autoComplete="family-name"
                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="text-right sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <FAQSDark faqs={faqs} />

      <CTASimple
        normalText="Ready to transfer your website to us?"
        strongText="Fill the form or contact us today."
        normalButton={{
          label: "Contact us",
          href: "/contact",
        }}
        strongButton={{
          label: "Fill form",
          href: "#form",
        }}
      />
    </>
  );
}
