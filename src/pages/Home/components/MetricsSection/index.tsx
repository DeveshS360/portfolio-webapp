import styles from './index.module.scss'
import layoutStyles from '../ClientServices/index.module.scss'
import cx from 'classnames'
import { Metric } from 'src/components/Metric'
import {
  CalendarOutlined,
  CodepenOutlined,
  FolderOpenOutlined,
} from '@ant-design/icons'

export const MetricsSection = () => {
  const iconStyle = { fontSize: 25, color: 'var(--text-color-primary)' }
  return (
    <section className={cx(layoutStyles.client_services, styles.metrics)}>
      <div className={cx(layoutStyles.container, styles.content)}>
        <Metric
          icon={<FolderOpenOutlined style={iconStyle} />}
          count={20}
          countSuffix="+"
          text="Git repos worked on"
          isWholeNumber
        />
        <Metric
          icon={<CodepenOutlined style={iconStyle} />}
          count={148}
          countSuffix="K+"
          text="Lines of code"
        />
        <Metric
          icon={<CalendarOutlined style={iconStyle} />}
          count={2.4}
          text="Years of experience"
        />
      </div>
    </section>
  )
}
