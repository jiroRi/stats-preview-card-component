const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktopS: "1440px",
  desktopM: "1920px",
  desktopL: "2560px",
};

export const theme = {
  colors: {
    white50: "#ffffff",
    white100: `rgba(255, 255, 255, 0.75)`,
    white200: `rgba(255, 255, 255, 0.6)`,

    blue900: `rgb(9, 11, 26)`,
    blue800: `rgb(27, 25, 56)`,
    violet: `rgb(170, 92, 219)`,
  },

  mobileFontSize: {
    title: `2.8rem`,
    body: `1.5rem`,
    label: `2.4rem`,
    description: `1.2rem`,
  },

  desktopFontSize: {
    title: `3.6rem`,
    body: `1.5rem`,
    label: `2.4rem`,
    description: `1.2rem`,
  },

  device: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktopS: `(min-width: ${size.desktopS})`,
    desktopM: `(min-width: ${size.desktopM})`,
    desktopL: `(min-width: ${size.desktopL})`,
  },
};
