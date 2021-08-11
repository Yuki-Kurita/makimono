import { auth } from "@/config/firebaseConfig";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearUser } from "@/store/user/userSlice";
import React, { useState } from "react";
import Header from "./Header";

const HeaderContainer: React.VFC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const onClickSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(clearUser());
      })
      .catch((err) => {
        console.error(err);
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
