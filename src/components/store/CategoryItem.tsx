/**
 * @author mingyu
 */
"use client";
type CategoryItemProps = {
  label: string;
  id: number;
  setCurrentCategory: React.Dispatch<React.SetStateAction<number>>;
};

const CategoryItem = ({ label, id, setCurrentCategory }: CategoryItemProps) => {
  return (
    <button
      className="z-20 mr-2 flex h-full w-24 items-center justify-center rounded-t-2xl border border-inherit font-semibold"
      onClick={() => setCurrentCategory(id)}
    >
      <p>{label}</p>
    </button>
  );
};

export default CategoryItem;
