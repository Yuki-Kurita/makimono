import { NextApiRequest, NextApiResponse } from "next";

export default async function eventHandler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const { method } = req;
  switch (method) {
    case "POST":
      const body = JSON.parse(req.body);
      const url = body.url;
      const data = await (await fetch(url)).text();
      const el = new DOMParser().parseFromString(data, "text/html");
      console.log(el);
      res.status(200).send(data);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
