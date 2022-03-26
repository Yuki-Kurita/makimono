import { JSDOM } from "jsdom";
import { NextApiRequest, NextApiResponse } from "next";

export interface OGPResponse {
  title?: string;
  image?: string;
  description?: string;
  url?: string;
}

export default async function ogpHandler(
  req: NextApiRequest,
  res: NextApiResponse<OGPResponse>
) {
  const { method } = req;
  switch (method) {
    case "POST":
      let response: OGPResponse = {};
      const body = JSON.parse(req.body);
      const url = body.url;
      const data = await (await fetch(url)).text();
      const jsdom = new JSDOM();
      const parser = new jsdom.window.DOMParser();
      const el = parser.parseFromString(data, "text/html");
      Array.from(el.head.children).map((head) => {
        if (head.getAttribute("property") === "og:title") {
          response.title = head.getAttribute("content") || undefined;
        }
        if (head.getAttribute("property") === "og:image") {
          response.image = head.getAttribute("content") || undefined;
        }
        if (head.getAttribute("property") === "og:description") {
          response.description = head.getAttribute("content") || undefined;
        }
        if (head.getAttribute("property") === "og:url") {
          response.url = head.getAttribute("content") || undefined;
        }
      });
      res.status(200).send(response);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
