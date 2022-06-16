import me from "../components/images/jordand.png"

const Intro = () => {
    return(
        <div className="i" id={'Home'}>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h1 className="i-intro">Hi, my name is</h1>
                <h2 className="i-name">Jordan Duff</h2>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">QA Specialist</div>
                        <div className="i-title-item">Full Stack Web Developer</div>
                        <div className="i-title-item">Life-time Learner</div>
                        <div className="i-title-item">Pianist</div>
                    </div>
                </div>
                <p className="i-desc">
              
                </p>

            </div>
            </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={me} alt="" className="i-img" />

        </div>
        </div>

    )
}

export default Intro