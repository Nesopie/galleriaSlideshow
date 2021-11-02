import prev from '../assets/shared/icon-back-button.svg';
import next from '../assets/shared/icon-next-button.svg';

const Footer = (props) => {
    const prevDisabled = props.paintingName === "Starry Night" ? true : false;
    const nextDisabled = props.paintingName === "The Swing" ? true : false;

    return(
        <footer>
            <div className="authorDetails">
                <div className="footerPaintingName">{props.paintingName}</div>
                <div className="footerAuthor">{props.author}</div>
            </div>
            <div className="btns">
                <a className={`${prevDisabled ? "disabled" : "enabled"}`} href={props.prevUrl} disabled={`${prevDisabled ? "disabled" : "enabled"}`}>
                    <img src={prev} alt="go to previous page"/>
                </a>
                <a className={`${nextDisabled ? "disabled" : "enabled"}`} href={props.nextUrl} disabled={`${nextDisabled ? "disabled" : "enabled"}`}>
                    <img src={next} alt="go to next page"/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
