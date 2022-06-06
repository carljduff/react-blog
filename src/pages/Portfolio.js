
const Portfolio = ({img, link, desc, title}) => {
    return (
       
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