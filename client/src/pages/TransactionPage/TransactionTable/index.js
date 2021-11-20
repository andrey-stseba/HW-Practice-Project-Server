import React from 'react';
import PropTypes from 'prop-types';
import s from './TransactionTable.module.sass';

export const TransactionTable = props => {
  const {
    transactions,
    data: { firstName, lastName },
  } = props;

  return (
    <table className={s.transactionTable}>
      <caption className={s.transactionCaption}>
        <h4 className={s.headerName}>
          Hi,
          <span className={s.info}>{firstName}</span>
          <span className={s.info}>{lastName}</span>
        </h4>
        Transaction Table
      </caption>
      <thead>
        <tr>
          <th className={s.label}>Date</th>
          <th className={s.label}>Operation type </th>
          <th className={s.label}>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, date, operationType, amount }) => (
          <tr key={id}>
            <td className={s.info}>{date}</td>
            <td className={s.info}>{operationType}</td>
            <td className={s.info}>{amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      date: PropTypes.string,
      operationType: PropTypes.string,
      amount: PropTypes.number,
    }).isRequired
  ),
};

export default TransactionTable;
