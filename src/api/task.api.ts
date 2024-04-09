/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"

const productsApi = axios.create({
  baseURL: 'https://the-order-api-eb7745fd53d7.herokuapp.com/productos/api/v1/productos'
})

const restaurantesApi = axios.create({
  baseURL: 'https://the-order-api-eb7745fd53d7.herokuapp.com/restaurantes/api/v1/restaurantes'
})

const ordersApi = axios.create({
  baseURL: 'https://the-order-api-eb7745fd53d7.herokuapp.com/pedidos/api/v1/pedidos'
})

const detailOrdersApi = axios.create({
  baseURL: 'https://the-order-api-eb7745fd53d7.herokuapp.com/pedidos/api/v1/detallesPedido'
})



export const getRestaurants = () => {
  return restaurantesApi.get('/')
}

export const updateRestaurant = (id:string | undefined, restaurant: any) => {
  
  return restaurantesApi.put(`/${id}/`, restaurant)
}


export const getAllProducts = () => {
  return productsApi.get('/')
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateProduct = (id:string | undefined, product: any) => {
  const productToSend ={
    ...product,
    restaurante:"1"
  }
  return productsApi.put(`/${id}/`, productToSend)
}


export const createProduct = ( product: any) => {
  const productToSend ={
    ...product,
    restaurante:"1"
  }
  return productsApi.post("/", productToSend)
}

export const deleteProduct = ( productId:string) => {
  return productsApi.delete(`/${productId}`)
}



export const getAllOrders = () => {
  return ordersApi.get('/')
}

export const createOrder = ( order: any) => {
  const orderToSend ={
    ...order,
    restaurante:"1",
    date: Date.now(),
    estado: "EN",    
  }
  console.log(orderToSend);
  return ordersApi.post("/", orderToSend)
}

export const updateOrder = (id:string | undefined, order: any) => {  
  const orderToSend ={
    ...order,
    restaurante:"1"
  }
  return ordersApi.put(`/${id}/`, orderToSend)
}

export const createDetailOrder = (id:number , productId: number,  order: any) => {  
  const orderToSend ={
    ...order,
    cantidad: Number(order.cantidad),
    pedido: id,
    producto: productId,
  }
  return detailOrdersApi.post(`/`, orderToSend)
}