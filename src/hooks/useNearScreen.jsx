import { useEffect, useState, useRef } from "react";

function useNearScreen({ distance = "100px", externalRef, once = true } = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();
  const element = externalRef ? externalRef.current : fromRef.current;
  let observer;

  useEffect(function () {
    const onchange = (entrices, observer) => {
      const elem = entrices[0];

      if (elem.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else !once && setShow(false);
    };

    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      const observer = new IntersectionObserver(onchange, {
        rootMargin: distance,
      });
      if (element) return observer.observe(element);
    });

    return () => observer && observer.disconnect();
  });
  return { isNearScreen, fromRef };
}

export default useNearScreen;
