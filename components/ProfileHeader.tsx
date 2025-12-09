import Image, { StaticImageData } from "next/image";

interface ProfileHeaderProps {
  name: string;
  role: string;
  image?: string | StaticImageData;
}

const ProfileHeader = ({ name, role, image }: ProfileHeaderProps) => {
  return (
    <div className="h-34 relative flex">
      <div className="w-34 border-r">
        <div className="w-full h-full border-2 p-px rounded-full">
          <Image
            src={image!}
            alt="my-img"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex-1 h-full">
        <div className="mt-16 h-full ">
          <h1 className="font-sans text-3xl font-semibold text-foreground border-y pl-4">
            {name}
          </h1>
          <p className="pl-4 pt-1.5 h-full font-mono text-muted-foreground  text-sm">
            {role}
          </p>
        </div>
      </div>

      <div className="line"></div>
    </div>
  );
};

export default ProfileHeader;
