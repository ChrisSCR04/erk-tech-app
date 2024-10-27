export async function getTrackingInfo(orderCode: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_STRAPI_HOST}`
  const path = `/api/orders?filters[orderCode]=${orderCode}`
  const url = new URL(path, baseUrl)

  try {
    const response = await fetch(url.href, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TRACKING_TOKEN}`,
      },
    })

    const rawData = await response.json()

    if (!rawData.data || rawData.data.length === 0) {
      throw new Error('The order code does not exist. Please try again.')
    }

    const { orderCode, estimatedDate, status } = rawData.data[0].attributes

    return { orderCode, estimatedDate, status }
  } catch (error) {
    console.error('Error fetching tracking info:', error)
    throw error
  }
}
