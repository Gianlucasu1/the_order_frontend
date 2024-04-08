import './App.css'
import Navigation from './components/Navigation'
import ClientOrdersPage from './pages/ClientOrdersPage'
import CreateOrderDetails from './pages/CreateOrderDetails'
import CreateProductPage from './pages/CreateProductPage'
import EditProductPage from './pages/EditProductPage'
import EditStore from './pages/EditStore'
import { HomePage } from './pages/HomePage'
import MakeOrder from './pages/MakeOrder'
import OrdersPage from './pages/OrdersPage'
import { ProductsPage } from './pages/productsPage'
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  //  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/editar-producto/:id" element={<EditProductPage />} />
        <Route path="/crear-producto" element={<CreateProductPage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/editar-restaurante" element={<EditStore />} />

        <Route path="/pedidos" element={<OrdersPage />} />

        <Route path="/ordena" element={<MakeOrder />} />
        <Route path="/añadir-productos/:id" element={<CreateOrderDetails />} />
        <Route path="/pedidos-cliente" element={<ClientOrdersPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
