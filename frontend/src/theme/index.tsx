import { SxProps, createTheme } from '@mui/material/styles'
import { PALETTE } from './themeConstant'
declare module '@mui/material/styles' {
  interface TypeText {
    highEmphasis?: string
    mediumEmphasis?: string
    lowEmphasis?: string
  }

  interface Palette {
    ampsec: {
      STRUCTURAL_BACKGROUND: string
      STROKE_100: string
      GREEN: string
      ORANGE: string
      ERROR_100: string
      RED: string
      YELLOW: string
      BACKGROUND: string
      PROGRESS_BAR: string
      CANCEL: string
      BLUR_TEXT_HIGH: string
    }
    darkTheme: {
      STRUCTURAL_100: string
      STRUCTURAL_300: string
      STRUCTURAL_CARD_BG: string
      STROKE_500: string
      HIGH_EMPHASIS: string
      MEDIUM_EMPHASIS: string
      MODAL_BG: string
      ICON_BG: string
      ACTIVE_BG: string
      DEACTIVE_BG: string
      BLUR_BG: string
      SHADOW: string
      STROKE_400: string
      STROKE_300: string
      CHIP: string
    }
  }

  interface PaletteOptions {
    ampsec: {
      STRUCTURAL_BACKGROUND: string
      STROKE_100: string
      GREEN: string
      ORANGE: string
      ERROR_100: string
      RED: string
      YELLOW: string
      BACKGROUND: string
      PROGRESS_BAR: string
      CANCEL: string
      BLUR_TEXT_HIGH: string
    }
    darkTheme: {
      STRUCTURAL_100: string
      STRUCTURAL_300: string
      STRUCTURAL_CARD_BG: string
      STROKE_500: string
      HIGH_EMPHASIS: string
      MEDIUM_EMPHASIS: string
      MODAL_BG: string
      ICON_BG: string
      ACTIVE_BG: string
      DEACTIVE_BG: string
      BLUR_BG: string
      SHADOW: string
      STROKE_400: string
      STROKE_300: string
      CHIP: string
    }
  }

  interface PaletteColor {
    '100': string
    '300': string
    '500': string
    '700': string
    '900': string
  }

  interface TypographyVariants {
    subtitle1: SxProps
    subtitle2: SxProps
    subtitle3: SxProps
    subtitle4: SxProps
    body1: SxProps
    body2: SxProps
    body3: SxProps
    body4: SxProps
    body5: SxProps
    body6: SxProps
    caption1: SxProps
    caption2: SxProps
    button2: SxProps
    overline1: SxProps
    overline2: SxProps
  }

