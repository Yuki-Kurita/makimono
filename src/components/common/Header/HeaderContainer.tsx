import { auth } from "@/config/firebaseConfig";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearUser } from "@/store/user/userSlice";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SearchModal } from "../Layout/SearchModal";
import { Modal } from "../Modal";
import Header from "./Header";

const HeaderContainer: React.VFC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowSearchModal, setIsShowSearchModal] = useState(false);
  const [searchWord, setSearchWord] = useState("");
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
  const onClickSearchButton = () => {
    setIsShowSearchModal((show) => !show);
  };
  const onChangeSearchWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };
  return (
    <>
      {isShowSearchModal && (
        <Modal id="searchModal">
          <SearchModal
            onClickCloseModal={onClickSearchButton}
            searchWord={searchWord}
            onChangeSearchWord={onChangeSearchWord}
          />
        </Modal>
      )}
      <Header
        user={user}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClickSignOut={onClickSignOut}
        onClickSearchButton={onClickSearchButton}
      />
    </>
  );
};

export default HeaderContainer;
