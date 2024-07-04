import { Card as MuiCard, Stack, styled } from "@mui/material";
import { Icons } from "../atoms/Icons";
import logo from "../../public/assets/image 7.svg";
import more from "../../public/assets/more.svg";
import { CustomTypography } from "../atoms/Typography";
import { CARD_DATA, ICON_LIST } from "../../constants";
import { Theme } from "../../Theme";

interface CardProps {
  handleClick?: () => void;
}
const OuterGrid = styled(MuiCard)({
  width: 321,
  height: 271,
  borderRadius: Theme.shape.borderRadius,
});

const commonStyles = {
  display: "flex",
  justifyContent: "space-between",
  paddingTop: 15,
  paddingBottom: 15,
  paddingLeft: 20,
  paddingRight: 20,
};

const HeaderContent = styled("div")({
  ...commonStyles,
});

const TextContent = styled("div")({
  flexDirection: "column",
  ...commonStyles,
});

const FooterContent = styled("div")({
  flexDirection: "column",
  gap: 11,
  ...commonStyles,
});

const SubFooterContent = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export const Card = ({ handleClick }: CardProps) => {
  return (
    <>
      {CARD_DATA.map((item) => (
        <>
          <OuterGrid variant="outlined">
            <HeaderContent>
              <Icons path={logo} alt="" width={45} height={45} />
              <Icons
                path={more}
                alt=""
                width={24}
                height={24}
                handleClick={handleClick}
                sx={{ cursor: "pointer" }}
              />
            </HeaderContent>

            <TextContent>
              <CustomTypography variant="subtitle1">
                {item.heading}
              </CustomTypography>
              <CustomTypography
                variant="caption"
                color={Theme.palette.primary.main}
              >
                {item.title}
              </CustomTypography>
              <CustomTypography
                variant="caption"
                color={Theme.palette.primary.light}
              >
                {item.subtitle}
              </CustomTypography>
            </TextContent>

            <FooterContent>
              <CustomTypography variant="caption">
                {item.caption}
              </CustomTypography>
              <SubFooterContent>
                <Stack direction="row" spacing={2}>
                  {ICON_LIST.map((icon) => (
                    <>
                      <Icons path={icon.icon} alt="" width={15} height={18} />
                    </>
                  ))}
                </Stack>
                <CustomTypography
                  variant="caption"
                  color={Theme.palette.secondary.dark}
                >
                  {item.location}
                </CustomTypography>
              </SubFooterContent>
            </FooterContent>
          </OuterGrid>
        </>
      ))}
    </>
  );
};
