import PageTemplate from '../components/pageTemplate.js';
import smallArnolfini from '../assets/arnolfini-portrait/hero-small.jpg';
import largeArnolfini from '../assets/arnolfini-portrait/hero-large.jpg';
import arnolfiniAuthor from '../assets/arnolfini-portrait/artist.jpg';
import galleryImg from '../assets/arnolfini-portrait/gallery.jpg'

const ArnolfiniPortrait = () => {
    return (
        <PageTemplate paintingUrl={window.innerWidth >= 768 ? largeArnolfini : smallArnolfini} title="Arnolfini Portrait" author="Jan van Eyck" desc={`It is considered one of the most original and complex paintings in Western art,
        because of its beauty, complex iconography, geometric orthogonal perspective,
        and expansion of the picture space with the use of a mirror. According to Ernst
        Gombrich "in its own way it was as new and revolutionary as Donatello's or Masaccio's
        work in Italy. A simple corner of the real world had suddenly been fixed on to a
        panel as if by magic ... For the first time in history the artist became the
        perfect eye-witness in the truest sense of the term".`} authorImg={arnolfiniAuthor} year="1434" galleryImg={galleryImg} prevUrl="the-boy-in-the-red-vest" nextUrl="the-swing" source="https://en.wikipedia.org/wiki/Arnolfini_Portrait"/>
    );
}

export default ArnolfiniPortrait;
