import { NavItem } from "react-bootstrap";

const Portfolio = ({img, link, desc, title}) => {
    return (
        // <div className="p" id={'Portfolio'}>
        //     <div className="p-browser">

        //    <div className="p-circle"></div>
        //    <div className="p-circle"></div>
        //    <div className="p-circle"></div>
        //     </div>
        //     <a href={link} target="_blank" rel="noreferrer">
        //         <img src={img} alt="" className="p-img"/>
        //     </a>
        // </div>
        <div className="wrapper">
           <h4>{title}</h4>
        <div className="port-card">
          
            <img src={img} alt="" className="port-img"/>
        </div>
        <div className="description">
            {desc}
        </div>
           <button className="link"><a href={link}>View</a></button> 
        </div>
    )
}

export default Portfolio;