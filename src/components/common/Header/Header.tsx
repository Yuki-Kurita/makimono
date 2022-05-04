import { User } from "@/domain/user/User";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  user: User;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onClickSignOut: () => void;
}

const Header: React.VFC<HeaderProps> = ({
  user,
  isOpen,
  setIsOpen,
  onClickSignOut,
}) => {
  return (
    <div className="pt-3">
      <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 rounded-2xl md:w-10/12 sm:w-11/12 shadow-md">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <Link href="/">
            <a href="#" className="flex justify-start lg:w-0 lg:flex-1">
              <span className="sr-only">makimono</span>
              <Image
                className="h-8 w-auto sm:h-10"
                src="/makimono.svg"
                width={35}
                height={35}
                alt="icon"
              />
              <span className="w-10 h-10 ml-8 flex justify-center items-center font-bold text-xl">
                makimono
              </span>
            </a>
          </Link>
          <div className="flex items-center justify-end space-x-3 align-middle md:flex-1 lg:w-0">
            <Image src="/search.svg" width={25} height={25} alt="search icon" />
            {user?.name ? (
              <>
                <Link href="/roadmaps/new">
                  <a className="flex rounded bg-highlight text-white px-3 py-1">
                    <div>作成する</div>
                    <Image
                      src="/feather.svg"
                      width={20}
                      height={20}
                      alt="create icon"
                    ></Image>
                  </a>
                </Link>
                <div onClick={() => setIsOpen(!isOpen)}>
                  <Image
                    className="inline object-cover w-10 h-10 rounded-full border-2 border-gray-500"
                    src={user.iconUrl ? user.iconUrl : "/noimage.svg"}
                    width={35}
                    height={35}
                    alt="Profile image"
                  />
                </div>
                {/* ドロップダウンメニュー */}
                {isOpen && (
                  <div className="flex justify-center absolute">
                    <div
                      x-show="dropdownOpen"
                      className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20"
                    >
                      <Link href={`/user/${user.id}`}>
                        <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-400 hover:text-white">
                          {user.name}
                        </a>
                      </Link>
                      <a
                        onClick={onClickSignOut}
                        className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-400 hover:text-white"
                      >
                        ログアウト
                      </a>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Link href="/signIn">
                <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2  rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Sign in
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
