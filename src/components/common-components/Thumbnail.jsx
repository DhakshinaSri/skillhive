export default function Thumbnail({ icon, title }) {
  return (
    <div className="flex flex-col items-center justify-start space-y-3 w-28">
      {/* Icon circle */}
      <div
        className="w-26 h-26 flex items-center justify-center rounded-full bg-[#E4983A]"
      >
        {typeof icon === "string" ? (
          <img src={icon} alt={title} className="w-10 h-10 object-contain" />
        ) : (
          <div className="text-2xl text-white">{icon}</div>
        )}
      </div>

      {/* Text */}
      <span
        className="text-center text-black text-lg font-bold leading-tight line-clamp-2"
      >
        {title}
      </span>
    </div>
  );
}
