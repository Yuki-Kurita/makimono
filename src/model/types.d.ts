import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Author = {
  __typename?: 'Author';
  firebaseId: Scalars['String'];
  iconUrl?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type AuthorInput = {
  firebaseId: Scalars['String'];
  iconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type CategoryInput = {
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type Item = {
  __typename?: 'Item';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  links: Array<Link>;
  title: Scalars['String'];
};

export type ItemInput = {
  description?: InputMaybe<Scalars['String']>;
  links: Array<LinkInput>;
  title: Scalars['String'];
};

export type Like = {
  __typename?: 'Like';
  firebaseId: Scalars['String'];
  id: Scalars['Int'];
  isMine: Scalars['Boolean'];
  roadmapId: Scalars['String'];
};

export type Link = {
  __typename?: 'Link';
  id: Scalars['Float'];
  ogpDescription?: Maybe<Scalars['String']>;
  ogpImageUrl?: Maybe<Scalars['String']>;
  ogpTitle?: Maybe<Scalars['String']>;
  order: Scalars['Float'];
  url: Scalars['String'];
};

export type LinkInput = {
  ogpDescription?: InputMaybe<Scalars['String']>;
  ogpImageUrl?: InputMaybe<Scalars['String']>;
  ogpTitle?: InputMaybe<Scalars['String']>;
  order: Scalars['Float'];
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteCategory: Scalars['Boolean'];
  deleteRoadmap: Scalars['Boolean'];
  postAuthor: Author;
  postRoadmap: Scalars['Boolean'];
  updateAuthor: Author;
  updateCategory: Scalars['Boolean'];
  updateLike: Like;
  updateRoadmap: Scalars['Boolean'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteRoadmapArgs = {
  id: Scalars['String'];
};


export type MutationPostAuthorArgs = {
  author: AuthorInput;
};


export type MutationPostRoadmapArgs = {
  roadmap: RoadmapInput;
};


export type MutationUpdateAuthorArgs = {
  author: AuthorInput;
};


export type MutationUpdateCategoryArgs = {
  category: CategoryInput;
  id?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateLikeArgs = {
  roadmapId: Scalars['String'];
};


export type MutationUpdateRoadmapArgs = {
  id?: InputMaybe<Scalars['String']>;
  roadmap: RoadmapInput;
};

export type Query = {
  __typename?: 'Query';
  fetchIsLikedByMe: Array<Like>;
  findAllCategories: Array<Category>;
  findLikeRoadmap: Array<Roadmap>;
  findMyRoadmap: Array<Roadmap>;
  findRoadmap: Array<Roadmap>;
  getAllAuthors: Array<Author>;
  getAuthorById: Author;
};


export type QueryFetchIsLikedByMeArgs = {
  roadmapId: Scalars['String'];
};


export type QueryFindRoadmapArgs = {
  categoryId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RoadmapOrder>;
  orderBy?: InputMaybe<RoadmapOrderBy>;
  page?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type Roadmap = {
  __typename?: 'Roadmap';
  author: Author;
  category: Category;
  id: Scalars['String'];
  items: Array<Item>;
  likes: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type RoadmapInput = {
  categoryId: Scalars['Float'];
  items: Array<ItemInput>;
  title: Scalars['String'];
};

export enum RoadmapOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum RoadmapOrderBy {
  Likes = 'LIKES',
  Updatedat = 'UPDATEDAT'
}

export type GetAllAuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAuthorsQuery = { __typename?: 'Query', getAllAuthors: Array<{ __typename?: 'Author', id: string }> };

export type GetAuthorByIdQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthorByIdQuery = { __typename?: 'Query', getAuthorById: { __typename?: 'Author', id: string, name: string, iconUrl?: string | null } };

export type PostAuthorMutationVariables = Exact<{
  author: AuthorInput;
}>;


export type PostAuthorMutation = { __typename?: 'Mutation', postAuthor: { __typename?: 'Author', id: string, name: string, iconUrl?: string | null, firebaseId: string } };

export type FindAllCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllCategoryQuery = { __typename?: 'Query', findAllCategories: Array<{ __typename?: 'Category', id: number, name: string }> };

export type UpdateLikeMutationVariables = Exact<{
  roadmapId: Scalars['String'];
}>;


export type UpdateLikeMutation = { __typename?: 'Mutation', updateLike: { __typename?: 'Like', roadmapId: string } };

export type FetchIsLikedByMeQueryVariables = Exact<{
  roadmapId: Scalars['String'];
}>;


export type FetchIsLikedByMeQuery = { __typename?: 'Query', fetchIsLikedByMe: Array<{ __typename?: 'Like', id: number, roadmapId: string, isMine: boolean }> };

export type RoadmapDetailFieldsFragment = { __typename?: 'Roadmap', id: string, title: string, likes: number, updatedAt: any, category: { __typename?: 'Category', id: number, name: string }, items: Array<{ __typename?: 'Item', id: number, title: string, description?: string | null, links: Array<{ __typename?: 'Link', id: number, url: string, order: number, ogpTitle?: string | null, ogpImageUrl?: string | null, ogpDescription?: string | null }> }>, author: { __typename?: 'Author', name: string, iconUrl?: string | null, firebaseId: string } };

export type RoadmapFieldsFragment = { __typename?: 'Roadmap', id: string, title: string, likes: number, updatedAt: any, category: { __typename?: 'Category', id: number, name: string }, items: Array<{ __typename?: 'Item', id: number }>, author: { __typename?: 'Author', name: string, iconUrl?: string | null } };

export type RoadmapAllFieldsFragment = { __typename?: 'Roadmap', id: string, title: string, likes: number, updatedAt: any, items: Array<{ __typename?: 'Item', id: number, title: string, description?: string | null, links: Array<{ __typename?: 'Link', url: string }> }>, category: { __typename?: 'Category', id: number, name: string }, author: { __typename?: 'Author', name: string, iconUrl?: string | null } };

export type UpdateRoadmapMutationVariables = Exact<{
  roadmap: RoadmapInput;
  id: Scalars['String'];
}>;


export type UpdateRoadmapMutation = { __typename?: 'Mutation', updateRoadmap: boolean };

export type PostRoadmapMutationVariables = Exact<{
  roadmap: RoadmapInput;
}>;


export type PostRoadmapMutation = { __typename?: 'Mutation', postRoadmap: boolean };

export type FetchAllRoadmapIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchAllRoadmapIdsQuery = { __typename?: 'Query', findRoadmap: Array<{ __typename?: 'Roadmap', id: string }> };

export type FetchRoadmapByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FetchRoadmapByIdQuery = { __typename?: 'Query', findRoadmap: Array<{ __typename?: 'Roadmap', id: string, title: string, likes: number, updatedAt: any, category: { __typename?: 'Category', id: number, name: string }, items: Array<{ __typename?: 'Item', id: number, title: string, description?: string | null, links: Array<{ __typename?: 'Link', id: number, url: string, order: number, ogpTitle?: string | null, ogpImageUrl?: string | null, ogpDescription?: string | null }> }>, author: { __typename?: 'Author', name: string, iconUrl?: string | null, firebaseId: string } }>, fetchIsLikedByMe: Array<{ __typename?: 'Like', id: number, roadmapId: string, isMine: boolean }> };

export type FetchForTopQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type FetchForTopQuery = { __typename?: 'Query', findLatestRoadmap: Array<{ __typename?: 'Roadmap', id: string, title: string, likes: number, updatedAt: any, category: { __typename?: 'Category', id: number, name: string }, items: Array<{ __typename?: 'Item', id: number }>, author: { __typename?: 'Author', name: string, iconUrl?: string | null } }>, findProgrammingRoadmap: Array<{ __typename?: 'Roadmap', id: string, title: string, likes: number, updatedAt: any, category: { __typename?: 'Category', id: number, name: string }, items: Array<{ __typename?: 'Item', id: number }>, author: { __typename?: 'Author', name: string, iconUrl?: string | null } }>, findArtRoadmap: Array<{ __typename?: 'Roadmap', id: string, title: string, likes: number, updatedAt: any, category: { __typename?: 'Category', id: number, name: string }, items: Array<{ __typename?: 'Item', id: number }>, author: { __typename?: 'Author', name: string, iconUrl?: string | null } }> };

export type FindUserRoadmapQueryVariables = Exact<{ [key: string]: never; }>;


export type FindUserRoadmapQuery = { __typename?: 'Query', findMyRoadmap: Array<{ __typename?: 'Roadmap', id: string, title: string, likes: number, updatedAt: any, category: { __typename?: 'Category', id: number, name: string }, items: Array<{ __typename?: 'Item', id: number, title: string, description?: string | null, links: Array<{ __typename?: 'Link', id: number, url: string, order: number, ogpTitle?: string | null, ogpImageUrl?: string | null, ogpDescription?: string | null }> }>, author: { __typename?: 'Author', name: string, iconUrl?: string | null, firebaseId: string } }>, findLikeRoadmap: Array<{ __typename?: 'Roadmap', id: string, title: string, likes: number, updatedAt: any, category: { __typename?: 'Category', id: number, name: string }, items: Array<{ __typename?: 'Item', id: number, title: string, description?: string | null, links: Array<{ __typename?: 'Link', id: number, url: string, order: number, ogpTitle?: string | null, ogpImageUrl?: string | null, ogpDescription?: string | null }> }>, author: { __typename?: 'Author', name: string, iconUrl?: string | null, firebaseId: string } }> };

export const RoadmapDetailFieldsFragmentDoc = gql`
    fragment RoadmapDetailFields on Roadmap {
  id
  title
  category {
    id
    name
  }
  items {
    id
    title
    description
    links {
      id
      url
      order
      ogpTitle
      ogpImageUrl
      ogpDescription
    }
  }
  likes
  author {
    name
    iconUrl
    firebaseId
  }
  updatedAt
}
    `;
export const RoadmapFieldsFragmentDoc = gql`
    fragment RoadmapFields on Roadmap {
  id
  title
  category {
    id
    name
  }
  items {
    id
  }
  likes
  author {
    name
    iconUrl
  }
  updatedAt
}
    `;
export const RoadmapAllFieldsFragmentDoc = gql`
    fragment RoadmapAllFields on Roadmap {
  id
  title
  items {
    id
    title
    description
    links {
      url
    }
  }
  category {
    id
    name
  }
  likes
  author {
    name
    iconUrl
  }
  updatedAt
}
    `;
export const GetAllAuthorsDocument = gql`
    query getAllAuthors {
  getAllAuthors {
    id
  }
}
    `;

/**
 * __useGetAllAuthorsQuery__
 *
 * To run a query within a React component, call `useGetAllAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAuthorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllAuthorsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllAuthorsQuery, GetAllAuthorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllAuthorsQuery, GetAllAuthorsQueryVariables>(GetAllAuthorsDocument, options);
      }
export function useGetAllAuthorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAuthorsQuery, GetAllAuthorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllAuthorsQuery, GetAllAuthorsQueryVariables>(GetAllAuthorsDocument, options);
        }
export type GetAllAuthorsQueryHookResult = ReturnType<typeof useGetAllAuthorsQuery>;
export type GetAllAuthorsLazyQueryHookResult = ReturnType<typeof useGetAllAuthorsLazyQuery>;
export type GetAllAuthorsQueryResult = Apollo.QueryResult<GetAllAuthorsQuery, GetAllAuthorsQueryVariables>;
export const GetAuthorByIdDocument = gql`
    query getAuthorById {
  getAuthorById {
    id
    name
    iconUrl
  }
}
    `;

/**
 * __useGetAuthorByIdQuery__
 *
 * To run a query within a React component, call `useGetAuthorByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorByIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAuthorByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetAuthorByIdQuery, GetAuthorByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuthorByIdQuery, GetAuthorByIdQueryVariables>(GetAuthorByIdDocument, options);
      }
export function useGetAuthorByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuthorByIdQuery, GetAuthorByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuthorByIdQuery, GetAuthorByIdQueryVariables>(GetAuthorByIdDocument, options);
        }
export type GetAuthorByIdQueryHookResult = ReturnType<typeof useGetAuthorByIdQuery>;
export type GetAuthorByIdLazyQueryHookResult = ReturnType<typeof useGetAuthorByIdLazyQuery>;
export type GetAuthorByIdQueryResult = Apollo.QueryResult<GetAuthorByIdQuery, GetAuthorByIdQueryVariables>;
export const PostAuthorDocument = gql`
    mutation postAuthor($author: AuthorInput!) {
  postAuthor(author: $author) {
    id
    name
    iconUrl
    firebaseId
  }
}
    `;
export type PostAuthorMutationFn = Apollo.MutationFunction<PostAuthorMutation, PostAuthorMutationVariables>;

/**
 * __usePostAuthorMutation__
 *
 * To run a mutation, you first call `usePostAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAuthorMutation, { data, loading, error }] = usePostAuthorMutation({
 *   variables: {
 *      author: // value for 'author'
 *   },
 * });
 */
export function usePostAuthorMutation(baseOptions?: Apollo.MutationHookOptions<PostAuthorMutation, PostAuthorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostAuthorMutation, PostAuthorMutationVariables>(PostAuthorDocument, options);
      }
export type PostAuthorMutationHookResult = ReturnType<typeof usePostAuthorMutation>;
export type PostAuthorMutationResult = Apollo.MutationResult<PostAuthorMutation>;
export type PostAuthorMutationOptions = Apollo.BaseMutationOptions<PostAuthorMutation, PostAuthorMutationVariables>;
export const FindAllCategoryDocument = gql`
    query findAllCategory {
  findAllCategories {
    id
    name
  }
}
    `;

/**
 * __useFindAllCategoryQuery__
 *
 * To run a query within a React component, call `useFindAllCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllCategoryQuery(baseOptions?: Apollo.QueryHookOptions<FindAllCategoryQuery, FindAllCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllCategoryQuery, FindAllCategoryQueryVariables>(FindAllCategoryDocument, options);
      }
export function useFindAllCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllCategoryQuery, FindAllCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllCategoryQuery, FindAllCategoryQueryVariables>(FindAllCategoryDocument, options);
        }
export type FindAllCategoryQueryHookResult = ReturnType<typeof useFindAllCategoryQuery>;
export type FindAllCategoryLazyQueryHookResult = ReturnType<typeof useFindAllCategoryLazyQuery>;
export type FindAllCategoryQueryResult = Apollo.QueryResult<FindAllCategoryQuery, FindAllCategoryQueryVariables>;
export const UpdateLikeDocument = gql`
    mutation updateLike($roadmapId: String!) {
  updateLike(roadmapId: $roadmapId) {
    roadmapId
  }
}
    `;
export type UpdateLikeMutationFn = Apollo.MutationFunction<UpdateLikeMutation, UpdateLikeMutationVariables>;

/**
 * __useUpdateLikeMutation__
 *
 * To run a mutation, you first call `useUpdateLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLikeMutation, { data, loading, error }] = useUpdateLikeMutation({
 *   variables: {
 *      roadmapId: // value for 'roadmapId'
 *   },
 * });
 */
export function useUpdateLikeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLikeMutation, UpdateLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLikeMutation, UpdateLikeMutationVariables>(UpdateLikeDocument, options);
      }
export type UpdateLikeMutationHookResult = ReturnType<typeof useUpdateLikeMutation>;
export type UpdateLikeMutationResult = Apollo.MutationResult<UpdateLikeMutation>;
export type UpdateLikeMutationOptions = Apollo.BaseMutationOptions<UpdateLikeMutation, UpdateLikeMutationVariables>;
export const FetchIsLikedByMeDocument = gql`
    query fetchIsLikedByMe($roadmapId: String!) {
  fetchIsLikedByMe(roadmapId: $roadmapId) {
    id
    roadmapId
    isMine
  }
}
    `;

/**
 * __useFetchIsLikedByMeQuery__
 *
 * To run a query within a React component, call `useFetchIsLikedByMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchIsLikedByMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchIsLikedByMeQuery({
 *   variables: {
 *      roadmapId: // value for 'roadmapId'
 *   },
 * });
 */
export function useFetchIsLikedByMeQuery(baseOptions: Apollo.QueryHookOptions<FetchIsLikedByMeQuery, FetchIsLikedByMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchIsLikedByMeQuery, FetchIsLikedByMeQueryVariables>(FetchIsLikedByMeDocument, options);
      }
export function useFetchIsLikedByMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchIsLikedByMeQuery, FetchIsLikedByMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchIsLikedByMeQuery, FetchIsLikedByMeQueryVariables>(FetchIsLikedByMeDocument, options);
        }
export type FetchIsLikedByMeQueryHookResult = ReturnType<typeof useFetchIsLikedByMeQuery>;
export type FetchIsLikedByMeLazyQueryHookResult = ReturnType<typeof useFetchIsLikedByMeLazyQuery>;
export type FetchIsLikedByMeQueryResult = Apollo.QueryResult<FetchIsLikedByMeQuery, FetchIsLikedByMeQueryVariables>;
export const UpdateRoadmapDocument = gql`
    mutation updateRoadmap($roadmap: RoadmapInput!, $id: String!) {
  updateRoadmap(roadmap: $roadmap, id: $id)
}
    `;
export type UpdateRoadmapMutationFn = Apollo.MutationFunction<UpdateRoadmapMutation, UpdateRoadmapMutationVariables>;

/**
 * __useUpdateRoadmapMutation__
 *
 * To run a mutation, you first call `useUpdateRoadmapMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoadmapMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoadmapMutation, { data, loading, error }] = useUpdateRoadmapMutation({
 *   variables: {
 *      roadmap: // value for 'roadmap'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateRoadmapMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRoadmapMutation, UpdateRoadmapMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRoadmapMutation, UpdateRoadmapMutationVariables>(UpdateRoadmapDocument, options);
      }
export type UpdateRoadmapMutationHookResult = ReturnType<typeof useUpdateRoadmapMutation>;
export type UpdateRoadmapMutationResult = Apollo.MutationResult<UpdateRoadmapMutation>;
export type UpdateRoadmapMutationOptions = Apollo.BaseMutationOptions<UpdateRoadmapMutation, UpdateRoadmapMutationVariables>;
export const PostRoadmapDocument = gql`
    mutation postRoadmap($roadmap: RoadmapInput!) {
  postRoadmap(roadmap: $roadmap)
}
    `;
export type PostRoadmapMutationFn = Apollo.MutationFunction<PostRoadmapMutation, PostRoadmapMutationVariables>;

/**
 * __usePostRoadmapMutation__
 *
 * To run a mutation, you first call `usePostRoadmapMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostRoadmapMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postRoadmapMutation, { data, loading, error }] = usePostRoadmapMutation({
 *   variables: {
 *      roadmap: // value for 'roadmap'
 *   },
 * });
 */
export function usePostRoadmapMutation(baseOptions?: Apollo.MutationHookOptions<PostRoadmapMutation, PostRoadmapMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostRoadmapMutation, PostRoadmapMutationVariables>(PostRoadmapDocument, options);
      }
export type PostRoadmapMutationHookResult = ReturnType<typeof usePostRoadmapMutation>;
export type PostRoadmapMutationResult = Apollo.MutationResult<PostRoadmapMutation>;
export type PostRoadmapMutationOptions = Apollo.BaseMutationOptions<PostRoadmapMutation, PostRoadmapMutationVariables>;
export const FetchAllRoadmapIdsDocument = gql`
    query fetchAllRoadmapIds {
  findRoadmap {
    id
  }
}
    `;

/**
 * __useFetchAllRoadmapIdsQuery__
 *
 * To run a query within a React component, call `useFetchAllRoadmapIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchAllRoadmapIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchAllRoadmapIdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchAllRoadmapIdsQuery(baseOptions?: Apollo.QueryHookOptions<FetchAllRoadmapIdsQuery, FetchAllRoadmapIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchAllRoadmapIdsQuery, FetchAllRoadmapIdsQueryVariables>(FetchAllRoadmapIdsDocument, options);
      }
export function useFetchAllRoadmapIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchAllRoadmapIdsQuery, FetchAllRoadmapIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchAllRoadmapIdsQuery, FetchAllRoadmapIdsQueryVariables>(FetchAllRoadmapIdsDocument, options);
        }
export type FetchAllRoadmapIdsQueryHookResult = ReturnType<typeof useFetchAllRoadmapIdsQuery>;
export type FetchAllRoadmapIdsLazyQueryHookResult = ReturnType<typeof useFetchAllRoadmapIdsLazyQuery>;
export type FetchAllRoadmapIdsQueryResult = Apollo.QueryResult<FetchAllRoadmapIdsQuery, FetchAllRoadmapIdsQueryVariables>;
export const FetchRoadmapByIdDocument = gql`
    query fetchRoadmapById($id: String!) {
  findRoadmap(id: $id) {
    ...RoadmapDetailFields
  }
  fetchIsLikedByMe(roadmapId: $id) {
    id
    roadmapId
    isMine
  }
}
    ${RoadmapDetailFieldsFragmentDoc}`;

/**
 * __useFetchRoadmapByIdQuery__
 *
 * To run a query within a React component, call `useFetchRoadmapByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchRoadmapByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchRoadmapByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFetchRoadmapByIdQuery(baseOptions: Apollo.QueryHookOptions<FetchRoadmapByIdQuery, FetchRoadmapByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchRoadmapByIdQuery, FetchRoadmapByIdQueryVariables>(FetchRoadmapByIdDocument, options);
      }
export function useFetchRoadmapByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchRoadmapByIdQuery, FetchRoadmapByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchRoadmapByIdQuery, FetchRoadmapByIdQueryVariables>(FetchRoadmapByIdDocument, options);
        }
export type FetchRoadmapByIdQueryHookResult = ReturnType<typeof useFetchRoadmapByIdQuery>;
export type FetchRoadmapByIdLazyQueryHookResult = ReturnType<typeof useFetchRoadmapByIdLazyQuery>;
export type FetchRoadmapByIdQueryResult = Apollo.QueryResult<FetchRoadmapByIdQuery, FetchRoadmapByIdQueryVariables>;
export const FetchForTopDocument = gql`
    query fetchForTop($limit: Int!) {
  findLatestRoadmap: findRoadmap(limit: $limit, order: DESC, orderBy: UPDATEDAT) {
    ...RoadmapFields
  }
  findProgrammingRoadmap: findRoadmap(limit: $limit, categoryId: 1) {
    ...RoadmapFields
  }
  findArtRoadmap: findRoadmap(limit: $limit, categoryId: 6) {
    ...RoadmapFields
  }
}
    ${RoadmapFieldsFragmentDoc}`;

/**
 * __useFetchForTopQuery__
 *
 * To run a query within a React component, call `useFetchForTopQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchForTopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchForTopQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useFetchForTopQuery(baseOptions: Apollo.QueryHookOptions<FetchForTopQuery, FetchForTopQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchForTopQuery, FetchForTopQueryVariables>(FetchForTopDocument, options);
      }
export function useFetchForTopLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchForTopQuery, FetchForTopQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchForTopQuery, FetchForTopQueryVariables>(FetchForTopDocument, options);
        }
export type FetchForTopQueryHookResult = ReturnType<typeof useFetchForTopQuery>;
export type FetchForTopLazyQueryHookResult = ReturnType<typeof useFetchForTopLazyQuery>;
export type FetchForTopQueryResult = Apollo.QueryResult<FetchForTopQuery, FetchForTopQueryVariables>;
export const FindUserRoadmapDocument = gql`
    query findUserRoadmap {
  findMyRoadmap {
    ...RoadmapDetailFields
  }
  findLikeRoadmap {
    ...RoadmapDetailFields
  }
}
    ${RoadmapDetailFieldsFragmentDoc}`;

/**
 * __useFindUserRoadmapQuery__
 *
 * To run a query within a React component, call `useFindUserRoadmapQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserRoadmapQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserRoadmapQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindUserRoadmapQuery(baseOptions?: Apollo.QueryHookOptions<FindUserRoadmapQuery, FindUserRoadmapQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserRoadmapQuery, FindUserRoadmapQueryVariables>(FindUserRoadmapDocument, options);
      }
export function useFindUserRoadmapLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserRoadmapQuery, FindUserRoadmapQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserRoadmapQuery, FindUserRoadmapQueryVariables>(FindUserRoadmapDocument, options);
        }
export type FindUserRoadmapQueryHookResult = ReturnType<typeof useFindUserRoadmapQuery>;
export type FindUserRoadmapLazyQueryHookResult = ReturnType<typeof useFindUserRoadmapLazyQuery>;
export type FindUserRoadmapQueryResult = Apollo.QueryResult<FindUserRoadmapQuery, FindUserRoadmapQueryVariables>;
export type AuthorKeySpecifier = ('firebaseId' | 'iconUrl' | 'id' | 'name' | AuthorKeySpecifier)[];
export type AuthorFieldPolicy = {
	firebaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	iconUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryKeySpecifier = ('id' | 'name' | CategoryKeySpecifier)[];
export type CategoryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemKeySpecifier = ('description' | 'id' | 'links' | 'title' | ItemKeySpecifier)[];
export type ItemFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	links?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LikeKeySpecifier = ('firebaseId' | 'id' | 'isMine' | 'roadmapId' | LikeKeySpecifier)[];
export type LikeFieldPolicy = {
	firebaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isMine?: FieldPolicy<any> | FieldReadFunction<any>,
	roadmapId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LinkKeySpecifier = ('id' | 'ogpDescription' | 'ogpImageUrl' | 'ogpTitle' | 'order' | 'url' | LinkKeySpecifier)[];
export type LinkFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ogpDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	ogpImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	ogpTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('deleteCategory' | 'deleteRoadmap' | 'postAuthor' | 'postRoadmap' | 'updateAuthor' | 'updateCategory' | 'updateLike' | 'updateRoadmap' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	deleteCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRoadmap?: FieldPolicy<any> | FieldReadFunction<any>,
	postAuthor?: FieldPolicy<any> | FieldReadFunction<any>,
	postRoadmap?: FieldPolicy<any> | FieldReadFunction<any>,
	updateAuthor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	updateLike?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRoadmap?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('fetchIsLikedByMe' | 'findAllCategories' | 'findLikeRoadmap' | 'findMyRoadmap' | 'findRoadmap' | 'getAllAuthors' | 'getAuthorById' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	fetchIsLikedByMe?: FieldPolicy<any> | FieldReadFunction<any>,
	findAllCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	findLikeRoadmap?: FieldPolicy<any> | FieldReadFunction<any>,
	findMyRoadmap?: FieldPolicy<any> | FieldReadFunction<any>,
	findRoadmap?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllAuthors?: FieldPolicy<any> | FieldReadFunction<any>,
	getAuthorById?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoadmapKeySpecifier = ('author' | 'category' | 'id' | 'items' | 'likes' | 'title' | 'updatedAt' | RoadmapKeySpecifier)[];
export type RoadmapFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	likes?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Author?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthorKeySpecifier | (() => undefined | AuthorKeySpecifier),
		fields?: AuthorFieldPolicy,
	},
	Category?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryKeySpecifier | (() => undefined | CategoryKeySpecifier),
		fields?: CategoryFieldPolicy,
	},
	Item?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemKeySpecifier | (() => undefined | ItemKeySpecifier),
		fields?: ItemFieldPolicy,
	},
	Like?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LikeKeySpecifier | (() => undefined | LikeKeySpecifier),
		fields?: LikeFieldPolicy,
	},
	Link?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LinkKeySpecifier | (() => undefined | LinkKeySpecifier),
		fields?: LinkFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Roadmap?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoadmapKeySpecifier | (() => undefined | RoadmapKeySpecifier),
		fields?: RoadmapFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;