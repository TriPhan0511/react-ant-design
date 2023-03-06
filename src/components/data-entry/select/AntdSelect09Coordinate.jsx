import { Select, Space } from 'antd'
import { useState } from 'react'

const AntdSelect09Coordinate = () => {
  const countryData = ['Vietnam', 'Japan']
  const cityData = {
    Vietnam: ['Ho Chi Minh', 'Da Nang', 'Ha Noi'],
    Japan: ['Tokyo', 'Hiroshima'],
  }

  const [cities, setCities] = useState(cityData[countryData[0]])
  const [city, setCity] = useState(cityData[countryData[0]][0])

  const handleCountryChange = (country) => {
    console.log('🚀 ~ country:', country)
    setCities(cityData[country])
    setCity(cityData[country][0])
  }

  const handleCityChange = (city) => {
    console.log('🚀 ~ city:', city)
    setCity(city)
  }

  return (
    <>
      <Space>
        <Select
          style={{ width: 120 }}
          onChange={handleCountryChange}
          defaultValue={countryData[0]}
          options={countryData.map((e) => ({
            value: e,
            label: e,
          }))}
        />
        <Select
          style={{ width: 120 }}
          // defaultValue={city}
          value={city}
          options={cities.map((e) => ({
            value: e,
            label: e,
          }))}
          onChange={handleCityChange}
        />
      </Space>
    </>
  )
}

export default AntdSelect09Coordinate

// -----------------------------------------------------------------
// import { Select, Space } from 'antd'
// import { useEffect, useState } from 'react'

// const AntdSelect09Coordinate = () => {
//   const countryAndCities = {
//     vietnam: [
//       {
//         value: 'Ho Chi Minh',
//         label: 'Ho Chi Minh',
//       },
//       {
//         value: 'Da Nang',
//         label: 'Da Nang',
//       },
//       {
//         value: 'Ha Noi',
//         label: 'Ha Noi',
//       },
//     ],
//     japan: [
//       {
//         value: 'Tokyo',
//         label: 'Tokyo',
//       },
//       {
//         value: 'Hiroshima',
//         label: 'Hiroshima',
//       },
//     ],
//   }

//   const [country, setCountry] = useState('vietnam')
//   const [cities, setCities] = useState(countryAndCities[country])
//   const [city, setCity] = useState('')

//   const handleCountryChange = (value) => {
//     setCountry(value)
//   }

//   const handleCityChange = (value) => {
//     setCity(value)
//   }

//   useEffect(() => {
//     setCities(countryAndCities[country])
//   }, [country])

//   return (
//     <>
//       <Space>
//         <Select
//           style={{ width: 120 }}
//           onChange={handleCountryChange}
//           defaultValue={country}
//           options={[
//             {
//               value: 'vietnam',
//               label: 'Vietnam',
//             },
//             {
//               value: 'japan',
//               label: 'Japan',
//             },
//           ]}
//         />
//         <Select
//           style={{ width: 120 }}
//           defaultValue={cities?.length > 0 ? cities[0].value : 'Select a city'}
//           options={cities}
//           onChange={handleCityChange}
//         />
//       </Space>
//     </>
//   )
// }

// export default AntdSelect09Coordinate
