const DESKTOP_BREAK_POINTS = {
  small: 1000,
  medium: 1300,
  large: 1600,
}

export const checkIfSmallDesktop = () =>
  document.body.clientWidth >= DESKTOP_BREAK_POINTS.small &&
  document.body.clientWidth <= DESKTOP_BREAK_POINTS.medium - 1
export const checkIfMediumDesktop = () =>
  document.body.clientWidth >= DESKTOP_BREAK_POINTS.medium &&
  document.body.clientWidth <= DESKTOP_BREAK_POINTS.large - 1

export const checkIfMobileOrTablet = () =>
  document.body.clientWidth < DESKTOP_BREAK_POINTS.small
