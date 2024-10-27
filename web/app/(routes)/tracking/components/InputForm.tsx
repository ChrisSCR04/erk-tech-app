'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { Input } from '@/components/ui/input'
import { getTrackingInfo } from '@/lib/actions'
import { useState } from 'react'
import { TrackingSheet } from './TrackingSheet'

const FormSchema = z.object({
  orderCode: z.string().regex(/^\d{8}-\d{3}$/, {
    message: 'Order code is invalid, please enter a valid order code.',
  }),
})

export function InputForm() {
  const [orderData, setOrderData] = useState<object | null>(null)
  const [open, setOpen] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      orderCode: '',
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    getTrackingInfo(data.orderCode)
      .then((orderData) => {
        setOrderData(orderData)
        setError(false)
        setOpen(true)
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  // export function Error

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="orderCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-2xl mt-12">Order number</FormLabel>
                <FormControl>
                  <Input placeholder="Order code number" {...field} />
                </FormControl>
                <FormDescription className="text-lg mt-12">
                  Insert your order code number.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>

      {error && <span className="mt-4 text-red-600 font-bold">{error}</span>}

      {orderData && (
        <TrackingSheet
          open={open}
          setOpen={setOpen}
          orderData={{
            orderCode: (orderData as { orderCode: string }).orderCode,
            estimatedDate: (orderData as { estimatedDate: string })
              .estimatedDate,
            status: (orderData as { status: string }).status,
          }}
        />
      )}
    </>
  )
}
