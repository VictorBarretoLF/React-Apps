import { useEffect, useRef } from "react";

const useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let optionHandler = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", optionHandler);

    return () => {
      document.removeEventListener("mousedown", optionHandler);
    };
  }, []);

  return domNode;
};

export default useClickOutside;
