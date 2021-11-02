import PageTemplate from '../components/pageTemplate.js';
import smallGirlEarring from '../assets/girl-with-pearl-earring/hero-small.jpg';
import largeGirlEarring from '../assets/girl-with-pearl-earring/hero-large.jpg';
import girlEarringAuthor from '../assets/girl-with-pearl-earring/artist.jpg';

const GirlWithPearlEarring = () => {
    return (
        <PageTemplate paintingUrl={window.innerWidth >= 768 ? largeGirlEarring : smallGirlEarring} title="Girl With a Pearl Earring" author="Johannes Vermmer" desc={`The painting is a tronie, the Dutch 17th-century description of a 'head' that was
            not meant to be a portrait. It depicts a European girl wearing an exotic dress,
            an oriental turban, and what was thought to be a very large pearl as an earring.
            In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the
        earring and argued that it looks more like polished tin than pearl on the grounds`} authorImg={girlEarringAuthor} year="1665"/>
    );
}

export default GirlWithPearlEarring;
