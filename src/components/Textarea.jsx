import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const Textarea = forwardRef((props, ref) => {
  return (
    <textarea
      ref={ref}
      {...props}
      rows={4}
      style={{ direction: "rtl" }}
      className={cn(
        "w-full resize-none rounded-md bg-white px-3 py-1.5 text-black focus:outline-primary",
        props.className,
      )}
    />
  );
});

Textarea.displayName = "Textarea";

export default Textarea;
