import Header from './header.js';
import Footer from './footer.js';
import { useEffect } from 'react';

const LeftContainer = (props) => {
    const onEnter = (e) => {
        let node = e.target;
        let button = node.querySelector("button");
        node.style.backgroundColor = "#9d9d9d";
        node.style.opacity = "0.8";
        button.style.backgroundColor = "#9d9d9d";
        button.style.opacity = "0.8";
    }

    const onLeave = (e) => {
        let node = e.target;
        let button = node.querySelector("button");
        node.style.backgroundColor = "black";
        node.style.opacity = "0.7";
        button.style.backgroundColor = "black";
        button.style.opacity = "0.7";
    }

    const onClickDisplay = (e) => {
        const image = document.querySelector(".galleryImg");
        image.classList.remove("noDisplay");
    }

    useEffect(() => {
        if(window.innerWidth >= 1110) {
            setTimeout(() => {
                let imgWidth = document.querySelector(".painting").width;
                let paintingDetails = document.querySelector(".paintingDetails");

                let marginLeft = imgWidth * 0.7 + "px";
                paintingDetails.style.left = "0";
                paintingDetails.style.marginLeft = marginLeft;
            }, 50);
        }
    });

    return (
        <section className="leftContainer">
            <div>
                <img className="painting" src={props.paintingUrl} alt="painting img"/>
                <div className="viewImage" onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={onClickDisplay}>
                    <button>
                        VIEW IMAGE
                    </button>
                </div>
            </div>
            <div className="paintingInfo">
                <div className="paintingDetails">
                    <div className="paintingName">{props.title}
                        <div className="paintingAuthor">{props.author}</div>
                    </div>
                </div>
                <div className="authorPicContainer">
                    <img className="authorPic" src={props.authorImg} alt="author pic"/>
                </div>
            </div>
        </section>
    );
}

const RightContainer = (props) => {
    return (
        <section className="rightContainer">
            <div className="descWrapper">
                <div className="year">{props.year}</div>
                <div className="paintingDesc">
                    {props.desc}
                </div>
            </div>
            <a className="goToSource" href={props.source}>GO TO SOURCE</a>
        </section>
    );
}

const DisplayGallery = (props) => {
    const onClickDisplayNone = (e) => {
        const text = e.target;
        const image = text.parentNode.parentNode;
        image.classList.add("noDisplay");
    }

    return(
        <div className="galleryImg noDisplay">
            <center>
                <span id="close" onClick={onClickDisplayNone}>CLOSE</span>
                <img src={props.galleryImg} alt="gallery painting"/>
            </center>
        </div>
    );
}

const PageTemplate = (props) => {
    return (
        <div className="pageContainer">
            <DisplayGallery galleryImg={props.galleryImg}/>
            <Header/>
            <hr/>
            <div className="pageWrapper">
                <LeftContainer paintingUrl={props.paintingUrl} title={props.title} author={props.author} authorImg={props.authorImg}/>
                <RightContainer desc={props.desc} year={props.year} source={props.source}/>
            </div>
            <Footer paintingName={props.title} author={props.author} nextUrl={`#/${props.nextUrl}`} prevUrl={`#/${props.prevUrl}`} currentItem={props.currentItem}/>
        </div>
    );
}

export default PageTemplate;
