import React, { ReactNode } from 'react'

export interface ConcentricCirclesProps {
  size: number
  className?: string
  style?: React.CSSProperties
  circularGap: number
  count?: number
  children?: ReactNode
  boldIdx?: number
}
