import styles from './Home.module.css'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'
import Amount from './Amount'
// import { useFirestore } from '../../hooks/useFirestore'



function Home() {
  // const { total } = TransactionList()
  const { user } = useAuthContext()
  const { documents, error } = useCollection(
    'transactions',
    ['uid', '==', user.uid],
    ['createdAt', 'desc']
  )

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>

      <section>
        <div className={styles.sidebar}>
          <TransactionForm uid={user.uid} />
        </div>
        <div className={styles.total}>
        {documents && <Amount transactions={documents} />}
        </div>
      </section>

    </div>
  )
}

export default Home