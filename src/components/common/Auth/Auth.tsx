import { auth } from "@/config/firebaseConfig";
import { GET_AUTHOR_BY_ID } from "@/lib/graphql/author/getAuthorById";
import { GetAuthorByIdQuery, GetAuthorByIdQueryVariables } from "@/model/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setUser } from "@/store/user/userSlice";
import { useLazyQuery } from "@apollo/client";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

interface AuthProps {
  children: React.ReactNode;
}

const Auth: React.VFC<AuthProps> = ({ children }) => {
  const [getAuthorById] = useLazyQuery<
    GetAuthorByIdQuery,
    GetAuthorByIdQueryVariables
  >(GET_AUTHOR_BY_ID);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!user.name) {
      if (auth.currentUser) {
        getAuthorById().then((author) => {
          setUser({
            id: author.data?.getAuthorById.id,
            name:
              auth.currentUser?.displayName || author.data?.getAuthorById.name,
            iconUrl:
              auth.currentUser?.photoURL || author.data?.getAuthorById.iconUrl,
            isLogin: true,
          });
        });
      } else {
        setUser({
          isLogin: false,
        });
      }
    }
  }, [getAuthorById, user.name]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getAuthorById().then((author) => {
          dispatch(
            setUser({
              id: author.data?.getAuthorById.id,
              name: user?.displayName,
              iconUrl: user?.photoURL,
              isLogin: true,
            })
          );
        });
      }
    });
  }, [dispatch, getAuthorById]);

  return <>{children}</>;
};

export default Auth;
