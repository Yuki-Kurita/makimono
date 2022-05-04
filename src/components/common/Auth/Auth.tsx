import { GET_AUTHOR_BY_ID } from "@/lib/graphql/author/getAuthorById";
import {
  Author,
  Exact,
  GetAuthorByIdQuery,
  GetAuthorByIdQueryVariables,
} from "@/model/types";
import { ApolloQueryResult, useLazyQuery } from "@apollo/client";
import { createContext, useEffect, useState } from "react";

interface AuthProps {
  children: React.ReactNode;
}

export interface UserState {
  data: Author | undefined;
  refetch: (
    variables?:
      | Partial<
          Exact<{
            [key: string]: never;
          }>
        >
      | undefined
  ) => Promise<ApolloQueryResult<GetAuthorByIdQuery>>;
}

export const AuthContext = createContext<UserState | undefined>(undefined);

const Auth: React.VFC<AuthProps> = ({ children }) => {
  const [getAuthor] = useLazyQuery<
    GetAuthorByIdQuery,
    GetAuthorByIdQueryVariables
  >(GET_AUTHOR_BY_ID);

  const [userState, setUserState] = useState();
  useEffect(() => {
    console.log("call");
    getAuthor().then((author) => {
      console.log(author.data);
      setUserState({
        data: author.data?.getAuthorById,
        refetch: author.refetch,
      });
    });
  }, [getAuthor]);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (!userInfo.name) {
  //     if (auth.currentUser) {
  //       getAuthorById().then((author) => {
  //         const u = {
  //           id: author.data?.getAuthorById.id,
  //           name:
  //             author.data?.getAuthorById.name || auth.currentUser?.displayName,
  //           iconUrl:
  //             author.data?.getAuthorById.iconUrl || auth.currentUser?.photoURL,
  //           isLogin: true,
  //         };
  //         setUser(u);
  //         setUserInfo(u);
  //       });
  //     } else {
  //       setUser({
  //         isLogin: false,
  //       });
  //       setUserInfo({
  //         isLogin: false,
  //       });
  //     }
  //   }
  // }, [getAuthorById, userInfo]);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     getAuthorById().then((author) => {
  //       dispatch(
  //         setUser({
  //           id: author.data?.getAuthorById.id,
  //           name: author.data?.getAuthorById.name || user?.displayName,
  //           iconUrl: author.data?.getAuthorById.iconUrl || user?.photoURL,
  //           isLogin: true,
  //         })
  //       );
  //     });
  //   });
  // }, [dispatch, getAuthorById]);

  return (
    <AuthContext.Provider value={userState}>{children}</AuthContext.Provider>
  );
};

export default Auth;
