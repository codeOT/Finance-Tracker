import { useState, useEffect } from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import styles from './Home.module.css'

function TransactionForm({ uid }) {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const {addDocument, response} = useFirestore('transactions')


    const handleSubmit = (e) => {
      e.preventDefault()
      addDocument({
        uid,
        name,
        amount
        
      })
      setName('')
      setAmount('')
    }

  return (
    <section>
    <>
    <h3> Add a Transaction</h3>
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">
        <span>Transaction name:</span>
        <input 
        type="text"
        required
        onChange={(e)=> setName(e.target.value)}
        value={name}
        />
      </label>

      <label htmlFor="">
        <span>Amount (₦):</span>
        <input 
        type="number"
        required
        onChange={(e)=> setAmount(e.target.value)}
        value={amount}
        />
      </label>
      <button>Add Transaction</button>
    </form>
    </>

    
    </section>
  )
}

export default TransactionForm