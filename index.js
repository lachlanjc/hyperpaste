
const colors = {
  black       : '#222E33',
  red         : '#CC6666',
  green       : '#9DC777',
  yellow      : '#DBCD7F',
  blue        : '#769EB3',
  magenta     : '#C5487A',
  cyan        : '#73B3C0',
  white       : '#DAE3E8',
  lightBlack  : '#465E68',
  lightRed    : '#E36868',
  lightGreen  : '#A8FF60',
  lightBlue   : '#96CBFE',
  colorCubes  : '#ffffff',
}

const backgroundColor = colors.black
const foregroundColor = colors.white
const cursorColor = foregroundColor
const borderColor = backgroundColor
colors.grayscale = foregroundColor

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor};
      }
      .tab_tab.tab_active {
        box-shadow: inset 2px 0 ${colors.cyan};
        font-weight: bold !important;
      }
      .tab_tab .tab_textInner {
        color: ${foregroundColor} !important;
      }
    `
  })
}
