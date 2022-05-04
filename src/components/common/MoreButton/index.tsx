import Link from "next/link";

interface MoreButtonProps {
  href: string;
  children: React.ReactNode;
}

export const MoreButton: React.FC<MoreButtonProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="block text-md font-extrabold mt-4 mb-2 mx-auto px-4 py-2 w-64 rounded-lg shadow text-center text-gray-600 bg-white">
        {children}
      </a>
    </Link>
  );
};
