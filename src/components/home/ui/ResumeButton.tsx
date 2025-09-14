import LocalConfig from "@/constants/config";
import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn !bg-blue-600 !text-white min-w-[10rem]"
      href={LocalConfig.values.NEXT_PUBLIC_RESUME_LINK}
      target="_blank"
    >
      Download Resume
    </Link>
  );
};

export default ResumeButton;
