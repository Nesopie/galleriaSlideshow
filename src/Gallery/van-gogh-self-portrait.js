import PageTemplate from '../components/pageTemplate.js';
import smallSelfPortrait from '../assets/van-gogh-self-portrait/hero-small.jpg';
import largeSelfPortrait from '../assets/van-gogh-self-portrait/hero-large.jpg';
import selfPortraitAuthor from '../assets/van-gogh-self-portrait/artist.jpg';
import galleryImg from '../assets/van-gogh-self-portrait/gallery.jpg'

const VanGoghSelfPortrait = () => {
    return (
        <PageTemplate paintingUrl={window.innerWidth >= 768 ?largeSelfPortrait : smallSelfPortrait} title="Van Gogh self-portrait" author="Vincent Van Gogh" desc={`This self-portrait was one of about 32 produced over a 10-year period, and these
        were an important part of his work as a painter; he painted himself because he
        often lacked the money to pay for models. He took the painting with him to
        Auvers-sur-Oise, near Paris, where he showed it to Dr. Paul Gachet, who thought
        it was "absolutely fanatical". Art historians are divided as to whether this
        painting or Self-portrait without beard is Van Gogh's final self-portrait. The
        art historians Ingo F. Walther and Jan Hulsker consider this to be the last.`} authorImg={selfPortraitAuthor} year="1889" galleryImg={galleryImg} prevUrl="the-great-wave-off-kanagawa" nextUrl="the-sleeping-gypsy" source="https://en.wikipedia.org/wiki/Van_Gogh_self-portrait_(1889)" currentItem={7}/>
    );
}

export default VanGoghSelfPortrait;
