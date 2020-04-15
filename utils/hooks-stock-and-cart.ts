import { useState } from "react"

type cartType = "Nintendo" | "Ps4"

export function useStockAndCart() {
  const [stock, setStock] = useState({
    nintendo: {
      id: 1,
      name: "Nintendo Switch",
      price: 500,
      inStock: 5,
    },
    ps4: {
      id: 2,
      name: "Playstation 4",
      price: 450,
      inStock: 5,
    },
  })

  const [nintendoCart, setNintendoCart] = useState(0)
  const [ps4Cart, setPs4Cart] = useState(0)

  const confirmAndReset = () => {
    stock.nintendo.inStock = stock.nintendo.inStock - nintendoCart
    stock.ps4.inStock = stock.ps4.inStock - ps4Cart

    setStock(stock)

    setNintendoCart(0)
    setPs4Cart(0)
  }

  const addItemTocart = (cart: cartType) => {
    switch (cart) {
      case "Nintendo":
        nintendoCart < stock.nintendo.inStock &&
          setNintendoCart(nintendoCart + 1)
        break

      case "Ps4":
        ps4Cart < stock.ps4.inStock && setPs4Cart(ps4Cart + 1)
        break
    }
  }

  return {
    stock,
    nintendoCart,
    ps4Cart,
    addItemTocart,
    confirmAndReset,
  }
}
