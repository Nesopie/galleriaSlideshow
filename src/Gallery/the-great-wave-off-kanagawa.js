import PageTemplate from '../components/pageTemplate.js';
import smallWave from '../assets/the-great-wave-off-kanagawa/hero-small.jpg';
import largeWave from '../assets/the-great-wave-off-kanagawa/hero-large.jpg';
import smallWaveAuthor from '../assets/the-great-wave-off-kanagawa/artist.jpg';

const TheGreatWaveOffKanagawa = () => {
    return(
        <PageTemplate paintingUrl={window.innerWidth >= 768 ? largeWave : smallWave} title="The Great Wave Off Kanagawa" author="Hokusai" desc={`The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami
        Ura, lit. "Under the Wave off Kanagawa"), also known as The Great Wave or simply
        The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was
        published sometime between 1829 and 1833 in the late Edo period as the first
        print in Hokusai's series Thirty-six Views of Mount Fuji. The image depicts an
        enormous wave threatening three boats off the coast in the Sagami Bay (Kanagawa
        Prefecture) while Mount Fuji rises in the background.`} authorImg={smallWaveAuthor} year="1831"/>
    );
}

export default TheGreatWaveOffKanagawa;
