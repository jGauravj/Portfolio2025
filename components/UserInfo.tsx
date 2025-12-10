import { Code2, Globe, Mail, MapPin, Mars, Phone } from "lucide-react";
import { title } from "process";

const UserInfo = () => {
  const personalInfo = [
    {
      id: 1,
      title: "Frontend Developer",
      icon: <Code2 size={16} className=" text-muted-foreground" />,
    },
    {
      id: 2,
      title: "Jaipur, Rajasthan, India",
      icon: <MapPin size={16} className=" text-muted-foreground" />,
    },
    {
      id: 3,
      title: "+91 6376700373",
      icon: <Phone size={16} className=" text-muted-foreground" />,
    },
    {
      id: 4,
      title: "devgaurav.com",
      icon: <Globe size={16} className=" text-muted-foreground" />,
    },
    {
      id: 5,
      title: "gouraw1@gmail.com",
      icon: <Mail size={16} className=" text-muted-foreground" />,
    },
    {
      id: 6,
      title: "he/him",
      icon: <Mars size={16} className=" text-muted-foreground" />,
    },
  ];

  return (
    <div className="flex flex-col p-4 gap-4 max-h-38 flex-wrap z-20">
      {personalInfo.map((info) => (
        <div key={info.id} className="flex items-center gap-3">
          <span className="p-1 bg-neutral-200/60 relative inline-block rounded-md border border-neutral-300 ring ring-offset-1 ring-neutral-300/50">
            {info.icon}
          </span>
          <h2 className="text-sm font-mono ">{info.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
