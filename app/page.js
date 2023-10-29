import Image from 'next/image'
import styles from './page.module.css'
import Content from '@/components/Content/Content'

export default function Home() {
  return (
    <main className={styles.main}>
      <Content />
    </main>
  )
}
