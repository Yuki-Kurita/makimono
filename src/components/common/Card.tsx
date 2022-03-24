interface CardProps {
  children: React.ReactNode;
}

export const Card: React.VFC<CardProps> = ({ children }) => {
  return (
    <div className="px-10 py-12 bg-white rounded-lg shadow-md">{children}</div>
  );
};
