interface OGPProps {
  url: string;
}

export const OGP: React.VFC<OGPProps> = ({ url }) => {
  fetch("/api/ogp", { method: "POST", body: JSON.stringify({ url }) }).then(
    (text) => {
      console.log(text);
      const el = new DOMParser().parseFromString(text, "text/html");
      const headEls = el.head.children;
      Array.from(headEls).map((v) => {
        const prop = v.getAttribute("property");
        if (!prop) return;
        console.log(prop, v.getAttribute("content"));
      });
    }
  );
  return <>{url}</>;
};
