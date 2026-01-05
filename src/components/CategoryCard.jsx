export default function CategoryCard({ title, img, color }) {
  return (
    <div className="relative bg-[#f7f7f7] p-6 h-[200px] hover:shadow-md transition">
      
      {/* Chap rangli chiziq */}
      <span
        className="absolute left-0 top-0 h-full w-[4px]"
        style={{ backgroundColor: color }}
      />

      {/* Title */}
      <h3 className="font-semibold text-[15px] mb-4 leading-snug">
        {title}
      </h3>

      {/* Image */}
      <img
        src={img}
        alt={title}
        className="absolute right-4 bottom-4 h-[110px] "
      />
    </div>
  );
}
