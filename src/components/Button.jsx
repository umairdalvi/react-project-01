const Button = ({
  text,
  color = 'primary',
  fillType = 'solid',
  icon = null,
  style = null
}) => {

  const buttonClasses = `btn btn-${color} btn-${fillType} ${(style) ? `btn-${style}` : ""}`

  return (
    <button className={buttonClasses}>
      {icon}
      {text}
    </button>
  )
}

export default Button