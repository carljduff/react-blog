import Portfolio from "./Portfolio";
import { projects } from "../data";

const PortfolioList = () => {
    return(
    <div className="p1">
            <div className="p1-texts">
                {/* <h1 className="p1-title">Create and Inspire.</h1> */}
                <p className="p1-desc">This is a collection of projects done during 
                the bootcamp.</p>
            </div>

            <div className="p1-list">
            {projects.map((item) =>(
                <Portfolio key={item.id} img={item.img} link={item.link}/>
            ))}
            
                 
            </div>
    </div>
    )
}

export default PortfolioList;