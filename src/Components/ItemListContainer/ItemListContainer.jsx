import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { get } from '../../utils/api';


const ItemListContainer = () => {
  const mock = [
    { id: 1, name: 'Producto #1', image: 'https://dummyimage.com/283x180/000000/fff'},
    { id: 2, name: 'Producto #2', image: 'https://dummyimage.com/283x180/000000/fff'},
    { id: 3, name: 'Producto #3', image: 'https://dummyimage.com/283x180/000000/fff'},
    { id: 4, name: 'Producto #4', image: 'https://dummyimage.com/283x180/000000/fff'},
    { id: 5, name: 'Producto #5', image: 'https://dummyimage.com/283x180/000000/fff'},
    { id: 6, name: 'Producto #6', image: 'https://dummyimage.com/283x180/000000/fff'},
    { id: 7, name: 'Producto #7', image: 'https://dummyimage.com/283x180/000000/fff'},
    { id: 8, name: 'Producto #8', image: 'https://dummyimage.com/283x180/000000/fff'},
    { id: 9, name: 'Producto #9', image: 'https://dummyimage.com/283x180/000000/fff'},
    { id: 10, name: 'Producto #10', image: 'https://dummyimage.com/283x180/000000/fff'}
  ]
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const data = await get('https://fakestoreapi.com/products')
      setProducts(data)
    }
    fetch()
    // const fetch = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     console.log('llego la data')
    //     resolve(mock)
    //   }, 10000);
    // })
    // fetch.then((data) => {
    //   console.log('hola')
    //   setProducts(data)
    // })
  },[])

  return (
    <>
    <ItemList products={products}/>
    </>
  );
};

export default ItemListContainer;
