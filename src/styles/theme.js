import "../index.css";

const theme = {
  colors: {
    textColor: "#ffffff",
    primary: "",
    backdrop: "#282c34",
    brand_color_1: "#05889980",
    brand_color_2: "#058899",
    brand_color_3: "#333333",
    brand_color_4: "#bc2230",
    brand_color_5: "#bc1120",
  },
  font: {
    text: "'Akshar', sans-serif",
    title: "'Koulen', cursive",
  },

  fontSizes: {
    xs: "16px",
    s: "20px",
    m: "24px",
  },
  margins: {
    xs: "4px",
    s: "8px",
    m: "16px",
    l: "32px",
    xl: "64px",
  },
  paddings: {
    xs: "4px",
    s: "8px",
    m: "16px",
    l: "32px",
  },
  grid: {
    gridList_column: "250px",
    gridList_gap: "10px 12px",
  },

  device: {
    mobileS: `(max-width: 320px)`,
    mobileM: `(max-width: 375px)`,
    mobileL: `(max-width: 425px)`,
    tablet: `(max-width: 768px)`,
    laptop: `(max-width: 1024px)`,
    laptopL: `(max-width: 1440px)`,
    desktop: `(max-width: 2560px)`,
    desktopL: `(max-width: 2560px)`,
  },
};

export default theme;
