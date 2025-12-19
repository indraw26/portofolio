const LabelText = ({ text }) => {
  return (
    <span className="inline-block px-3 py-1 text-sm rounded-full bg-red-400/10 text-red-400 border border-red-400/30 transition-all duration-300 hover:scale-105 cursor-default">
      {text}
    </span>
  );
};

export default LabelText;
