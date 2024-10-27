import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import Link from 'next/link'

export function TrackingSheet({
  orderData,
  open,
  setOpen,
}: {
  orderData: { orderCode: string; estimatedDate: string; status: string } | null
  open: boolean
  setOpen: (open: boolean) => void
}) {
  function TrackingSheetFields() {
    return (
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="orderCode" className="">
            Order number
          </Label>
          <Input
            id="orderCode"
            value={orderData?.orderCode}
            className="col-span-3"
            readOnly
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="estimatedDate" className="">
            Estimated Date
          </Label>
          <Input
            id="estimatedDate"
            value={orderData?.estimatedDate}
            className="col-span-3"
            readOnly
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="status" className="">
            Status
          </Label>
          <Input
            id="status"
            value={orderData?.status}
            className="col-span-3"
            readOnly
          />
        </div>
      </div>
    )
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Order Status</SheetTitle>
          <SheetDescription>Here is the result</SheetDescription>
        </SheetHeader>
        <TrackingSheetFields />
        <span className="flex w-full justify-center sm:justify-end mb-2">
          Is there a problem with your order?
        </span>
        <SheetFooter>
          <Button>
            <Link href="https://wa.me/50755555555">Contact me</Link>
          </Button>
          <SheetClose asChild>
            <Button variant="destructive" onClick={() => setOpen(false)}>
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
