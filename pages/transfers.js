import FAQSDark from "../components/faqs-dark";
import CTASimple from "../components/cta-simple";

const faqs = [
  {
    question: "What are nameservers?",
    answer: "",
  },
  {
    question: "What is cPanel?",
    answer: "",
  },
  {
    question: "Where can I find my cPanel login credentials?",
    answer: "",
  },
  {
    question: "Where can I find my domain login credentials?",
    answer: "",
  },
  {
    question:
      "How can I get assistance from your support team to obtain my username and password?",
    answer:
      "We can handle it all for you. Just write an email to support@blesshost.com and we will take it from there so you can focus on growing your business!",
  },
];
export default function transfersPage() {
  return (
    <>
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
        <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
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
                action="#"
                method="POST"
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
                      type="text"
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
                      type="text"
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
                      type="text"
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
                      type="text"
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

      <CTASimple />
    </>
  );
}
