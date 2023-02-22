export type Product = {
  _id: string
  images: string[]
  price: number
  rating: number
  price_before_discount: number
  quantity: number
  sold: number
  view: number
  name: string
  description: string
  category: string
  image: string
  createdAt: string
  updatedAt: string
}

export type ListProduct = {
  products: Product[]
  pagination: {
    page: number
    limit: number
    page_size: number
  }
}
