import me from "../components/images/jordand.png"

const About = () => {
    return(
        <div className="about" id={'About'}>
            <div className="about-left"> 
            
                <div className="about-card bg"></div>
                    
                    <div className="about-card">
                    <img src='https://images.unsplash.com/photo-1565879629766-30adf38aac56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' className="about-img"/>
                   {/* <img className="me" src={me}/> */}
                    </div>
            
            </div>


            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">Awesome Inc. Full-Stack Web Developer Bootcamp Graduate.</p>
                <p className="about-desc"> All of my life I've been deeply involved with computers and while growing up, I watched my father build many of them. 
                I can still remember our first computer with MS-DOS. There was a concentration memory card game that I was fascinated with and this is the first 
                memory I have that started my passion for technology that I carried with me throughout the years. At 16, I started working in a restaurant and 
                fell into the loop of being comfortable. I have more than fifteen years of experience in Hospitality, Food and Beverage Service and Guest 
                Relations with five years in Restaurant Management. At the end of 2021, I decided to pursue a passion that hasn't left since I've been 
                a child, step outside of my comfort zone and leave everything I've ever known. This leap of faith led me to Awesome Inc. Bootcamp to 
                study Full Stack Development. While attending Awesome Inc, the technologies studied were HTML, CSS, JavaScript, Python, SQL, React and Django.</p>
                
            </div>
        </div>
    )
}

export default About;
            