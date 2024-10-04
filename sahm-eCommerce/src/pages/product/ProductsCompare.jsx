import React from "react";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import HeaderRoutes from "../../utils/HeaderRoutes";
import MainButton from "../../components/buttons/MainButtons";
import RemoveButton from "../../components/buttons/RemoveButton";

const ProductsCompare = () => {
  const products = [
    {
      id: 47,
      name: "HP LP3065",
      image: "https://sahmksa.com/image/cache/catalog/product/800-90x90.png",
      price: "ريال سعودي 856",
      model: "Product 21",
      brand: "HP",
      availability: "In Stock",
      rating: "Based on 1 reviews.",
      summary:
        "Stop your co-workers in their tracks with the stunning new 30-inch diagonal HP LP3065 Flat Panel Monitor. This flagship monitor features best-in-class performance and presentation features on a hug...",
      weight: "1.00kg",
      dimensions: "0.00cm x 0.00cm x 0.00cm",
      memory: "16GB",
      cores: 4,
    },
    {
      id: 41,
      name: "iMac",
      image:
        "https://sahmksa.com/image/cache/catalog/item_XL_132361965_4077bbe9682bd-90x90.jpg",
      price: "ريال سعودي 902",
      model: "Product 14",
      brand: "Apple",
      availability: "In Stock",
      rating: "Based on 1 reviews.",
      summary:
        "Just when you thought iMac had everything, now there's even more. More powerful Intel Core 2 Duo processors. And more memory standard. Combine this with Mac OS X Leopard and iLife '08, and it's mor...",
      weight: "5.00kg",
      dimensions: "0.00cm x 0.00cm x 0.00cm",
      memory: "",
      cores: "",
    },
    {
      id: 41,
      name: "iMac",
      image:
        "https://sahmksa.com/image/cache/catalog/item_XL_132361965_4077bbe9682bd-90x90.jpg",
      price: "ريال سعودي 902",
      model: "Product 14",
      brand: "Apple",
      availability: "In Stock",
      rating: "Based on 1 reviews.",
      summary:
        "Just when you thought iMac had everything, now there's even more. More powerful Intel Core 2 Duo processors. And more memory standard. Combine this with Mac OS X Leopard and iLife '08, and it's mor...",
      weight: "5.00kg",
      dimensions: "0.00cm x 0.00cm x 0.00cm",
      memory: "",
      cores: "",
    },
    {
      id: 41,
      name: "iMac",
      image:
        "https://sahmksa.com/image/cache/catalog/item_XL_132361965_4077bbe9682bd-90x90.jpg",
      price: "ريال سعودي 902",
      model: "Product 14",
      brand: "Apple",
      availability: "In Stock",
      rating: "Based on 1 reviews.",
      summary:
        "Just when you thought iMac had everything, now there's even more. More powerful Intel Core 2 Duo processors. And more memory standard. Combine this with Mac OS X Leopard and iLife '08, and it's mor...",
      weight: "5.00kg",
      dimensions: "0.00cm x 0.00cm x 0.00cm",
      memory: "",
      cores: "",
    },
  ];

  return (
    <MaxWidthWrapper className="max-w-screen-xl">
      <HeaderRoutes page="Product Comparison" route="" />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold border-b-2 border-gray-300 pb-4 mb-8 text-gray-800">
          Product Comparison
        </h2>
        {products.length === 0 ? (
          <p className="text-lg text-gray-600">
            You have not chosen any products to compare.
          </p>
        ) : (
          <div className="overflow-x-auto sm:overflow-auto md:overflow-visible mb-6">
            <table className="min-w-[60rem] border border-gray-200 shadow-lg rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th
                    colSpan={products.length + 1}
                    className="text-center py-5 font-semibold text-xl border-b border-gray-200"
                  >
                    Product Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-lg font-medium text-gray-600 border-r border-gray-200">
                    Product
                  </th>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="py-4 px-6 text-lg font-medium text-gray-700 border-r border-gray-200"
                    >
                      <a
                        href={`https://sahmksa.com/${product.name.toLowerCase()}`}
                        className="hover:text-blue-600 transition-colors duration-300"
                      >
                        {product.name}
                      </a>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-lg font-medium text-gray-600 border-r border-gray-200">
                    Image
                  </th>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="py-4 px-6 text-center border-r border-gray-200"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-24 h-24 object-contain rounded-lg shadow-sm"
                      />
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-lg font-medium text-gray-600 border-r border-gray-200">
                    Price
                  </th>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="py-4 px-6 text-lg font-medium text-gray-700 border-r border-gray-200"
                    >
                      {product.price}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-lg font-medium text-gray-600 border-r border-gray-200">
                    Model
                  </th>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="py-4 px-6 text-lg font-medium text-gray-700 border-r border-gray-200"
                    >
                      {product.model}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-lg font-medium text-gray-600 border-r border-gray-200">
                    Brand
                  </th>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="py-4 px-6 text-lg font-medium text-gray-700 border-r border-gray-200"
                    >
                      {product.brand}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-lg font-medium text-gray-600 border-r border-gray-200">
                    Availability
                  </th>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="py-4 px-6 text-lg font-medium text-gray-700 border-r border-gray-200"
                    >
                      {product.availability}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-lg font-medium text-gray-600 border-r border-gray-200">
                    Rating
                  </th>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="py-4 px-6 text-lg font-medium text-gray-700 border-r border-gray-200"
                    >
                      {product.rating}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-lg font-medium text-gray-600 border-r border-gray-200">
                    Summary
                  </th>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="py-4 px-6 text-sm text-gray-600 border-r border-gray-200"
                    >
                      {product.summary}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-lg font-medium text-gray-600 border-r border-gray-200">
                    Weight
                  </th>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="py-4 px-6 text-lg font-medium text-gray-700 border-r border-gray-200"
                    >
                      {product.weight}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-lg font-medium text-gray-600 border-r border-gray-200">
                    Dimensions (L x W x H)
                  </th>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="py-4 px-6 text-lg font-medium text-gray-700 border-r border-gray-200"
                    >
                      {product.dimensions}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-lg font-medium text-gray-600 border-r border-gray-200">
                    Memory
                  </th>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="py-4 px-6 text-lg font-medium text-gray-700 border-r border-gray-200"
                    >
                      {product.memory || "N/A"}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-lg font-medium text-gray-600 border-r border-gray-200">
                    Cores
                  </th>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="py-4 px-6 text-lg font-medium text-gray-700 border-r border-gray-200"
                    >
                      {product.cores || "N/A"}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="py-4 px-6 text-lg font-medium text-gray-600 border-r border-gray-200"></th>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="py-4 px-6 text-center border-r border-gray-200"
                    >
                      <div className="flex justify-center space-x-2">
                        <MainButton href="#">Add to cart</MainButton>
                        <RemoveButton href="#">Remove</RemoveButton>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductsCompare;
