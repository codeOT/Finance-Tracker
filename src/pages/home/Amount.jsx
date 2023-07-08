import styles from './Home.module.css'
function Amount({ transactions }) {
   
    let amounts = transactions.map((transaction) => parseFloat((transaction.amount)))
    let total = 0
    for (let num of amounts) {
        total += num
    }
    console.log(total)

    return (
        <div className={styles.total}>
          <p>Total amount spent: <span className={styles.amt}>₦{total}</span></p>
        </div>
    )
}

export default Amount