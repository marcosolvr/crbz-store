export interface IProduct {
  productId: number
  productName: string
  stars: number
  imageUrl: string
  listPrice: number | null
  price: number
  installments: IInstallments[]
}

export interface IInstallments {
  quantity: number
  value: number
}

export interface IProductContext {
  products: IProduct[] | undefined
  setProducts: React.Dispatch<React.SetStateAction<IProduct[] | undefined>>
}

export interface IProductContextProvider {
  children: JSX.Element
}