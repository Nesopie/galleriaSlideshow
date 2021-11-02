import PageTemplate from '../components/pageTemplate.js';
import smallLadyErmine from '../assets/lady-with-an-ermine/hero-small.jpg';
import largeLadyErmine from '../assets/lady-with-an-ermine/hero-large.jpg';
import ladyErmineAuthor from '../assets/lady-with-an-ermine/artist.jpg';

const TheLadyWithAnErmine = () => {
    return (
        <PageTemplate paintingUrl={window.innerWidth >= 768 ? largeLadyErmine: smallLadyErmine} title="Lady With an Ermine" author="Leonardo da Vinci" desc={`The Lady with an Ermine (Italian: Dama con l'ermellino [ˈdaːma kon lermelˈliːno];
        Polish: Dama z gronostajem) is a portrait painting widely attributed to the
        Italian Renaissance artist Leonardo da Vinci. Dated to c. 1489–1491, the work is
        painted in oils on a panel of walnut wood. Its subject is Cecilia Gallerani, a
        mistress of Ludovico Sforza ("Il Moro"), Duke of Milan; Leonardo was painter to
        the Sforza court at the time of its execution. It is one of only four surviving
        portraits of women painted by Leonardo, the others being Ginevra de' Benci, La
        Belle Ferronnière and the Mona Lisa.`} authorImg={ladyErmineAuthor} year="1489"/>
    );
}

export default TheLadyWithAnErmine;
