import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/user/userSlice";
import { useEffect } from "react";
import { auth } from "../../../config/firebaseConfig";

interface AuthProps {
  children: React.ReactNode;
}

const Auth: React.VFC<AuthProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(setUser({ isLogin: true, name: user?.displayName }));
      console.log(user);
    });
  }, [dispatch]);
  // auth.onAuthStateChanged((user) => {
  //   dispatch(
  //     setUser({
  //       isLogin: true,
  //       name: user?.displayName,
  //     })
  //   );
  // });
  return <>{children}</>;
};

export default Auth;
