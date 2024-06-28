import image from "../assets/images/avatar.JPG";

const Avatar: React.FC = () => {
  return <img src={image} className="w-12 h-12 rounded-full" alt="avatar" />;
};

export default Avatar;
