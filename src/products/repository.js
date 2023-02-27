let products = [
    {
      id: '240d890b-5f98-41d6-b4a1-c829a824a500',
      name: 'Pants',
      price: 590.58,
      quantity: 83
    },
    {
      id: 'ccf8166b-d137-47cc-b292-52c3b9c7a216',
      name: 'Sausages',
      price: 41.72,
      quantity: 125
    },
    {
      id: '11573630-05bd-45aa-b8fb-1440677e2d15',
      name: 'Tuna',
      price: 92.51,
      quantity: 676
    },
    {
      id: '73256e6b-2099-4ec9-856f-51021bc138e8',
      name: 'Chair',
      price: 664.25,
      quantity: 680
    },
    {
      id: 'a2fae591-5da4-45a3-96f5-d63b4bdc71d0',
      name: 'Car',
      price: 218.29,
      quantity: 218
    }
  ]

const productsRepository = {
    getAll(){
        return products
    },
    deleteById(id) {
      products = products.filter(item => item.id !== id)
    }
}

export { productsRepository }