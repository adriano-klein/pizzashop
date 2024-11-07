import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'

import { DialogContent, DialogHeader } from './ui/dialog'
import { Table, TableBody, TableCell, TableRow } from './ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>lkdsfjhaskldjfhaslkdjhf</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
        <div className="space-8">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="h-2 items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="font-medium text-muted-foreground">
                      Pendente
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </DialogHeader>
    </DialogContent>
  )
}
