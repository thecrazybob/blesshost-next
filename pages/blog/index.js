import { getAllPostsForHome } from "../../lib/api";
import usePagination from "../../lib/usePagination";
import BlogCard from "../../components/blog-card";
import { useRef, useState, Fragment, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/outline";

export default function Page({ allPosts: { edges } }) {
  const [show, setShow] = useState(true);
  const { next, currentPage, currentData, maxPage } = usePagination(edges, 6);
  const currentPosts = currentData();
  const [element, setElement] = useState(null);
  const observer = useRef();
  const prevY = useRef(0);
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        const y = firstEntry.boundingClientRect.y;

        if (prevY.current > y) {
          next();
        }
        prevY.current = y;
      },
      { threshold: 0.5 }
    );
  }, []);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShow(false);
      }, 7000);
      return () => clearTimeout(timeout);
    }, []);

  return (
    <>
      <BlogCard posts={currentPosts} />
      {currentPage !== maxPage ? (
        <h1 ref={setElement}>Loading Posts...</h1>
      ) : (
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end fixed top-32 right-0 z-50 pr-2 ">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-46 bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-3">
                <div className="flex items-center">
                    <p className="text-sm font-medium text-gray-900 inline ">
                      End of Posts
                    </p>
                  <div className="ml-4">
                  <CheckCircleIcon
                      className="h-6 w-6 text-green-400 inline "
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      )}
    </>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPostsForHome();
  return {
    props: { allPosts },
  };
}
