import sun from '../components/images/sun.png'
import moon from '../components/images/moon.png'
const toggle = () => {
    return(
        <div className='t'>
            <img src={sun} alt="" className='t-icon'/>
            <img src={moon} alt="" className='t-icon'/>
            <div className='t-button'></div>
        </div>
    )
}

export default toggle;