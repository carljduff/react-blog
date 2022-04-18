

const Intro = () => {
    return(
        <div className="i" id={'Home'}>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h1 className="i-intro">Hi, my name is</h1>
                <h2 className="i-name">Jordan Duff</h2>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Front End Web Developer</div>
                        <div className="i-title-item">Back End Web Developer</div>
                        <div className="i-title-item">Life-time Learner</div>
                        <div className="i-title-item">Piano Player</div>
                    </div>
                </div>
                <p className="i-desc">
                    This is some text that will later be filled in. This is some text that will later be filled in.
                    This is some text that will later be filled in. This is some text that will later be filled in.
                    This is some text that will later be filled in. This is some text that will later be filled in.
                    This is some text that will later be filled in. This is some text that will later be filled in.
                </p>

            </div>
            </div>
        <div className="i-right">
            <div className="i-bg"></div>
            {/* <img src={Me} className="i-img" /> */}

        </div>
        </div>

    )
}

export default Intro