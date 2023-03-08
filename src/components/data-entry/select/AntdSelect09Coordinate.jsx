import { Select, Space } from 'antd'
import { useState } from 'react'

const AntdSelect09Coordinate = () => {
  const countries = ['vietnam', 'japan']

  const countriesAndCities = {
    vietnam: ['saigon', 'danang', 'hanoi'],
    japan: ['tokyo', 'hiroshima'],
  }

  const [country, setCountry] = useState(countries[0])
  const [city, setCity] = useState(countriesAndCities[country][0])

  const handleCountryChange = (value) => {
    setCountry(value)
    setCity(countriesAndCities[value][0])
  }

  const handleCityChange = (value) => {
    setCity(value)
  }

  return (
    <Space>
      <Select
        style={{ width: 120 }}
        value={country}
        onChange={handleCountryChange}
        options={countries.map((e) => ({
          value: e,
          label: e[0].toUpperCase() + e.slice(1),
        }))}
      />
      <Select
        style={{ width: 120 }}
        value={city}
        onChange={handleCityChange}
        options={countriesAndCities[country].map((e) => ({
          value: e,
          label: e[0].toUpperCase() + e.slice(1),
        }))}
      />
      {country && <p>{`Country: ${country}`}</p>}
      {city && <p>{`City: ${city}`}</p>}
    </Space>
  )
}

export default AntdSelect09Coordinate
