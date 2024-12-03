import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthRevenue } from '@/api/get-month-revenue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthRevenueCard() {
  const { data: monthRevenue } = useQuery({
    queryKey: ['metrics', 'month-revenue'],
    queryFn: getMonthRevenue,
  })
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>
        <DollarSign className="h4-w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">
          {monthRevenue?.receipt.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
        <p className="text-xs text-muted-foreground">
          <>
            {monthRevenue?.diffFromLastMonth &&
            monthRevenue?.diffFromLastMonth >= 0 ? (
              <>
                <span className="text-emerald-50 dark:text-emerald-400">
                  +{monthRevenue.diffFromLastMonth}%
                </span>{' '}
                em relação ao mês passado
              </>
            ) : (
              <>
                <span className="text-rose-50 dark:text-rose-400">
                  {monthRevenue?.diffFromLastMonth &&
                    monthRevenue.diffFromLastMonth}
                  %
                </span>{' '}
                em relação ao mês passado
              </>
            )}
          </>
        </p>
      </CardContent>
    </Card>
  )
}
