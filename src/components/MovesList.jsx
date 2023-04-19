import React, { useState } from 'react'

export  function MovesList({pastTransactions, contact,isHome}) {



  return (
    <section className='moves-to-curr-contact'>
    <h2>{(!isHome) ? 'All transactions from you to ' +contact.name :'Your last transactions '}</h2>
    <ol>
      {pastTransactions&& pastTransactions.map(transaction => 
        <li className="moves-transaction"  key={transaction._id}>
                  
                   <span>At:  {new Date(transaction.at).toLocaleDateString()}</span>{" "}<span>
                    Amount {(transaction.coins)}</span></li>
                 )}
    </ol>
  </section>
  )
}
