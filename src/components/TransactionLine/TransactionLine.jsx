import css from "../TransactionLine/TransactionLine.module.css";

export default function TransactionLine({ item: { type, amount, currency } }) {
  return (
    <>
      <td className={css.td}> {type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </>
  );
}
