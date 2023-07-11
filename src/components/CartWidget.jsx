import { FaShoppingCart } from 'react-icons/fa';
import './styles.css'; // Importa el archivo de estilos CSS

const CartWidget = () => {
  const cartItems = 5; // Número hardcodeado para representar la cantidad de elementos en el carrito

  return (
    <div style={{ backgroundColor: 'white', color: 'black' }}>
      <FaShoppingCart className="cart-icon" />
      <span>{cartItems}</span> {/* Mostrar el número hardcodeado */}
    </div>
  );
};

export default CartWidget;