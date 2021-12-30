import './../../../styles/BigCard.scss'
import './../../../styles/Commun/index.scss'

import { Link } from 'react-router-dom'

export const BigCard = (props) => {
    return (
        (props.image === null || typeof props.image === 'undefined') ?
            (
                <div className='bigCardContent'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6UXBlhOpVhgTj8_UFYtD2blL9FeMkQUoIA&usqp=CAU' alt='No found' className='iframe' height={props.height} width={props.width} />
                    <div className="middle">
                        <div>
                            <h2 className='bigCardText' style={{ fontSize: `${props.fontSize}` }}>{props.title}</h2>
                            <h2>{props.language}</h2>
                        </div>
                        <div className='container'>
                            <Link to={`/${props.link}`}>
                                <button className='button'>{props.buttonText}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
            :
            (
                <div className='bigCardContent'>
                    <img src={props.image?.medium} alt='No found' className='iframe' height={props.height} width={props.width} />
                    <div className="middle">
                        <div>
                            <h2 className='bigCardText' style={{ fontSize: `${props.fontSize}` }}>{props.title}</h2>
                            <h2 className='bigCardText'>{props.language}</h2>
                        </div>
                        <div className='container'>
                            <Link to={`/${props.link}`}>
                                <button className='button'>{props.buttonText}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
    )
}
