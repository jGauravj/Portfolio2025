import Image, { StaticImageData } from "next/image";

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
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-end relative">
        <h2 className="">Open to work</h2>
        <div className="">
          <h1 className="font-sans text-3xl font-semibold text-foreground border-y pl-4">
            {name}
          </h1>
          <p className="pl-4 py-1.5 h-full font-mono text-muted-foreground  text-sm">
            {role}
          </p>
        </div>
      </div>

      <div className="line"></div>
    </div>
  );
};

export default ProfileHeader;
