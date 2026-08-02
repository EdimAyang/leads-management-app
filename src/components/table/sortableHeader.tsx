import { ChevronDown, ChevronUp } from "lucide-react";

type Props = {
  title: string;
  sorted?: "asc" | "desc";
  onClick(): void;
};

export default function SortableHeader({ title, sorted, onClick }: Props) {
  return (
    <button onClick={onClick}>
      {title}

      {sorted === "asc" && <ChevronUp size={16} />}

      {sorted === "desc" && <ChevronDown size={16} />}
    </button>
  );
}
