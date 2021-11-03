import PageTemplate from '../components/pageTemplate.js';
import smallBoy from '../assets/the-boy-in-the-red-vest/hero-small.jpg';
import largeBoy from '../assets/the-boy-in-the-red-vest/hero-large.jpg';
import boyAuthor from '../assets/the-boy-in-the-red-vest/artist.jpg';
import galleryImg from '../assets/the-boy-in-the-red-vest/gallery.jpg'

const TheBoyInTheRedVest = () => {
    return (
        <PageTemplate paintingUrl={window.innerWidth >= 768 ? largeBoy : smallBoy} title="The Boy in the Red Vest" author="Paul Cézanne" desc={`Cézanne painted four oil portraits of this Italian boy in the red vest, all
        in different poses, which allowed him to study the relationship between the
        figure and space. The most famous of the four, and the one commonly referred
        to by this title, is the one which depicts the boy in a melancholic seated
        pose with his elbow on a table and his head cradled in his hand. It is currently
        held in Zürich, Switzerland. The other three portraits, of different poses, are
        in museums in the US`} authorImg={boyAuthor} year="1889" galleryImg={galleryImg} prevUrl="the-basket-of-apples" nextUrl="arnolfini-portrait" source="https://en.wikipedia.org/wiki/The_Boy_in_the_Red_Vest" currentItem={13}/>
    );
}

export default TheBoyInTheRedVest;
