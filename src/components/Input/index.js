export default function Input({ key, id, type, placeholder, value, onChange, className = "", style, required }) {
    return (
        <input
            key={key}
            id={id}
            type={type || "text"}
            placeholder={placeholder || ""}
            value={value}
            onChange={onChange || (() => { })}
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2 ${className}`}
            style={style}
            required={required || false}
        />
    )
}
