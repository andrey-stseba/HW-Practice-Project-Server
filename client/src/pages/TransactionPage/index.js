import { connect } from 'react-redux';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './TransactionPage.module.sass';
import TransactionTable from './TransactionTable';

const transactions = [
  { id: 1, date: '2021-08-31', operationType: 'INCOME', amount: 10 },
  { id: 2, date: '2021-09-01', operationType: 'INCOME', amount: 20 },
  { id: 3, date: '2021-09-04', operationType: 'INCOME', amount: 40 },
  { id: 4, date: '2021-09-04', operationType: 'INCOME', amount: 60 },
  { id: 5, date: '2021-09-04', operationType: 'INCOME', amount: 80 },
];

function TransactionPage (props) {
  const { firstName, lastName } = props;
  return (
    <>
      <Header />
      <section className={styles.transactionTableContainer}>
        <TransactionTable
          transactions={transactions}
          data={{ firstName, lastName }}
        />
      </section>
      <Footer />
    </>
  );
}
const mapStateToProps = state => {
  const {
    userStore: {
      data: { firstName, lastName },
    },
  } = state;
  return { firstName, lastName };
};

export default connect(mapStateToProps, null)(TransactionPage);
