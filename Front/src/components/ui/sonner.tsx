import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-gradient-to-r group-[.toaster]:from-[#ff7e5f] group-[.toaster]:via-[#ff416c] group-[.toaster]:to-[#800080] group-[.toaster]:hover:from-[#ff512f] group-[.toaster]:hover:via-[#dd2476] group-[.toaster]:hover:to-[#6a0572] text-white shadow-lg rounded-lg",  /* <-- Added 'rounded-lg' */
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};


export { Toaster }
