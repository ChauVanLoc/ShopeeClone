import { useQuery } from '@tanstack/react-query'

function useQueyProduct() {
  const getProduct = useQuery({
    queryKey: ['Product', idProduct],
    queryFn: () => ProductFetching.ProductFetching(idProduct as string)
  })
  return getProduct
}

export default useQueyProduct
