import React from 'react'

type props = {
  values: string[] | number[]
  quantity: number
  onChange: Function
}
function Dropdown({ values, quantity, onChange }: props) {
  return (
    <select
      id="quantity"
      name="quantity"
      defaultValue={quantity}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
      className="rounded-md border border-gray-300 text-left text-base font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
    >
      {values.map((i) => {
        return <option key={i} value={i}>{i}</option>
      })}
    </select>
  )
}

export default Dropdown
