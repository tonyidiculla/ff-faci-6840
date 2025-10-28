interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="h-full w-full p-6 bg-transparent">
      {children}
    </div>
  );
};