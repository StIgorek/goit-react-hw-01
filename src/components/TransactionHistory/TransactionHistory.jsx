import TransactionLine from "../TransactionLine/TransactionLine";
import css from "../TransactionHistory/TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.tr}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction) => {
          return (
            <tr key={transaction.id}>
              <TransactionLine item={transaction} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
