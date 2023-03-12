export default function Card({ children, className = "", style, key, id = "" }) {
    return (
        <div key={key} id={id} className={`block w-6/12 max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ${className}`} style={style}>
            {children}
        </div>
    )
}
