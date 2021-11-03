import PageTemplate from '../components/pageTemplate.js';
import smallBasket from '../assets/the-basket-of-apples/hero-small.jpg';
import largeBasket from '../assets/the-basket-of-apples/hero-large.jpg';
import basketAuthor from '../assets/the-basket-of-apples/artist.jpg';
import galleryImg from '../assets/the-basket-of-apples/gallery.jpg'

const TheBasketOfApples = () => {
    return(
        <PageTemplate paintingUrl={window.innerWidth >= 768 ? largeBasket : smallBasket} title="The Basket of Apples" author="Paul Cézanne" desc={`The Basket of Apples (French: Le panier de pommes) is a still life oil painting
        by French artist Paul Cézanne, which he created c. 1893. The painting is
        particularly remarkable for its creative composition, which rejected realistic
        representation in favour of distorting objects to create multiple perspectives.
        This approach eventually influenced other art movements, including Fauvism and
        Cubism. It belongs to the Helen Birch Bartlett Memorial Collection of the Art
        Institute of Chicago.`} authorImg={basketAuthor} year="1893" galleryImg={galleryImg} prevUrl="mona-lisa" nextUrl="the-boy-in-the-red-vest" source="https://en.wikipedia.org/wiki/The_Basket_of_Apples" currentItem={12}/>
    );
}

export default TheBasketOfApples;
