import './TemplateTwo.scss'
import Button from './Button'

const TemplateTwo = ({ header, client, category, imgLink, btnLink }) => {
    return (
        <div className='template-two-container' style={{ backgroundImage: getBgImageGrad(imgLink) }}>
            <div className='template-two'>
                <div className="text-container">
                    <p className='category'>{category}</p>
                    <h3 className='header'>{header}</h3>
                    <p className='client'>Client: {client}</p>
                </div>
                <Button {...btnLink}/>
            </div>
        </div >
    )
}
const getBgImageGrad = (url) => `linear-gradient(180deg,rgba(18,18,18,0.6) 0%,rgba(18,18,18,0.9) 100%),url(${url})`

export default TemplateTwo
