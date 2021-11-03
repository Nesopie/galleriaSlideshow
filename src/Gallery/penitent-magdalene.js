import PageTemplate from '../components/pageTemplate.js';
import smallPenMag from '../assets/penitent-magdalene/hero-small.jpg';
import largePenMag from '../assets/penitent-magdalene/hero-large.jpg';
import penMagAuthor from '../assets/penitent-magdalene/artist.jpg';
import galleryImg from '../assets/penitent-magdalene/gallery.jpg'

const PenitentMagalene = () => {
    return (
        <PageTemplate paintingUrl={window.innerWidth >= 768 ? largePenMag : smallPenMag} title="Penitent Magdalene" author="Artemisia Gentileschi" desc={`Penitent Magdalene is a painting by the Italian artist Artemisia Gentileschi.
        It hangs in Seville Cathedral. It has probably been in the cathedral since the
        late 17th century. The painting's first home was the collection of Fernando
        Enriquez Afan de Ribera, from 1626 to 1637. She returned to the subject later
        in the 1620s in Mary Magdalene as Melancholy.`} authorImg={penMagAuthor} year="1625" galleryImg={galleryImg} prevUrl="guernica" nextUrl="the-storm-on-the-sea-of-galilee" source="https://en.wikipedia.org/wiki/Penitent_Magdalene_(Artemisia_Gentileschi)" currentItem={4}/>
    )
}

export default PenitentMagalene;
