import { FIND_ALL_CATEGORIES } from "@/lib/graphql/category/categoryQuery";
import { POST_ROADMAP } from "@/lib/graphql/roadmap/roadmapMutation";
import {
  Category,
  FindAllCategoryQuery,
  PostRoadmapMutation,
  PostRoadmapMutationVariables,
} from "@/model/types";
import { ApolloError, useMutation, useQuery } from "@apollo/client";

interface CreateRoadmap {
  postRoadmap?: any;
  categories?: Category[] | undefined;
  loading: boolean;
  errors?: ApolloError[];
}

export const useCreateRoadmap = (): CreateRoadmap => {
  const [postRoadmap, { data, loading, error }] = useMutation<
    PostRoadmapMutation,
    PostRoadmapMutationVariables
  >(POST_ROADMAP);
  const allCategoriesQuery = useQuery<FindAllCategoryQuery>(
    FIND_ALL_CATEGORIES
  );
  if (allCategoriesQuery.loading || loading) {
    return { loading: true };
  }
  if (allCategoriesQuery.error || error) {
    return {
      loading: false,
      errors: [error, allCategoriesQuery.error].filter(
        (it): it is ApolloError => it !== undefined
      ),
    };
  }

  return {
    postRoadmap,
    categories: allCategoriesQuery.data?.findAllCategories,
    loading: false,
  };
};
