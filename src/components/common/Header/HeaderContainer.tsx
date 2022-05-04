import { auth } from "@/config/firebaseConfig";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearUser } from "@/store/user/userSlice";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "./Header";

const HeaderContainer: React.VFC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.user);
  const onClickSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(clearUser());
        router.push("/");
        router.reload();
      })
      .catch((err) => {
        router.push("/system-error");
      });
  };
  return (
    <Header
      user={user}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClickSignOut={onClickSignOut}
    />
  );
};

export default HeaderContainer;
