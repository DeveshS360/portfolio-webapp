const DESKTOP_BREAK_POINTS = {
  small: 1000,
  medium: 1300,
  large: 1600,
}

export const IS_SMALL_DESKTOP =
  window.innerWidth >= DESKTOP_BREAK_POINTS.small &&
  window.innerWidth <= DESKTOP_BREAK_POINTS.medium - 1
export const IS_MEDIUM_DESKTOP =
  window.innerWidth >= DESKTOP_BREAK_POINTS.medium &&
  window.innerWidth <= DESKTOP_BREAK_POINTS.large - 1
