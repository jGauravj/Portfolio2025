import Banner from "@/components/Banner";
import ProfileHeader from "@/components/ProfileHeader";
import UserInfo from "@/components/UserInfo";
import myimg from "@/public/mychar.png";

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
        <UserInfo />
      </div>
    </div>
  );
};

export default page;
