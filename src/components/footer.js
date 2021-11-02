import prev from '../assets/shared/icon-back-button.svg';
import next from '../assets/shared/icon-next-button.svg';

const Footer = (props) => {
    return(
        <footer>
            <div className="authorDetails">
                <div className="footerPaintingName">{props.paintingName}</div>
                <div className="footerAuthor">{props.author}</div>
            </div>
            <div className="btns">
                <button><img src={prev} alt="go to previous page"/></button>
                <button><img src={next} alt="go to next page"/></button>
            </div>
        </footer>
    )
}

export default Footer;
