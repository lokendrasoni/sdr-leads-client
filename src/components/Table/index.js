import React from 'react'

export default function Table({ id = "", className = "", style = {}, headings = [], body = [[]] }) {
    return (
        <table id={id} className={`w-full text-lg text-left text-gray-500 table-auto ${className}`} style={style}>
            <thead className='text-lg text-gray-700 uppercase bg-gray-50'>
                <tr className='bg-gray-200 border-b'>
                    {headings.map((heading, key) => <th scope='col' key={key}>{heading}</th>)}
                </tr>
            </thead>
            <tbody>
                {body.map((contents, index) => {
                    return (
                        <tr key={index} className='bg-white border-b'>
                            {contents.map((content, key) => <th key={key}>{content}</th>)}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}
