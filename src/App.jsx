import './App.css'

function App() {
  // Tenga algun tipo de variable que almacene los productos
  // Tenga una variable que almacene los productos que estan en el carrito

  //* Funcion parar agregar al carrito va a tomar el producto y lo va colocar en la variable carrito.
  //* Verificar si el producto ya existe en el carrito
  //* Si el producto ya EXISTE voy a incrementar la cantidad.
  //* Si el producto NO EXISTE voy a comenzar con cantidad = 1.

  //! Funcion para eliminar productos del carrito (Puede ser el mismo boton de decrementar)
  //! Verificar si mi producto existe en mi carrito.
  //! Verificar la cantidad (En caso de ser el boton "Decrementar")
  //! Si mi cantidad es 1. Eliminar producto del carrito.

  confirm('Desea confirmar la compra?');
  alert('Gracias por su compra!')

  return (
    <>
      <div>
        <div>
          <h1>Productos disponibles</h1>
          <p>Producto 1</p>
          {/* Cada producto debería tener un boton para agregar al carrito y elminarlo */}
          {/* El boton debería ejecutar una funcion que agregue el producto al carrito o eliminarlo */}
          <p>Producto 2</p>
          <p>Producto 3</p>
        </div>

        <hr />

        <h2>Carrito de compras</h2>
        {/* Cada producto debería tener dos botones */}
        {/* Boton "+" para incrementar de a uno la cantidad */}
        {/* Boton "-" para decrementar de a uno la cantidad */}
        <p>Nombre de producto. Cantidad: 5. Precio x 5: $ 250</p>
        <p>Nombre de producto. Cantidad: 4. Precio x 4: $ 160</p>

        <hr />

        {/* Funcion que retorna la suma de todos los productos de la variable carrito */}
        <h3>Total: $ 410</h3>

        <form style={{display: 'flex', flexDirection: 'column'}} action="">
          <label htmlFor="">Numero de tarjeta</label>
          <input type="text" />
          <label htmlFor="">Nombre titular</label>
          <input type="text" />
          <label htmlFor="">Vencimiento</label>
          <input type="text" />
          <label htmlFor="">CVV</label>
          <input type="text" />
        </form>

        <hr />

    {/* Evento para finalizar la compra */}
    {/* Funcion que dispare una confirm */}
        <button>Finalizar compra</button>

      </div>
    </>
  )
}

export default App
