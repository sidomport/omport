export const RawImg = ({ image, alt, css, ...props }) => {
  return <img src={image} alt={alt} style={css} {...props} />;
};
