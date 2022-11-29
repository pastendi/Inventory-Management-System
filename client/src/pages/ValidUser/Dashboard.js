import React, { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import { Overview, Statistic } from '../../components'

const Dashboard = () => {
  const { getStat } = useAppContext()
  useEffect(() => {
    getStat()
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <Overview />
      <Statistic />
    </>
  )
}

export default Dashboard
