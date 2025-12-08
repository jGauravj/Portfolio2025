const page = () => {
  const tagLine = [
    "Break It",
    "Fix It",
    "Ship It",
    "Wait, I Forgot a Semicolon;",
  ];

  return (
    <div className="w-full min-h-screen relative">
      <div className="max-w-3xl mx-auto h-screen border-x relative">
        <div className="aspect-5/2 flex justify-center items-center relative">
          <div className="w-full h-full bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]  bg-size-[10px_10px] mask-radial-from-30% absolute "></div>
          <div className="flex items-center  divide-x divide-neutral-300 mt-10 ">
            {tagLine.map((line, index) => (
              <h1
                key={index}
                className="px-3 font-fira-code text-sm  text-muted-foreground"
              >
                {line}
              </h1>
            ))}
          </div>
          <div className="line"></div>
        </div>
        <div className="h-34 relative flex">
          <div className="w-34 border-r">
            <div className="w-full h-full border-2 p-px rounded-full">
              <div className="w-full h-full bg-red-300 rounded-full"></div>
            </div>
          </div>
          <div className="flex-1 h-full">
            <div className="mt-16 h-full ">
              <h1 className="font-sans text-3xl font-semibold text-foreground border-y pl-4">
                Gaurav Jangir{" "}
              </h1>
              <p className="pl-4 pt-1.5 h-full font-mono text-muted-foreground  text-sm">
                Frontend Developer
              </p>
            </div>
          </div>

          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
