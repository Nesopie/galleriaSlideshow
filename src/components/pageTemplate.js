import Header from './header.js';

const LeftContainer = (props) => {
    return (
        <section>
            <div>
                <img class="painting" src={props.paintingUrl} alt="painting img"/>
            </div>
            <div>
                <div className="paintingInfo">
                    <div className="paintingDetails">
                        <div className="paintingName">{props.title}</div>
                        <div className="paintingAuthor">{props.author}</div>
                    </div>
                    <div className="authorPicContainer">
                        <img className="authorPic" src={props.authorImg} alt="author pic"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

const RightContainer = (props) => {
    return (
        <section>
            <div className="descWrapper">
                <div className="year">{props.year}</div>
                <div className="paintingDesc">
                    {props.desc}
                </div>
            </div>
            <a href="/">GO TO SOURCE</a>
        </section>
    );
}

const PageTemplate = (props) => {
    return (
        <div class="pageContainer">
            <Header/>
            <hr/>
            <div className="pageWrapper">
                <LeftContainer paintingUrl={props.paintingUrl} title={props.title} author={props.author} authorImg={props.authorImg}/>
                <RightContainer desc={props.desc} year={props.year}/>
            </div>
        </div>
    );
}

export default PageTemplate;
