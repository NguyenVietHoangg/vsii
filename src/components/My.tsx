import React, { useState, useEffect } from 'react'

interface Data {
  // Định nghĩa các trường dữ liệu từ API
}

const MyComponent: React.FC = () => {
  const [data, setData] = useState<Data | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // useEffect(() => {
  //   fetch(`https://ergast.com/api/f1/2018/results/1.json`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setRaces(data.MRData.RaceTable.Races)
  //     })
  //   fetch(`https://ergast.com/api/f1/2018/driverStandings.json`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       let raceWinner =
  //         data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver
  //           .familyName +
  //         ' ' +
  //         data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver
  //           .givenName
  //       setWinner(raceWinner)
  //     })
  // }, [])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data')
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        setError('loi~')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return <div>{/* Hiển thị dữ liệu từ API */}</div>
}

export default MyComponent
