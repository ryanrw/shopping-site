// Component
import { Table } from "../components/table"

// utils
import { useStockAndCart } from "../utils/hooks-stock-and-cart"

const StorePage = () => {
  const {
    stock,
    nintendoCart,
    ps4Cart,
    addItemTocart,
    confirmAndReset,
  } = useStockAndCart()

  const table = {
    heads: ["#", "ชื่อสินค้า", "ราคา", "จำนวน", "action"],
    content: [
      [
        ...Object.values(stock.nintendo),
        <button
          onClick={() => addItemTocart("Nintendo")}
          disabled={stock.nintendo.inStock < 0}
        >
          เพิ่มลงตะกร้า
        </button>,
      ],
      [
        ...Object.values(stock.ps4),
        <button
          onClick={() => addItemTocart("Ps4")}
          disabled={stock.ps4.inStock < 0}
        >
          เพิ่มลงตะกร้า
        </button>,
      ],
    ],
  }

  return (
    <div>
      <Table data={table} />

      <hr />

      <p>ตะกร้าสินค้า</p>

      {nintendoCart > 0 && <p>Nintendo: {nintendoCart}</p>}
      {ps4Cart > 0 && <p>Playstation 4: {ps4Cart}</p>}

      {(nintendoCart > 0 || ps4Cart > 0) && (
        <button onClick={() => confirmAndReset()}>สั่งซื้อ</button>
      )}
    </div>
  )
}

export default StorePage
