import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
    return (
        <table className={s.container}>
            <thead>
                <tr>
                    <th className={s.column}>Type</th>
                    <th className={s.column}>Amount</th>
                    <th className={s.column}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                   <tr key={id}>
                     <td className={s.bodyType}>{type}</td>
                     <td className={s.body}>{amount}</td>
                     <td className={s.body}>{currency}</td>
                   </tr> 
                ))}                
            </tbody>
        </table>
    );
};

export default TransactionHistory;