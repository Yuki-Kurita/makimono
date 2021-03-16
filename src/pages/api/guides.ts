import type { NextApiRequest, NextApiResponse } from "next";
import { mockData } from "./mockData";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(mockData);
};
