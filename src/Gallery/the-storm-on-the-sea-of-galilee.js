import PageTemplate from '../components/pageTemplate.js';
import smallSeaStorm from '../assets/the-storm-on-the-sea-of-galilee/hero-small.jpg';
import largeSeaStorm from '../assets/the-storm-on-the-sea-of-galilee/hero-large.jpg';
import seaStormAuthor from '../assets/the-storm-on-the-sea-of-galilee/artist.jpg';

const TheStormOnTheSeaOfGalilee = () => {
    return (
        <PageTemplate paintingUrl={window.innerWidth >= 768 ? largeSeaStorm : smallSeaStorm} title="The Storm on the Sea of Galiliee" author="Rembrandt" desc={`The painting, in vertical format, shows a close-up view of Christ's disciples
        struggling frantically against the heavy storm to regain control of their fishing
        boat. A huge wave beats the bow and rips the sail. One of the disciples is seen
        vomiting over the side. Another one, looking directly out at the viewer, is a
        self-portrait of the artist. Only Christ, depicted on the right, remains calm.`} authorImg={seaStormAuthor} year="1633"/>
    );
}

export default TheStormOnTheSeaOfGalilee;
