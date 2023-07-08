import { useFirestore } from '../../hooks/useFirestore'
import styles from './Home.module.css'

function TransactionList({ transactions }) {
  const { deleteDocument } = useFirestore('transactions')
  
  // let amounts = transactions.map((transaction) => parseFloat((transaction.amount)))
  // let total = 0
  // for (let num of amounts) {
  //      total += num
  // }
  // console.log(total)


  return (
    <section>
      <ul className={styles.transactions}>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}>₦{transaction.amount}</p>
            <button onClick={() => deleteDocument(transaction.id)}>x</button>
          </li>
        ))}
      </ul>
      
      {/* <p>total money spent: {total}</p> */}
    </section>
  )
}

export default TransactionList