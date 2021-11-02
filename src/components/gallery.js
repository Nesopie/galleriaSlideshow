import starryNight from "../assets/starry-night/thumbnail.jpg";
import girlWithPearlEarring from "../assets/girl-with-pearl-earring/thumbnail.jpg";
import guernica from "../assets/guernica/thumbnail.jpg";
import penitentMagdalene from "../assets/penitent-magdalene/thumbnail.jpg";
import theStormOnTheSeaOfGalielee from "../assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg";
import theGreatWaveOffKanegawa from "../assets/the-great-wave-off-kanagawa/thumbnail.jpg";
import vanGoghSelfPortrait from "../assets/van-gogh-self-portrait/thumbnail.jpg";
import theSleepingGypsy from "../assets/the-sleeping-gypsy/thumbnail.jpg";
import ladyWithAnErmine from "../assets/lady-with-an-ermine/thumbnail.jpg";
import theNightCafe from "../assets/the-night-cafe/thumbnail.jpg";
import monaLisa from "../assets/mona-lisa/thumbnail.jpg";
import theBasketOfApples from "../assets/the-basket-of-apples/thumbnail.jpg";
import theBoyInTheRedVest from "../assets/the-boy-in-the-red-vest/thumbnail.jpg";
import arnolfiniPortrait from "../assets/arnolfini-portrait/thumbnail.jpg";
import theSwing from "../assets/the-swing/thumbnail.jpg";

const GalleryItem = (props) => {
    return (
        <div className="galleryItem">
            <a className="imageAnchor"href={`${props.redirectUrl}`}>
                <img className="galleryItemImg" src={props.imgUrl} alt={props.title}/>
                <div className="itemDetails">
                    <div className="itemTitle">{props.title}</div>
                    <div className="itemAuthor">{props.author}</div>
                </div>
            </a>
        </div>
    );
}

const Gallery = (props) => {
    return (
        <div className="gallery">
            <div className="galleryColumn">
                <GalleryItem imgUrl={starryNight} title="Starry Night" author="Vincent Van Gogh" redirectUrl="#/starry-night"/>
                <GalleryItem imgUrl={theStormOnTheSeaOfGalielee} title="The Storm on the Sea of Galiliee" author="Rembrandt" redirectUrl="#/the-storm-on-the-sea-of-galilee"/>
                <GalleryItem imgUrl={ladyWithAnErmine} title="Lady with an Ermine" author="Leonardo da Vinci" redirectUrl="#/the-lady-with-an-ermine"/>
                <GalleryItem imgUrl={theBoyInTheRedVest} title="The Boy in the Red Vest" author="Edward Hopper" redirectUrl="#/the-boy-in-the-red-vest"/>
            </div>
            <div className="galleryColumn">
                <GalleryItem imgUrl={girlWithPearlEarring} title="Girl with a Pearl Earring" author="Johannes Vermeer" redirectUrl="#/girl-with-a-pearl-earring"/>
                <GalleryItem imgUrl={theGreatWaveOffKanegawa} title="The Great Wave off Kanagawa" author="Hokusai" redirectUrl="#/the-great-wave-off-kanagawa"/>
                <GalleryItem imgUrl={theNightCafe} title="The Night café" author="Vincent van Gogh" redirectUrl="#/the-night-cafe"/>
                <GalleryItem imgUrl={arnolfiniPortrait} title="Arnolfini Portrait" author="Jan van Eyck" redirectUrl="#/arnolfini-portrait"/>
            </div>
            <div className="galleryColumn">
                <GalleryItem imgUrl={guernica} title="Guernica" author="Pablo Picasso" redirectUrl="#/guernica"/>
                <GalleryItem imgUrl={vanGoghSelfPortrait} title="Van Gogh self-portrait" author="Vincent Van Gogh" redirectUrl="#/van-gogh-self-portrait"/>
                <GalleryItem imgUrl={monaLisa} title="Mona Lisa" author="Leonardo da Vinci" redirectUrl="#/mona-lisa"/>
            </div>
            <div className="galleryColumn last">
                <GalleryItem imgUrl={penitentMagdalene} title="Penitent Magdalene" author="Artemisia Gentileschi" redirectUrl="#/penitent-magdalene"/>
                <GalleryItem imgUrl={theSleepingGypsy} title="The Sleeping Gypsy" author="Henri Rousseau" redirectUrl="#/the-sleeping-gypsy"/>
                <GalleryItem imgUrl={theBasketOfApples} title="The Basket of Apples" author="Paul Cézanne" redirectUrl="#/the-basket-of-apples"/>
                <GalleryItem imgUrl={theSwing} title="The Swing" author="Jean-Honoré Fragonard" redirectUrl="#/the-swing"/>
            </div>
        </div>
    )
}

export default Gallery;
