import PageTemplate from '../components/pageTemplate.js';
import smallSwing from '../assets/the-swing/hero-small.jpg';
import largeSwing from '../assets/the-swing/hero-large.jpg';
import swingAuthor from '../assets/the-swing/artist.jpg';
import galleryImg from '../assets/the-swing/gallery.jpg'

const TheSwing = () => {
    return(
        <PageTemplate paintingUrl={window.innerWidth >= 768 ? largeSwing : smallSwing} title="The Swing" author="Jean-Honoré Fragonard" desc={`The painting depicts an elegant young woman on a swing. A smiling young man,
        hiding in the bushes on the left, watches her from a vantage point that allows
        him to see up into her billowing dress, where his arm is pointed with hat in
        hand. A smiling older man, who is nearly hidden in the shadows on the right,
        propels the swing with a pair of ropes. The older man appears to be unaware of
        the young man. As the young lady swings high, she throws her left leg up,
        allowing her dainty shoe to fly through the air.`} authorImg={swingAuthor} year="1767" galleryImg={galleryImg} prevUrl="arnolfini-portrait" nextUrl="starry-night" source="https://en.wikipedia.org/wiki/The_Swing_(Fragonard)" currentItem={15}/>
    );
}

export default TheSwing;
