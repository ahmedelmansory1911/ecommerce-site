const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div className={`mx-auto w-full  max-w-screen-xl ${className}`}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
