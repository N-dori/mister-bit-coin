import React from 'react'

export  function MovesList() {
  return (
    <section className='moves-to-curr-contact'>
    <h2>All transactions from you to {contact.name}</h2>
    <ol>
      {pastTransactions&& pastTransactions.map(transaction => 
        <li  key={transaction._id}><span>transaction date {(transaction.at)}</span>{" "}<span>Amount {(transaction.coins)}</span></li>
                 )}
    </ol>
  </section>
  )
}
