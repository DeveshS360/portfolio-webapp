import { ConcentricCirclesProps } from './types'
import cx from 'classnames'
import styles from './index.module.scss'

export const ConcentricCircles = (props: ConcentricCirclesProps) => {
  const {
    className,
    style,
    size,
    circularGap,
    count = 3,
    children,
    boldIdx,
  } = props
  const additionalSize = 2 * circularGap

  return (
    <div className={cx(styles.container, className)}>
      {new Array(count).fill(null).map((circle, idx) => {
        const computedSize = size + idx * additionalSize
        return (
          <div
            key={idx}
            style={{
              position: 'absolute',
              width: computedSize,
              height: computedSize,
              top: '50%',
              left: '50%',
              transform: `translate(-${computedSize / 2}px, -${
                computedSize / 2
              }px)`,
              ...style,
            }}
            className={cx({ [styles.bold]: idx + 1 === boldIdx })}
          ></div>
        )
      })}
      {children}
    </div>
  )
}
