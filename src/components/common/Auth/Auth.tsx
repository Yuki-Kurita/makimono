import { auth } from "@/config/firebaseConfig";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setUser } from "@/store/user/userSlice";
import { useEffect } from "react";

interface AuthProps {
  children: React.ReactNode;
}

const Auth: React.VFC<AuthProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!user.name) {
      auth.currentUser
        ? setUser({
            name: auth.currentUser.displayName,
            iconUrl: auth.currentUser?.photoURL,
            isLogin: true,
          })
        : setUser({
            isLogin: false,
          });
    }
  }, [user.name]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(
        setUser({
          name: user?.displayName,
          iconUrl: user?.photoURL,
          isLogin: true,
        })
      );
    });
  }, [dispatch]);

  return <>{children}</>;
};

export default Auth;
