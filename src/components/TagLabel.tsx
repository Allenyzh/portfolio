interface TagLabelProps {
  size?: number;
  color?: string;
  p?: number;
  theme?: string;
}

export default function TagLabel({
  size = 4,
  color = "gray-600",
  p = 0,
  theme = "currentColor",
}: TagLabelProps) {
  return (
    <>
      <div className={`p-${p}`}>
        <svg
          className={`w-${size} h-${size} text-${color} `}
          fill="none"
          stroke={theme}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          ></path>
        </svg>
      </div>
    </>
  );
}
