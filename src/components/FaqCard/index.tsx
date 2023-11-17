import { FaqCardProps } from './types'
import styles from './index.module.scss'

export const FaqCard = (props: FaqCardProps) => {
  const { heading, content, serialNo } = props

  const getFormattedSerialNo = () => {
    if (serialNo < 10) return `0${serialNo}.`
    return `${serialNo}.`
  }

  return (
    <div className={styles.card}>
      <div className={styles.serial_no}>{getFormattedSerialNo()}</div>
      <div className={styles.text_section}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{content}</p>
      </div>
    </div>
  )
}
