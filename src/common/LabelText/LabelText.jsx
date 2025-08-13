const LabelText = ({ text }) => {
  return (
    <div>
      <div
        className="bg-gray-500/70 w-24 rounded-3xl h-5 text-center text-sm"
      >
        {text}
      </div>
    </div>
  );
};

export default LabelText;
