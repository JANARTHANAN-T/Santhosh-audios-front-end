import { useState, useEffect } from "react";

function TopNavBtn() {
  const [height, setHeight] = useState();
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setHeight(scrollPosition);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(height);

  if (height > 500)
    return (
        <button
          type="button"
          className="fixed bottom-10 right-8 animate-bounce bg-[#6b78b1] text-white font-bold rounded-full p-2 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
    );
}

export default TopNavBtn;