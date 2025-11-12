import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  onClick,
  className = "",
}) => {
  // Map sizes to Tailwind classes
  const sizeClasses: Record<string, string> = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${sizeClasses[size]} ${shape} bg-blue-500 text-white font-semibold ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;