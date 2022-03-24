interface ButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.VFC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={(e) => onClick(e)}
      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-emerald-900 rounded-lg hover:bg-emerald-50 border-emerald-900 border-2"
    >
      {children}
    </button>
  );
};