  interface TypographyVariantsOptions {
    subtitle1: SxProps
    subtitle2: SxProps
    subtitle3: SxProps
    subtitle4: SxProps
    body1: SxProps
    body2: SxProps
    body3: SxProps
    body4: SxProps
    body5: SxProps
    body6: SxProps
    caption1: SxProps
    caption2: SxProps
    button2: SxProps
    overline1: SxProps
    overline2: SxProps
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle1: true
    subtitle2: true
    subtitle3: true
    subtitle4: true
    body1: true
    body2: true
    body3: true
    body4: true
    body5: true
    body6: true
    caption1: true
    caption2: true
    button2: true
    overline1: true
    overline2: true
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: PALETTE.AMPSEC_PRIMARY,
    },
    ampsec: {
      STRUCTURAL_BACKGROUND: PALETTE.AMPSEC_STRUCTURAL_BG,
      STROKE_100: PALETTE.AMPSEC_STROKE_100,
      GREEN: PALETTE.AMPSEC_DATA_VIZ_GREEN,
      ORANGE: PALETTE.AMPSEC_DATA_VIZ_ORANGE,
      ERROR_100: PALETTE.AMPSEC_DATA_VIZ_RED,
      RED: PALETTE.AMPSEC_DATA_VIZ_RED,
      YELLOW: PALETTE.AMPSEC_DATA_VIZ_YELLOW,
      BACKGROUND: PALETTE.AMPSEC_BACKGROUND,
      PROGRESS_BAR: PALETTE.AMPSEC_PROGRESS_BAR,
      CANCEL: PALETTE.AMPSEC_CANCEL,
      BLUR_TEXT_HIGH: PALETTE.AMPSEC_BLUR_TEXT_HIGH,
    },
    darkTheme: {
      STRUCTURAL_100: PALETTE.DARK_THEME_STRUCTURAL_100,
      STRUCTURAL_300: PALETTE.DARK_THEME_STRUCTURAL_300,
      STRUCTURAL_CARD_BG: PALETTE.AMPSEC_TEXT_HIGH,
      STROKE_500: PALETTE.DARK_THEME_STROKE_500,
      HIGH_EMPHASIS: PALETTE.DARK_THEME_HIGH_EMPHASIS,
      MEDIUM_EMPHASIS: PALETTE.DARK_THEME_MEDIUM_EMPHASIS,
      MODAL_BG: PALETTE.DARK_THEME_MODAL_BG,
      ICON_BG: PALETTE.DARK_THEME_ICON_BG,
      ACTIVE_BG: PALETTE.DARK_THEME_ACTIVE_BG,
      DEACTIVE_BG: PALETTE.DARK_THEME_DEACTIVE_BG,
      BLUR_BG: PALETTE.DARK_THEME_BLUR_BG,
      SHADOW: PALETTE.DARK_THEME_SHADOW,
      STROKE_400: PALETTE.DARK_THEME_STROKE_400,
      STROKE_300: PALETTE.DARK_THEME_STROKE_300,
      CHIP: PALETTE.DARK_THEME_CHIP,
    },
    text: {
      lowEmphasis: PALETTE.AMPSEC_TEXT_LOW,
      mediumEmphasis: PALETTE.DARK_THEME_MEDIUM_EMPHASIS,
      highEmphasis: PALETTE.DARK_THEME_HIGH_EMPHASIS,
    },
  },

  typography: {
    fontFamily: ['Barlow'].join(','),
    h2: {
      fontSize: '44px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '52.8px',
      textTransform: 'none',
    },
    h4: {
      fontSize: '28px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '33.6px',
      textTransform: 'none',
    },
    h6: {
      fontSize: '20px',
      fontWeight: 700,
      fontStyle: 'normal',
      lineHeight: '16.4px',
      textTransform: 'none',
      letterSpacing: '4%',
    },
    subtitle1: {
      //change subtitle1 bold
      fontSize: '22px',
      fontWeight: 700,
      fontStyle: 'normal',
      lineHeight: '26.4px',
      textTransform: 'none',
      letterSpacing: '5%',
    },
    subtitle2: {
      //change subtitle1 medium
      fontSize: '22px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '26.4px',
      textTransform: 'none',
    },
    subtitle3: {
      //change subtitle2 bold
      fontSize: '18px',
      fontWeight: 700,
      fontStyle: 'normal',
      lineHeight: '21.6px',
      textTransform: 'none',
      letterSpacing: '2%',
    },
    subtitle4: {
      //change subtitle2 semibold
      fontSize: '18px',
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: '21.6px',
      textTransform: 'none',
      letterSpacing: '5%',
    },
    body1: {
      //change body-1 bold
      fontSize: '15px',
      fontWeight: 700,
      fontStyle: 'normal',
      lineHeight: '18px',
      textTransform: 'none',
      letterSpacing: '1%',
    },
    body2: {
      //change body-1 semibold
      fontSize: '15px',
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: '18px',
      textTransform: 'none',
    },
    body3: {
      //change body-1 medium
      fontSize: '15px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '18px',
      textTransform: 'none',
    },
    body4: {
      //change body1-regular
      fontSize: '15px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '18px',
      textTransform: 'none',
    },
    body5: {
      //change body2 medium
      fontSize: '14px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '16.8px',
      textTransform: 'none',
    },
    body6: {
      //change body2 regular | body4
      fontSize: '14px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '16.8px',
      textTransform: 'none',
    },
    button: {
      //change
      fontSize: '15px',
      fontWeight: 700,
      fontStyle: 'normal',
      lineHeight: '20px',
      letterSpacing: '5%',
      textTransform: 'none',
    },
    button2: {
      //change button 002
      fontSize: '12px',
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: '14.4px',
      letterSpacing: '2%',
      textTransform: 'none',
    },
    caption1: {
      //change
      fontSize: '13px',
      fontWeight: 800,
      fontStyle: 'normal',
      lineHeight: '14px',
      letterSpacing: '7%',
      textTransform: 'none',
    },
    caption2: {
      //change
      fontSize: '12px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '14.4px',
      textTransform: 'none',
    },
    overline1: {
      //change  chips typo
      fontSize: '12px',
      fontWeight: '700',
      fontStyle: 'normal',
      lineHeight: '14.4px',
      letterSpacing: '0.01em',
      textAlign: 'left',
    },
    overline2: {
      //change configure typo
      fontSize: '16px',
      fontWeight: '600',
      fontStyle: 'normal',
      lineHeight: '19px',
      letterSpacing: '0.02em',
      textAlign: 'center',
    },
  },
  spacing: 4,
})

export default theme
