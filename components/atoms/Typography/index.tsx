import { Typography, TypographyProps } from "@mui/material";

interface customTypography extends TypographyProps {}

export const CustomTypography = ({
  variant,
  children,
  color,
}: customTypography) => {
  return (
    <>
      <Typography variant={variant} color={color}>
        {children}
      </Typography>
    </>
  );
};
