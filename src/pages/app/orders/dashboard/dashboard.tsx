import { Helmet } from 'react-helmet-async'

import { DayOrderAmount } from './day-order-amount'
import { MonthCancelledAmount } from './month-cancelled-orders-amount'
import { MonthOrderAmount } from './month-order-amount'
import { MonthRevenueCard } from './month-revenue-card'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Login" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrderAmount />
          <DayOrderAmount />
          <MonthCancelledAmount />
        </div>
        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
        </div>
      </div>
    </>
  )
}
