export interface Product {
  id: string
  name: string
  href: string
  price: string
  availableQty?: string
  src: string
  alt: string
  description: string
  highlights:string
  details:string
  images?: Image[]
}

export interface PropsType{
  products?:Product[]
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = {
  name: string
  featured: Product[]
}

export type Page = {
  name: string
  href: string
}
export type Navigation = {
  categories: Category[]
  pages: Page[]
}

//make each type alone and export
//create google sheets response type

export type AppStateType = {
  products: Products[]
  categories: Categories[]
  cart: Cart[]
  order: Order
}

export type Products = {
  id: string
  name: string
  slug: string
  imageAlt: string
  categoryId: string
  trending: string
  featured: string
}
export interface Cart extends Products {
  orderId: any
  images: Images[]
  variants: ProductVariants[]
  app: any
  quantity: number
}
export type Dropdown = {
  value: string
  id: string
}
export type Categories = {
  id: string
  name: string
}
export type Image = {
  id: string
  productId: string
  src: string
  alt: string
}
export type ProductVariants = {
  id: string
  productId: string
  color: string
  size: string
  price: string
  avaiableQty: string
}

export type Images = {
  id: string
  productId: string
  imageSrc: string
  imageAlt: string
}

export type Order = {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  city: string
  address: string
  apartment: string
  postalCode: string
  items: CartItem[]
}
export type GoogleSheet = {
  Product: Product[]
  Categories: Categories[]
  ProductImages: Image[]
  ProductVariants: ProductVariants[]
}
