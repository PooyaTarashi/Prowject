import greekSaladImage from '../icons_assets/greek salad.jpg'
import bruschettaImage from '../icons_assets/bruchetta.svg'
import lemonDessertImage from '../icons_assets/lemon dessert.jpg'
import ProductCard from './ProductCards'

const Specials = () => {
    const products = [
        {
          name: 'Greek Salad',
          image: greekSaladImage,
          price: '$12.99',
          description: `The famous greek salad of crispy lettuce, peppers, olives and 
            our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
            croutons.`,
        },
        {
          name: 'Bruschetta',
          image: bruschettaImage,
          price: '$5.99',
          description: `Our Bruschetta is made from grilled bread that has been 
            smeared with garlic and seasoned with salt and olive oil.`,
        },
        {
          name: 'Lemon Dessert',
          image: lemonDessertImage,
          price: '$5.00',
          description: `This comes straight from grandma's recipe book, every last 
            ingredient has been sourced and is as authentic as can be imagined.`,
        },
      ];
    
    const listModified = products.map(item => 
        <ProductCard
            name={ item.name }
            image={ item.image }
            price={ item.price }
            description={ item.description }
        />
    );


    return (
        <div>
            <h1 className='specials-container-heading'>Special Products</h1>
            <div className='cards-container'>
                {listModified}
            </div>
        </div>
    );

}

export default Specials;