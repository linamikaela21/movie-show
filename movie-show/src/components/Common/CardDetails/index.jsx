import { useEffect } from 'react';
import { useState } from 'react';
import './../../../styles/CardDetails.scss'

export const CardDetails = (props) => {
    const [genders, setGenders] = useState([])

    useEffect(() => setGenders(props?.genres + ` `), [props])

    const funcDescription = () => { return { __html: props?.summary } }

    return (
        (props.image === null || typeof props.image === 'undefined')
            ? <div className='columnDetailsContent'>
                <div><h1 className='cardTitle'>{props?.name}</h1></div>
                <div className='rowDetailsContent' style={{ height: '60%', width: '100%' }}>
                    <div className='columnContent' style={{ height: '22rem', width: '21rem', backgroundColor: '#2f2b91' }}>
                        <h3 className='cardText'>Genders: {genders}</h3>
                        <h3 className='cardText'>Languaje: {props?.language}</h3>
                        <h3 className='cardText' dangerouslySetInnerHTML={funcDescription()}></h3>
                    </div>
                    <div className='columnContent' style={{ display: 'flex', justifyContent: 'center', height: '22rem', width: '21rem', backgroundColor: '#2f2b91' }}>
                        <img className='iframe' src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6UXBlhOpVhgTj8_UFYtD2blL9FeMkQUoIA&usqp=CAU`} alt={props?.name} width='300rem' height='300rem' />
                    </div>
                </div>
            </div>
            :
            <div className='columnDetailsContent'>
                <div><h1 className='cardTitle'>{props?.name}</h1></div>
                <div className='rowDetailsContent' style={{ height: '60%', width: '100%' }}>
                    <div className='columnContent' style={{ height: '22rem', width: '21rem', backgroundColor: '#2f2b91' }}>
                        <h3 className='cardText'>Genders: {genders}</h3>
                        <h3 className='cardText'>Languaje: {props?.language}</h3>
                        <h3 className='cardText' dangerouslySetInnerHTML={funcDescription()}></h3>
                    </div>
                    <div className='columnContent' style={{ display: 'flex', justifyContent: 'center', height: '22rem', width: '21rem', backgroundColor: '#2f2b91' }}>
                        <img className='iframe' src={props?.image.original} alt={props?.name} width='300rem' height='300rem' />
                    </div>
                </div>
            </div>
    )

}