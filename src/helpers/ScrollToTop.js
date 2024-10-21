import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({ contentRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo(0, 0);
    }
  }, [pathname, contentRef]);

  return null;
}

export default ScrollToTop;
