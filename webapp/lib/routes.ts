const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>
}

export const getAllProductsRoute = () => '/'

export const viewProductRouteParams = getRouteParams({ productName: true })
export type ViewProductRouteParams = typeof viewProductRouteParams
export const getViewProductRoute = ({ productName }: ViewProductRouteParams) => `/products/${productName}`
