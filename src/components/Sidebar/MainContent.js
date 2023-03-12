import React from 'react'

export default function MainContent({children}) {
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border rounded-lg">
                {children}
            </div>
        </div>
    )
}
