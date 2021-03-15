import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const mockData = [
    {
      id: 1,
      title: "Javaマスターの道",
      publisher: "taro",
      publishedAt: "2021-12-22 10:00:00",
      like: 5,
      type: "roadmap",
      category: "programming",
    },
    {
      id: 1,
      title: "JavaScriptマスターの道",
      publisher: "hoge hoge",
      publishedAt: "2020-12-24 13:00:00",
      like: 399,
      type: "roadmap",
      category: "programming",
    },
    {
      id: 1,
      title: "Pythonist",
      publisher: "fuga",
      publishedAt: "2021-12-22 10:00:00",
      like: 5,
      type: "roadmap",
      category: "programming",
    },
    {
      id: 1,
      title: "Spring Boot",
      publisher: "taro",
      publishedAt: "2021-04-22 10:00:00",
      like: 75,
      type: "collection",
      category: "programming",
    },
    {
      id: 1,
      title: "DDD",
      publisher: "taro",
      publishedAt: "2021-01-22 10:00:00",
      like: 1,
      type: "collection",
      category: "programming",
    },
    {
      id: 1,
      title: "一人暮らし料理",
      publisher: "hanako",
      publishedAt: "2019-12-22 11:00:00",
      like: 52,
      type: "collection",
      category: "cooking",
    },
    {
      id: 1,
      title: "お菓子入門",
      publisher: "hanako",
      publishedAt: "2020-07-22 10:00:00",
      like: 999,
      type: "roadmap",
      category: "cooking",
    },
  ];
  res.status(200).json(mockData);
};
