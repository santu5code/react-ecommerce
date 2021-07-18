import Product1 from '../assets/product1.jpg'
import Product2 from '../assets/product2.jpg'
import Product3 from '../assets/product3.jpg'
import Product4 from '../assets/product4.jpg'
import Product5 from '../assets/product5.jpg'
import Product6 from '../assets/product6.jpg'
import Product7 from '../assets/product7.jpg'
import Product from './Product'
export const ProductList=[
    {
        image:Product1,
        name: 'Baby shoe',
        rate:800,
        id:'1'
    },
    {
        image:Product2,
        name: 'Babygirl shoe',
        rate:700,
        id:'2'
    },
    {
        image:Product3,
        name: 'man shoe',
        rate:600,
        id:'3'
    },
    {
        image:Product4,
        name: 'abc shoe',
        rate:500,
        id:'4'
    },
    {
        image:Product5,
        name: 'Baby shoe',
        rate:400,
        id:'5'
    },
    {
        image:Product6,
        name: 'Baby shoe',
        rate:300,
        id:'6'
    },
    {
        image:Product7,
        name: 'Baby shoe',
        rate:200,
        id:'7'
    },
    
]

export default function Store(){
    return(
        <>
            {
                ProductList.map((product)=><Product key={product.id} product={product} />)
            }
        </>
    )
}
