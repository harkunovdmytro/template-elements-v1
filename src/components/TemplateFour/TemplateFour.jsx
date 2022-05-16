import './TemplateFour.scss'
import Button from './Button'

const TemplateFour = ({ isImgLeft, header, text, imgLink, btnLink }) => {
    return (
        <div className='template-four-container'>
            <div className='template-four container'
            style={{flexFlow: isImgLeft?'row':'row-reverse' }}
            >
                <div className='img-container'>
                    <img src={imgLink} alt="" />
                </div>
                <div className='text-container'>
                    <div>
                        <h3 className='header'>{header}</h3>
                        <p className='text'>{text}</p>
                    </div>
                    <div>
                        <Button {...btnLink}>ss</Button>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default TemplateFour
