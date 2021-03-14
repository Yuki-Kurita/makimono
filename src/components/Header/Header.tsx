import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <div>
      <span>Tebiki</span>
      <Link href="/roadmaps/new">
        <a>ロードマップを作成する</a>
      </Link>
      <Link href="/collections/new">
        <a>コレクションを作成する</a>
      </Link>
    </div>
  );
};

export default Header;
