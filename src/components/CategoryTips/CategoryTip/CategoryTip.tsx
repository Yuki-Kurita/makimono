interface CategoryTipProps {
  color: string;
  children: React.ReactNode;
}

const CategoryTip: React.VFC<CategoryTipProps> = ({ color, children }) => {
  return (
    <div
      className={`${color} mr-2 text-white px-4 py-2 text-center w-auto rounded-xl`}
    >
      {children}
    </div>
  );
};

export default CategoryTip;
