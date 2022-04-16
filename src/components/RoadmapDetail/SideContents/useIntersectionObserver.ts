import { useEffect, useRef } from "react";

// NOTES: https://www.emgoto.com/react-table-of-contents/
export const useIntersectionObserver = (
  setActiveTitle: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
  const headingElementsRef = useRef<any>({});
  useEffect(() => {
    const callback = (headings: any[]) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings: any[] = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: any) =>
        headingElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveTitle(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );
        setActiveTitle(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -40% 0px",
    });

    const headingElements = Array.from(document.querySelectorAll("h2, h3"));

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveTitle]);
};
