const Error = ({ children }) => {
  return (
    <div
      className="bg-red-500 text-white text-center p-3 mb-3
      rounded-md"
    >
      {children}
    </div>
  );
};

export default Error;
