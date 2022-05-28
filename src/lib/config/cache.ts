import { InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // offsetでページネーションを行うqueryを追加する
        findRoadmap: offsetLimitPagination(),
      },
    },
  },
});
