interface ButtonProps {
  text: string;
  icon?: string;
  onClick: () => void;
  className?: string;
}
// Button component
const Button: React.FC<ButtonProps> = ({ text, icon, onClick, className="" }) => {
  return (
    <button className={`${className} custom-button`} onClick={onClick}>
      {icon && <img src={icon} alt="button icon" className="button-icon" />}
      {text}
    </button>
  );
};

export default Button;
