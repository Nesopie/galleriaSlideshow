import PageTemplate from '../components/pageTemplate.js';
import smallGuernica from '../assets/guernica/hero-small.jpg';
import largeGuernica from '../assets/guernica/hero-large.jpg';
import guernicaAuthor from '../assets/guernica/artist.jpg';
import galleryImg from '../assets/guernica/gallery.jpg'

const Guernica = () => {
    return (
        <PageTemplate paintingUrl={window.innerWidth >= 768 ? largeGuernica : smallGuernica} title="Guernica" author="Pablo Picasso" desc={`The scene occurs within a room where, on the left, a wide-eyed bull stands over
        a grieving woman holding a dead child in her arms. In the center of the room a
        horse falls in agony with a large gaping hole in its side, as if it had just been
        run through by a spear or javelin. The horse appears to be wearing chain mail
        armor, decorated with vertical tally marks arranged in rows. A dead and dismembered
        soldier lies under the horse. The hand of his severed right arm grasps a shattered
        sword, from which a flower grows.`} authorImg={guernicaAuthor} year="1937" galleryImg={galleryImg} prevUrl="girl-with-a-pearl-earring" nextUrl="penitent-magdalene" source="https://en.wikipedia.org/wiki/Guernica_(Picasso)"/>
    );
}

export default Guernica;
