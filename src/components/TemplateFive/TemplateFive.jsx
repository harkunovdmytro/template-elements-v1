import './TemplateFive.scss'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Button from './Button'

const TemplateFour = ({ isImgLeft, header, text, children, imgLink, btnLink }) => {
    return (
        <div className='template-four-container'>
            <div className='template-four container'
                style={{ flexFlow: isImgLeft ? 'row' : 'row-reverse' }}
            >
                <AiOutlineArrowRight />
                <AiOutlineArrowLeft />
                <Button></Button>
                template five
            </div >
        </div >
    )
}

export default TemplateFour
