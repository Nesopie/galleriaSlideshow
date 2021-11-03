import PageTemplate from '../components/pageTemplate.js';
import smallGypsy from '../assets/the-sleeping-gypsy/hero-small.jpg';
import largeGypsy from '../assets/the-sleeping-gypsy/hero-large.jpg';
import GypsyAuthor from '../assets/the-sleeping-gypsy/artist.jpg';
import galleryImg from '../assets/the-sleeping-gypsy/gallery.jpg';

const TheSleepingGypsy = () => {
    return (
    <PageTemplate paintingUrl={window.innerWidth >= 768 ? largeGypsy : smallGypsy} title="The Sleeping Gypsy" author="Henri Rousseau" desc={`The Sleeping Gypsy (French: La Bohémienne endormie) is an 1897 oil painting by
        French Naïve artist Henri Rousseau (1844–1910). It is a fantastical depiction
        of a lion musing over a sleeping woman on a moonlit night. Rousseau first
        exhibited the painting at the 13th Salon des Indépendants, and tried unsuccessfully
        to sell it to the mayor of his hometown, Laval. Instead, it entered the private
        collection of a Parisian charcoal merchant where it remained until 1924, when it
        was discovered by the art critic Louis Vauxcelles."`} authorImg={GypsyAuthor} year="1897" galleryImg={galleryImg} prevUrl="van-gogh-self-portrait" nextUrl="the-lady-with-an-ermine" source="https://en.wikipedia.org/wiki/The_Sleeping_Gypsy" currentItem={8}/>
    );
}

export default TheSleepingGypsy;
