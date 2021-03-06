import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { UserProvider } from '../context/userContext'
import { ProductsProvider } from '../context/productsContext'
import ModalsComp from '../components/Modals/ModalsComp'
import { ModalProvider } from '../context/modalContext'

function MyApp({ Component, pageProps }) {

  return (
    <UserProvider>
      <ProductsProvider>
        <ModalProvider>
          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            draggable={false}
            pauseOnVisibilityChange
            closeOnClick
            pauseOnHover
          />
          <ModalsComp />
        </ModalProvider>
      </ProductsProvider>
    </UserProvider>
  )
}

export default MyApp
