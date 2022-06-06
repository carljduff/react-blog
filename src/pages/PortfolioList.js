import Portfolio from "./Portfolio";
import { projects } from "../data";

const PortfolioList = () => {
    return(
    <div className="p1">
            <div className="p1-texts" id={'Portfolio'}>
                {/* <h1 className="p1-title">Create and Inspire.</h1> */}
                <p className="p1-desc">Portfolio</p>
            </div>

            <div className="p1-list">
            {projects.map((item) =>(
                <Portfolio key={item.id} img={item.img} link={item.link} desc={item.description} title={item.title}/>
            ))}
            
                 
            </div>
    </div>
    )
}

export default PortfolioList;