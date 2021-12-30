import { useEffect } from 'react';
import { useState } from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import './../../../styles/CardDetails.scss'

export const CardDetails = (props) => {
    const [genders, setGenders] = useState([])

    useEffect(() => setGenders(props?.genres + ` `), [props])

    const funcDescription = () => { return { __html: props?.summary } }

    return (
        (props.image === null || typeof props.image === 'undefined')
            ? <div className='rowDetailsContent' style={{ height: '70%', width: '80%' }}>
                <div className='columnContent' style={{ height: '100%', width: '45rem' }}>
                    <h1 className='cardTitle'>{props?.name}</h1>
                    <h3 className='cardText'>{genders}</h3>
                    <h3 className='cardText'>{props?.language}</h3>
                    <h3 className='cardText' dangerouslySetInnerHTML={funcDescription()}></h3>
                    {(typeof props.rating === 'undefined' || props.rating.average === null) ? null : <h1 className='cardText'><BsFillStarFill size={30} style={{ paddingRight: '0.5rem' }} />{props?.rating.average}</h1>}
                </div>
                <div className='columnContent' style={{ display: 'flex', justifyContent: 'center', height: '30rem', width: '25rem' }}>
                    <img className='iframe' src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6UXBlhOpVhgTj8_UFYtD2blL9FeMkQUoIA&usqp=CAU`} alt={props?.name} width='300rem' height='450rem' />
                </div>
            </div>
            :
            <div className='rowDetailsContent' style={{ height: '70%', width: '80%' }}>
                <div className='columnContent' style={{ height: '100%', width: '45rem' }}>
                    <h1 className='cardTitle'>{props?.name}</h1>
                    <h3 className='cardText'>{genders}</h3>
                    <h3 className='cardText'>{props?.language}</h3>
                    <h3 className='cardText' dangerouslySetInnerHTML={funcDescription()}></h3>
                    {(typeof props.rating === 'undefined' || props.rating.average === null) ? null : <h1 className='cardText'><BsFillStarFill size={30} style={{ paddingRight: '0.5rem' }} />{props?.rating.average}</h1>}
                </div>
                <div className='columnContent' style={{ display: 'flex', justifyContent: 'center', height: '30rem', width: '25rem' }}>
                    <img className='iframe' src={props?.image.original} alt={props?.name} width='300rem' height='450rem' />
                </div>
            </div>
    )

}