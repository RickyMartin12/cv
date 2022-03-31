// components/Page.tsx
import styles from '../styles/Page.module.css'

type Props = {
  children: React.ReactNode
}

const Page = ({ children }: Props) => (
  <div className={`${styles.page} shadow-xl page`}>
      {children}
  </div>
)

export default Page