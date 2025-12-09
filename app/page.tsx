import Banner from "@/components/Banner";
import ProfileHeader from "@/components/ProfileHeader";
import myimg from "../public/myimg2.jpg";

const page = () => {
  return (
    <div className="w-full min-h-screen relative">
      <div className="max-w-3xl mx-auto h-screen border-x relative">
        <Banner />
        <ProfileHeader
          name="Gaurav Jangir"
          role="Frontend Developer"
          image={myimg}
        />
      </div>
    </div>
  );
};

export default page;
