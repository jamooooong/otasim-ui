export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

export const Button = ({
  primary = true,
  label,
  size = "medium",
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    small: "px-4 py-2 text-sm font-medium",
    medium: "px-4 py-2 text-base font-medium",
    large: "px-8 py-4 text-xl font-medium",
  }[size];

  const mode = primary ? "bg-primary" : "bg-secondary";

  return (
    <button className={`${sizeClasses} ${mode} rounded-lg text-white px`}>
      {label}
    </button>
  );
};
