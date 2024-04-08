export interface Product {
  nombre:string;
  descripcion:string;
  id:int;
  image:string;
  precio:string;
  restaurante: int;
}

export interface Restaurante {
  nombre: string;
  logo: string;
  informacion_contacto: string;
}

type EstadoPedido = 'EN' | 'PR' | 'LI';

export interface Pedido {
  id?: string; // Opcional, ya que se asigna automáticamente al crear un nuevo pedido
  restaurante: Restaurante | number; // Puede ser todo el objeto Restaurante o solo el ID
  estado: EstadoPedido;
  fecha_hora: Date | string; // La fecha puede ser un objeto Date o una cadena en formato ISO
  es_para_llevar: boolean;
  nombre_cliente: string;
  detalles?: DetallePedido[]; // Opcional, dependiendo de si quieres incluir los detalles del pedido aquí
}

export interface DetallePedido {
  id?: number; // Opcional, asignado automáticamente al crear un nuevo detalle de pedido
  pedido: Pedido | number; // Puede ser todo el objeto Pedido o solo el ID
  producto: Producto | number; // Puede ser todo el objeto Producto o solo el ID
  cantidad: number;
  observaciones?: string; // Opcional, puede estar vacío
}