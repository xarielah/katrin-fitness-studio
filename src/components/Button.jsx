import { cn } from "../../utils/cn";

export default function Button({ ref, ...props }) {
  return (
    <button
      {...props}
      ref={ref}
      className={cn(
        `rounded-3xl bg-primary px-6 py-2.5 text-xl font-thin text-black transition-colors duration-100 hover:bg-white hover:text-black focus:outline-primary`,
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}
