export default function FacilityCopy({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-full lg:w-1/3">
      <h2 className="text-xl font-bold text-primary">{title}</h2>
      <div className="pt-4 leading-snug">{description}</div>
    </div>
  );
}
