import me from "../components/images/jordand.png"

const About = () => {
    return(
        <div className="about" id={'About'}>
            <div className="about-left"> 
            
                {/* <div className="about-card bg"></div> */}
                    
                    <div className="about-card">
                    {/* <img src='https://images.unsplash.com/photo-1565879629766-30adf38aac56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' className="about-img"/> */}
                   <img className="me" src={me}/>
                    </div>
            
            </div>


            <div className="about-right">
                <h1 className="a-title">About Me</h1>
                <p className="about-sub">I'm currently a student training to become a Full-Stack Web Developer.</p>
                <p className="about-desc"> I have lived in Lexington, KY for the past four years.
            I have an extensive background in Restaurant Management and my ultimate goal is to work on or help create the next Restaurant system.
            I am passionate about understanding the ins and outs of Developing and consider myself a 'forever student'! I love taking the things 
            I learn about and seeing how they work in my life and the choices I make in my day to day. I am looking forward to my future and cannot
            wait to travel on the path ahead!</p>
                
            </div>
        </div>
    )
}

export default About;
            