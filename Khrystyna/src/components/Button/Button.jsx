import "./Button.css";

export default function Button({ children, onClick, isAcctive }) {
    return (
        <button className={`button ${isAcctive ? 'active' : ''}`} onClick={onClick}>
            {children}
        </button>
    );
}