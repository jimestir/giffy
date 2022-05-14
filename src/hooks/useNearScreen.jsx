import { useEffect, useState, useRef } from "react";

function useNearScreen({ distance = "100px" } = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  let observer;

  useEffect(function () {
    const onchange = (entrices, observer) => {
      const elem = entrices[0];

      if (elem.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      const observer = new IntersectionObserver(onchange, {
        rootMargin: distance,
      });

      observer.observe(fromRef.current);
    });

    return () => observer && observer.disconnect();
  });
  return { isNearScreen, fromRef };
}

export default useNearScreen;
