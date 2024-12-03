import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthCancelledOrdersAmount } from '@/api/get-canceled-month-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthCancelledAmount() {
  const { data: cancelledOrders } = useQuery({
    queryKey: ['metrics', 'month-cancelled-orders-amount'],
    queryFn: getMonthCancelledOrdersAmount,
  })
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="h4-w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">
          {cancelledOrders?.amount.toLocaleString('pt-BR')}
        </span>
        <p className="text-xs text-muted-foreground">
          <>
            {cancelledOrders?.amount &&
            cancelledOrders.diffFromLastMonth >= 0 ? (
              <>
                <span className="text-emerald-50 dark:text-rose-400">
                  {cancelledOrders.diffFromLastMonth}%
                </span>{' '}
                em relação ao mês passado
              </>
            ) : (
              <>
                <span className="text-emerald-50 dark:text-emerald-400">
                  {cancelledOrders?.diffFromLastMonth}
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
