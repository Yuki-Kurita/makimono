import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type AuthorInput = {
  firebaseId: Scalars['String'];
  iconUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
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
  description?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  links: Array<LinkInput>;
  title: Scalars['String'];
};

export type Link = {
  __typename?: 'Link';
  id: Scalars['Float'];
  url: Scalars['String'];
};

export type LinkInput = {
  id: Scalars['Float'];
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteCategory: Scalars['Boolean'];
  deleteRoadmap: Scalars['Boolean'];
  postAuthor: Author;
  updateAuthor: Author;
  updateCategory: Scalars['Boolean'];
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


export type MutationUpdateAuthorArgs = {
  author: AuthorInput;
};


export type MutationUpdateCategoryArgs = {
  category: CategoryInput;
  id?: Maybe<Scalars['Int']>;
};


export type MutationUpdateRoadmapArgs = {
  id?: Maybe<Scalars['String']>;
  roadmap: RoadmapInput;
};

export type Query = {
  __typename?: 'Query';
  findAllCategories: Array<Category>;
  findRoadmap: Array<Roadmap>;
};


export type QueryFindRoadmapArgs = {
  categoryId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  order?: Maybe<RoadmapOrder>;
  orderBy?: Maybe<RoadmapOrderBy>;
  page?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
};

export type Roadmap = {
  __typename?: 'Roadmap';
  author: Author;
  category: Category;
  id: Scalars['String'];
  items: Array<Item>;
  likes: Scalars['Int'];
  tags: Array<Maybe<Scalars['String']>>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type RoadmapInput = {
  author: AuthorInput;
  category: CategoryInput;
  items: Array<ItemInput>;
  tags: Array<Maybe<TagInput>>;
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

export type TagInput = {
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type FindAllCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllCategoryQuery = { __typename?: 'Query', findAllCategories: Array<{ __typename?: 'Category', id: number, name: string }> };

export type PostAuthorMutationVariables = Exact<{
  author: AuthorInput;
}>;


export type PostAuthorMutation = { __typename?: 'Mutation', postAuthor: { __typename?: 'Author', id: number, name: string, iconUrl?: string | null | undefined, firebaseId: string } };

export type FindRoadmapQueryVariables = Exact<{ [key: string]: never; }>;


export type FindRoadmapQuery = { __typename?: 'Query', findRoadmap: Array<{ __typename?: 'Roadmap', id: string, title: string, tags: Array<string | null | undefined>, likes: number, updatedAt: any, items: Array<{ __typename?: 'Item', id: number, title: string, description?: string | null | undefined, links: Array<{ __typename?: 'Link', url: string }> }>, category: { __typename?: 'Category', id: number, name: string }, author: { __typename?: 'Author', name: string, iconUrl?: string | null | undefined } }> };

export type FindLatestRoadmapQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type FindLatestRoadmapQuery = { __typename?: 'Query', findRoadmap: Array<{ __typename?: 'Roadmap', id: string, title: string, tags: Array<string | null | undefined>, likes: number, updatedAt: any, category: { __typename?: 'Category', id: number, name: string }, author: { __typename?: 'Author', name: string, iconUrl?: string | null | undefined } }> };

export type FindRoadmapByCategoryQueryVariables = Exact<{
  categoryId: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type FindRoadmapByCategoryQuery = { __typename?: 'Query', findRoadmap: Array<{ __typename?: 'Roadmap', id: string, title: string, tags: Array<string | null | undefined>, likes: number, updatedAt: any, category: { __typename?: 'Category', id: number, name: string }, author: { __typename?: 'Author', name: string, iconUrl?: string | null | undefined } }> };


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
export const FindRoadmapDocument = gql`
    query findRoadmap {
  findRoadmap {
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
    tags
    likes
    author {
      name
      iconUrl
    }
    updatedAt
  }
}
    `;

/**
 * __useFindRoadmapQuery__
 *
 * To run a query within a React component, call `useFindRoadmapQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRoadmapQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRoadmapQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindRoadmapQuery(baseOptions?: Apollo.QueryHookOptions<FindRoadmapQuery, FindRoadmapQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindRoadmapQuery, FindRoadmapQueryVariables>(FindRoadmapDocument, options);
      }
export function useFindRoadmapLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindRoadmapQuery, FindRoadmapQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindRoadmapQuery, FindRoadmapQueryVariables>(FindRoadmapDocument, options);
        }
export type FindRoadmapQueryHookResult = ReturnType<typeof useFindRoadmapQuery>;
export type FindRoadmapLazyQueryHookResult = ReturnType<typeof useFindRoadmapLazyQuery>;
export type FindRoadmapQueryResult = Apollo.QueryResult<FindRoadmapQuery, FindRoadmapQueryVariables>;
export const FindLatestRoadmapDocument = gql`
    query findLatestRoadmap($limit: Int!) {
  findRoadmap(limit: $limit, order: DESC, orderBy: UPDATEDAT) {
    id
    title
    category {
      id
      name
    }
    tags
    likes
    author {
      name
      iconUrl
    }
    updatedAt
  }
}
    `;

/**
 * __useFindLatestRoadmapQuery__
 *
 * To run a query within a React component, call `useFindLatestRoadmapQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindLatestRoadmapQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindLatestRoadmapQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useFindLatestRoadmapQuery(baseOptions: Apollo.QueryHookOptions<FindLatestRoadmapQuery, FindLatestRoadmapQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindLatestRoadmapQuery, FindLatestRoadmapQueryVariables>(FindLatestRoadmapDocument, options);
      }
export function useFindLatestRoadmapLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindLatestRoadmapQuery, FindLatestRoadmapQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindLatestRoadmapQuery, FindLatestRoadmapQueryVariables>(FindLatestRoadmapDocument, options);
        }
export type FindLatestRoadmapQueryHookResult = ReturnType<typeof useFindLatestRoadmapQuery>;
export type FindLatestRoadmapLazyQueryHookResult = ReturnType<typeof useFindLatestRoadmapLazyQuery>;
export type FindLatestRoadmapQueryResult = Apollo.QueryResult<FindLatestRoadmapQuery, FindLatestRoadmapQueryVariables>;
export const FindRoadmapByCategoryDocument = gql`
    query findRoadmapByCategory($categoryId: Int!, $limit: Int!) {
  findRoadmap(categoryId: $categoryId, limit: $limit) {
    id
    title
    category {
      id
      name
    }
    tags
    likes
    author {
      name
      iconUrl
    }
    updatedAt
  }
}
    `;

/**
 * __useFindRoadmapByCategoryQuery__
 *
 * To run a query within a React component, call `useFindRoadmapByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRoadmapByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRoadmapByCategoryQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useFindRoadmapByCategoryQuery(baseOptions: Apollo.QueryHookOptions<FindRoadmapByCategoryQuery, FindRoadmapByCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindRoadmapByCategoryQuery, FindRoadmapByCategoryQueryVariables>(FindRoadmapByCategoryDocument, options);
      }
export function useFindRoadmapByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindRoadmapByCategoryQuery, FindRoadmapByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindRoadmapByCategoryQuery, FindRoadmapByCategoryQueryVariables>(FindRoadmapByCategoryDocument, options);
        }
export type FindRoadmapByCategoryQueryHookResult = ReturnType<typeof useFindRoadmapByCategoryQuery>;
export type FindRoadmapByCategoryLazyQueryHookResult = ReturnType<typeof useFindRoadmapByCategoryLazyQuery>;
export type FindRoadmapByCategoryQueryResult = Apollo.QueryResult<FindRoadmapByCategoryQuery, FindRoadmapByCategoryQueryVariables>;
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
export type LinkKeySpecifier = ('id' | 'url' | LinkKeySpecifier)[];
export type LinkFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('deleteCategory' | 'deleteRoadmap' | 'postAuthor' | 'updateAuthor' | 'updateCategory' | 'updateRoadmap' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	deleteCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRoadmap?: FieldPolicy<any> | FieldReadFunction<any>,
	postAuthor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateAuthor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRoadmap?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('findAllCategories' | 'findRoadmap' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	findAllCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	findRoadmap?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoadmapKeySpecifier = ('author' | 'category' | 'id' | 'items' | 'likes' | 'tags' | 'title' | 'updatedAt' | RoadmapKeySpecifier)[];
export type RoadmapFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	likes?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
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