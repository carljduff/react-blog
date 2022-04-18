import { NavItem } from "react-bootstrap";

const Portfolio = ({img, link}) => {
    return (
        <div className="p" id={'Portfolio'}>
            <div className="p-browser">

           <div className="p-circle"></div>
           <div className="p-circle"></div>
           <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img"/>
            </a>
        </div>
    )
}

export default Portfolio;