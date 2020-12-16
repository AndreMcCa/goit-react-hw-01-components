import PropTypes from 'prop-types';
import s from './Transactions.module.css';


export default function Transaction({ t }) {
    return (
<table className={s.transaction}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {t.map((obj, i) => {
        
      return (
    <tr key={obj.id} style={{ backgroundColor: `${i%2 ? '#d4fcff' : 'transparent' }`}} >
      <td>{obj.type}</td>
      <td>{obj.amount}</td>
      <td>{obj.currency}</td>
    </tr>)
      })}
    
  </tbody>
</table>
    )
    
}

