interface BadgeProps {
  text?: string;
  theme?: string;
}

export default function BadgeStyle({ text, theme }: BadgeProps) {
  return (
    <span
      className={
        theme === "color"
          ? "bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
          : "bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
      }
    >
      {text}
    </span>
  );
}
