import { auth } from "@/config/firebaseConfig";
import { Category } from "@/model/types";
import { ExploreQuery } from "@/pages/explore";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearUser } from "@/store/user/userSlice";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SearchModal } from "../Layout/SearchModal";
import { Modal } from "../Modal";
import Header from "./Header";

interface HeaderProps {
  categories: Category[];
}

const HeaderContainer: React.VFC<HeaderProps> = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowSearchModal, setIsShowSearchModal] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
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
  const onChangeSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };
  const onSubmitSearchWord = () => {
    const query: ExploreQuery = {};
    if (searchWord) query.q = searchWord;
    if (selectedCategory) query.category = selectedCategory;
    router.push(
      `/explore?${new URLSearchParams(
        query as Record<string, string>
      ).toString()}`
    );
    setIsShowSearchModal(false);
  };
  return (
    <>
      {isShowSearchModal && (
        <Modal id="searchModal">
          <SearchModal
            onClickCloseModal={onClickSearchButton}
            searchWord={searchWord}
            onChangeSearchWord={onChangeSearchWord}
            onSubmitSearchWord={onSubmitSearchWord}
            categories={categories}
            selectedCategory={selectedCategory}
            onChangeSelectCategory={onChangeSelectCategory}
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
