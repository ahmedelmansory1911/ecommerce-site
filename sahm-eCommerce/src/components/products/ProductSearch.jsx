import React, { useState } from "react";

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = () => {
    // هنا يمكنك استبدال هذا بمكالمة API لجلب المنتجات
    const dummyProducts = [
      { id: 1, name: 'HP Laptop 15.6"', price: 1000 },
      { id: 2, name: 'HP Laptop 15.6"', price: 700 },
      { id: 3, name: 'HP Laptop 15.6"', price: 900 },
    ];
    setProducts(
      dummyProducts.filter((product) => product.name.includes(searchTerm))
    );
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="ابحث عن منتج..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded ml-2"
      >
        بحث
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p>سعر: {product.price} ريال سعودي</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;
