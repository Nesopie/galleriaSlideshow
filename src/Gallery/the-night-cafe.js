import PageTemplate from '../components/pageTemplate.js';
import smallCafe from '../assets/the-night-cafe/hero-small.jpg';
import largeCafe from '../assets/the-night-cafe/hero-large.jpg';
import cafeAuthor from '../assets/the-night-cafe/artist.jpg';
import galleryImg from '../assets/the-night-cafe/gallery.jpg'

const TheNightCafe = () => {
    return (
        <PageTemplate paintingUrl={window.innerWidth >= 768 ? largeCafe : smallCafe} title="The Night Café" author="Vincent Van Gogh" desc={`The Night Café (French: Le Café de nuit) is an oil painting created by Dutch
        artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed
        lower right beneath the signature. The painting is owned by Yale University
        and is currently held at the Yale University Art Gallery in New Haven,
        Connecticut. The interior depicted is the Café de la Gare, 30 Place Lamartine,
        run by Joseph-Michel Ginoux and his wife Marie, who in November 1888 posed for
        Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux evidently posed
        for both artists, too.`} authorImg={cafeAuthor} year="1888" galleryImg={galleryImg} prevUrl="the-lady-with-an-ermine" nextUrl="mona-lisa" source="https://en.wikipedia.org/wiki/The_Night_Caf%C3%A9" currentItem={10}/>
    );
}

export default TheNightCafe;
