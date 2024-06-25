const deviceSizes = {
  small: "767px",
  midium: "1023px",
  large: "1024px",
};

const device = {
  small: `screen and (max-width : ${deviceSizes.small})`,
  midium: `screen and (max-width : ${deviceSizes.midium})`,
  large: `screen and (min-width : ${deviceSizes.large})`,
};

const theme = {
  device,
};

export default theme;
