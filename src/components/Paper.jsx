export const Paper = ({ children, className }) => {
  return (
    <div
      className={`lg:w-4/12 md:w-3/5 w-11/12 p-6 relative flex flex-col text-gray-900 rounded-lg bg-gray-300 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};
