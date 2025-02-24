const Input = ({ type = "text", ...props }) => {
  return <input type={type} {...props} className="border p-2 w-full rounded-md" />;
};

export { Input };
