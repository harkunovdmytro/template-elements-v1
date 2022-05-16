import './TamplateThree.scss'
import { useState } from 'react'

const ListItem = ({ itemHeader, itemDescription, itemLink, itemLinkText }) => {
    const [show, setShow] = useState(true)

    return (
        <div className='list-item-container'>
            <div className={show ? 'list-item active' : 'list-item'}>
                <h5 className='header'
                    onClick={() => setShow(!show)}
                >{itemHeader}</h5>
                <div className='description'>
                    <p>{itemDescription}</p>
                    <p>
                        <a className='link' href={itemLink}>{itemLinkText}</a>
                    </p>
                </div>

            </div>
        </div>
    )
}

const TemplateTree = ({ header, text, imgLink, list }) => {
    return (
        <div className="TemplateTree-container">
            <div className="TemplateTree container">
                <div className='img-wrapper'>
                    <img src={imgLink} alt="" width='280' height='150' />
                </div>
                <div className="card-text">
                    <h3>
                        {header}
                    </h3>
                    <p>{text}</p>
                </div>
                <div className='card-list'>
                    {list.map((item, index) => (
                        <ListItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TemplateTree