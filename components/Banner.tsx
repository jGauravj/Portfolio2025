const Banner = () => {
  const tagLine: string[] = [
    "Break It",
    "Fix It",
    "Ship It",
    "Wait, I Forgot a Semicolon;",
  ];

  return (
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
  );
};

export default Banner;
