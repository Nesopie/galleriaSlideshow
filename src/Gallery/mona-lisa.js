import PageTemplate from '../components/pageTemplate.js';
import smallMona from '../assets/mona-lisa/hero-small.jpg';
import largeMona from '../assets/mona-lisa/hero-large.jpg';
import monaAuthor from '../assets/mona-lisa/artist.jpg';
import galleryImg from '../assets/mona-lisa/gallery.jpg'

const MonaLisa = () => {
    return (
        <PageTemplate paintingUrl={window.innerWidth >= 768 ?largeMona : smallMona} title="Mona Lisa" author="Leonardo da Vinci" desc={`The Mona Lisa (/ˌmoʊnə ˈliːsə/; italian: La Gioconda [la dʒoˈkonda] or Monna
        Lisa [ˈmɔnna ˈliːza]) is a half-length portrait painting by Italian artist
        Leonardo da Vinci. Considered an archetypal masterpiece of the Italian
        Renaissance, it has been described as "the best known, the most visited, the
        most written about, the most sung about, the most parodied work of art in the
        world". The painting's novel qualities include the subject's enigmatic
        expression, the monumentality of the composition, the subtle modelling of
        forms, and the atmospheric illusionism.`} authorImg={monaAuthor} year="1503" galleryImg={galleryImg} prevUrl="the-night-cafe" nextUrl="the-basket-of-apples" source="https://en.wikipedia.org/wiki/Mona_Lisa"/>
    );
}

export default MonaLisa;
