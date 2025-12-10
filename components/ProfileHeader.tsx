import Image, { StaticImageData } from "next/image";
import NameAudio from "./NameAudio";

interface ProfileHeaderProps {
  name: string;
  role: string;
  image?: string | StaticImageData;
}

const ProfileHeader = ({ name, role, image }: ProfileHeaderProps) => {
  return (
    <div className="h-34 relative flex">
      <Image
        src="/indian-flag.svg"
        alt="indian-flag"
        width={40}
        height={40}
        className=" absolute"
      />
      <div className="w-34 border-r">
        <div className="w-full h-full border-2 p-px rounded-full">
          <Image
            src={image!}
            alt="my-img"
            className="w-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-end relative">
        <div className="flex items-center py-1 pl-4 gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className=" relative inline-flex h-1.5 w-1.5  rounded-full bg-green-400/50"></span>
          </span>
          <h2 className=" font-mono text-xs text-neutral-400/60 font-medium">
            Open to work
          </h2>
        </div>

        <div className="">
          <div className="flex items-center gap-2 w-full  border-y">
            <h1 className="font-sans text-3xl font-semibold text-foreground  pl-4">
              {name}
            </h1>
            <NameAudio />
          </div>

          <p className="pl-4 py-1.5 h-full font-mono text-muted-foreground  text-sm inline-block">
            {role}
          </p>
        </div>
      </div>

      <div className="line"></div>
    </div>
  );
};

export default ProfileHeader;
