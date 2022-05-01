import { Loading } from "@/components/common/Loading";
import { UPDATE_LIKE } from "@/lib/graphql/like/likeMutation";
import { FETCH_IS_LIKED_BY_ME } from "@/lib/graphql/like/likeQuery";
import {
  Exact,
  FetchIsLikedByMeQuery,
  FetchIsLikedByMeQueryVariables,
  FetchRoadmapByIdQuery,
  UpdateLikeMutation,
  UpdateLikeMutationVariables,
} from "@/model/types";
import { ApolloQueryResult, useMutation, useQuery } from "@apollo/client";

interface ButtonsProps {
  roadmapId: string;
  likes: number;
  refetchRoadmap: (
    variables?:
      | Partial<
          Exact<{
            id: string;
          }>
        >
      | undefined
  ) => Promise<ApolloQueryResult<FetchRoadmapByIdQuery>>;
}

export const Buttons: React.VFC<ButtonsProps> = ({
  roadmapId,
  likes,
  refetchRoadmap,
}) => {
  const [updateLike, { loading, error }] = useMutation<
    UpdateLikeMutation,
    UpdateLikeMutationVariables
  >(UPDATE_LIKE);
  const {
    data: isLike,
    loading: isLikeLoading,
    error: isLikeError,
    refetch: isLikeRefetch,
  } = useQuery<FetchIsLikedByMeQuery, FetchIsLikedByMeQueryVariables>(
    FETCH_IS_LIKED_BY_ME,
    {
      fetchPolicy: "no-cache",
      nextFetchPolicy: "no-cache",
      variables: {
        roadmapId: roadmapId,
      },
    }
  );
  const onClickLike = () => {
    updateLike({
      variables: {
        roadmapId: roadmapId,
      },
    }).then(() => {
      isLikeRefetch();
      refetchRoadmap();
    });
  };
  return (
    <div className="flex justify-around sticky top-96 py-4">
      {loading || isLikeLoading ? (
        <Loading />
      ) : (
        <div className="flex align-middle">
          <button
            className="bg-white rounded-full p-2 shadow hover:bg-slate-200"
            onClick={onClickLike}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 w-8 ${
                isLike &&
                isLike.fetchIsLikedByMe.length >= 1 &&
                isLike.fetchIsLikedByMe[0].isMine
                  ? "fill-amber-300 text-amber-400"
                  : "text-gray-500 fill-white"
              }`}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </button>
          <div className="ml-4 mt-2 text-gray-400 text-xl font-semibold">
            {likes}
          </div>
        </div>
      )}
      {error && (
        <div className="text-accent font-bold text-center">
          通信エラーが発生しました
        </div>
      )}
      {/* TODO: bookmark機能 */}
      {/* <button className="bg-white rounded-full p-2 shadow hover:bg-slate-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      </button> */}
    </div>
  );
};
