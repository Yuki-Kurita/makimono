import RoadmapResponse from "@/lib/RoadmapResponse";
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const mockData: RoadmapResponse = {
    id: 1,
    title: "Javaマスターの道",
    item: [
      {
        link: "https://hoge.com",
        comment: "まずはこれから",
        order: 1,
      },
      {
        link: "https://fuga.com",
        comment: "次ははこれ",
        order: 2,
      },
      {
        link: "https://tyotto-good.com",
        comment: "最後はこれ",
        order: 3,
      },
    ],
    publisher: "taro",
    publishedAt: "2021-12-22 10:00:00",
    like: 5,
    category: "programming",
  };
  res.status(200).json(mockData);
};
