function ChartHeader({ title, subtitle, percentage }) {
  return (
    <div className="flex justify-between items-center bg-black p-4 rounded-md shadow-md">
      <div className="flex flex-col gap-1">
        <h2 className="text-white text-sm font-semibold">{title}</h2>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
      <div>
        <span
          className={`text-lg font-bold ${
            percentage >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {percentage >= 0 ? `+${percentage}%` : `${percentage}%`}
        </span>
      </div>
    </div>
  );
}

export default ChartHeader;
