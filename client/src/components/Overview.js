import OverviewItem from './OverviewItem'
import { useAppContext } from '../context/appContext'
import { FaUsers } from 'react-icons/fa'
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import { SiCountingworkspro } from 'react-icons/si'

import Wrapper from '../assets/wrappers/Overview'

const Overview = () => {
  const { stat } = useAppContext()
  const defaultStats = [
    {
      title: 'Users',
      count: stat.user || 0,
      icon: <FaUsers />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'Products',
      count: stat.product || 0,
      icon: <MdOutlineLocalGroceryStore />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'Out of Stock',
      count: stat.outOfStock || 0,
      icon: <SiCountingworkspro />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ]

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <OverviewItem key={index} {...item} />
      })}
    </Wrapper>
  )
}

export default Overview
