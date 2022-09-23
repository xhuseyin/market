import sizes from "../../theme/foundations/sizes";

export const devices = {
  small: `(min-width: ${sizes.small})`,
  medium: `(max-width: ${sizes.medium})`,
  large: `(max-width: ${sizes.large})`,
  extraLarge: `(max-width: ${sizes.extraLarge})`,
};

export default devices;
