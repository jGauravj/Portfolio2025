import { Search } from "lucide-react";

const Navbar = () => {
  const navMenu = [
    {
      label: "Portfolio",
    },
    {
      label: "Components",
    },
    {
      label: "Blog",
    },
  ];
  return (
    <nav className="absolute top-2 border-y border-neutral-300 w-full z-10">
      <div className="max-w-3xl mx-auto flex justify-between items-center px-4 bg-background border-x">
        <div>
          <h1 className="text-5xl font-pixelify font-bold">GJ</h1>
        </div>
        <div>
          <ul className="flex gap-4 items-center">
            {navMenu.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer font-mono text-sm font-medium "
              >
                {item.label}
              </li>
            ))}
            <button className="flex items-center gap-1 border px-2 py-[5px] rounded-full shadow-2xs shadow-neutral-100">
              <Search className=" text-muted-foreground " size={18} />
              <kbd className="text-[13px] bg-linear-to-b from-neutral-100 to-neutral-200 shadow-2xs shadow-neutral-200 px-1 py-px rounded-sm text-muted-foreground border">
                Ctrl
              </kbd>{" "}
              <kbd className="text-[13px] bg-linear-to-b from-neutral-100 to-neutral-200 shadow-2xs shadow-neutral-200 px-2 py-px rounded-sm text-muted-foreground border">
                K
              </kbd>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
