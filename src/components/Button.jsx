const Button = ({
  text,
  color = 'primary',
  fillType = 'solid',
  shape = null,
  icon = null,
  style = null,
  iconPosition = 'left'
}) => {

  const buttonClasses = `btn btn-${color} btn-${fillType} ${style ? `btn-${style}` : ""} ${shape ? `btn-${shape}` : ""}`;

  return (
    <button className={buttonClasses}>
      {iconPosition === 'left' && icon}
      {text}
      {iconPosition === 'right' && icon}
    </button>
  );
};

export default Button;