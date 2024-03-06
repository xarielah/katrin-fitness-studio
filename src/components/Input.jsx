import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const Input = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      style={{ direction: "rtl" }}
      {...props}
      className={cn(
        "w-full rounded-md bg-white px-3 py-1.5 text-black focus:outline-primary",
        props.className,
      )}
    />
  );
});

Input.displayName = "Input";

export default Input;
