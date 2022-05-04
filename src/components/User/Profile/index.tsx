import { UserState } from "@/components/common/Auth/Auth";
import { EDIT_AUTHOR } from "@/lib/graphql/author/postAuthorMutation";
import { EditAuthorMutation, EditAuthorMutationVariables } from "@/model/types";
import { useMutation } from "@apollo/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ProfileProps {
  user: UserState;
}

export const Profile: React.FC<ProfileProps> = ({ user }) => {
  const [editAuthor, { data, loading, error }] = useMutation<
    EditAuthorMutation,
    EditAuthorMutationVariables
  >(EDIT_AUTHOR);
  const [editMode, setEditMode] = useState(false);
  const [userName, setUserName] = useState(user.data?.name || "");
  const handleOnClick = () => {
    setEditMode((edit) => !edit);
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const submitUserEditInfo = () => {
    editAuthor({
      variables: {
        author: {
          name: userName,
        },
      },
    }).then(() => {
      setEditMode((edit) => !edit);
    });
  };
  useEffect(() => {
    setUserName(user.data?.name || "");
  }, [user]);
  return (
    <div className="bg-white px-4 py-8 rounded-lg shadow basis-4/12 flex justify-center flex-col h-72">
      <div className="flex justify-end mb-2">
        {editMode ? (
          <div className="flex gap-4">
            <button onClick={handleOnClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 fill-accent"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button onClick={submitUserEditInfo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 fill-highlight"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ) : (
          <button
            className="w-16 px-2 text-center mb-2 rounded shadow shadow-gray-400"
            onClick={handleOnClick}
          >
            Edit
          </button>
        )}
      </div>
      <div className="flex justify-center mb-2">
        <Image
          className="inline object-cover w-16 h-16 rounded-full border-2 border-gray-500"
          src={user.data?.iconUrl ? user.data?.iconUrl : "/noimage.svg"}
          width={50}
          height={50}
          alt="Profile image"
        />
      </div>
      <div className="text-center text-xl font-semibold pb-4 mb-4 border-b border-gray-300 w-3/4 mx-auto h-10">
        {editMode ? (
          <div>
            <input
              type="text"
              value={userName}
              onChange={handleOnChange}
              className="bg-gray-50 border border-gray-30 shadow-sm text-gray-900 rounded-lg block w-full p-1"
            ></input>
          </div>
        ) : (
          <span className="p-2.5">{user.data?.name}</span>
        )}
      </div>
      <div className="flex justify-around">
        <div className="w-1/2 text-center border-r border-gray-300">
          <div className="font-bold">1</div>
          <div className="text-gray-500">投稿数</div>
        </div>
        <div className="w-1/2 text-center">
          <div className="font-bold">1</div>
          <div className="text-gray-500">総いいね数</div>
        </div>
      </div>
    </div>
  );
};
function useLazyQuery<T, U>(GET_AUTHOR_BY_ID: any): [any] {
  throw new Error("Function not implemented.");
}

function GET_AUTHOR_BY_ID<T, U>(GET_AUTHOR_BY_ID: any): [any] {
  throw new Error("Function not implemented.");
}
