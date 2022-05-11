import './TemplateOne.scss'
import Button from './Button'

const BG = ['red', 'purple', 'pink']
const getImgBg = (bgStyle) => BG.includes(bgStyle) ? bgStyle : BG[0]

const TemplateOne = ({ header, text, isImageLeft, imgLink, imgAlt, bgStyle, btn }) => {
    return (
        <div className='template-one-container'>
            <div className='template-one' style={{ flexFlow: isImageLeft ? 'row' : 'row-reverse' }}>
                <div className="img-container">
                    <div className={`img-bg ${getImgBg(bgStyle)}`}>
                        <img className='img' src={imgLink} alt={imgAlt} />
                    </div>
                </div>
                <div className="text-container">
                    <h3 className='header'>{header}</h3>
                    <p className='text'>{text}</p>
                    <Button {...btn}></Button>
                </div>

            </div>
        </div >
    )
}

export default TemplateOne
{/* <Button btnLink={btnLink} btnColor='btn--pink'>hellooooo</Button>
            <Button btnLink={btnLink} btnColor='btn--yellow'>hellooooo</Button> */}