const Button = ({
  text,
  color = 'primary',
  fillType = 'solid',
  icon = null,
  style = null,
  iconPosition = 'left'
}) => {

  const buttonClasses = `btn btn-${color} btn-${fillType} ${style ? `btn-${style}` : ""}`;

  return (
    <button className={buttonClasses}>
      {iconPosition === 'left' && icon}
      {text}
      {iconPosition === 'right' && icon}
    </button>
  );
};

export default Button;