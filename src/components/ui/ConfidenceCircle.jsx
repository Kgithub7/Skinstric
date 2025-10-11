function ConfidenceCircle({ percentage }) {
  const circumference = 2 * Math.PI * 50;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="absolute right-0 bottom-0 flex size-[30dvh] sm:size-[40dvh] xl:size-[50dvh] items-center justify-center text-3xl">
      <svg className="-rotate-90" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="50"
          strokeWidth="2"
          className="stroke-gray-200"
          fill="transparent"
        />
        <circle
          cx="60"
          cy="60"
          r="50"
          strokeWidth="2"
          className="stroke-black transition-all duration-1000 ease-in-out"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="absolute">{percentage}%</span>
    </div>
  );
}

export default ConfidenceCircle;
