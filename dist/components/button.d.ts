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
export declare const Button: ({ primary, label, size, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
