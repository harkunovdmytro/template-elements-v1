import TemplateTwo from "../../TemplateTwo/TemplateTwo"
import { ShowPageTwoData } from "../../../AppData"


const ShowPageOne = () => {
    return (
        <section className="show-page-one-container" >
            <section className="show-page-one container">
                <div className="inspiration">
                    Inspired by <a href="https://www.elegantthemes.com/layouts/art-design/architecture-firm-portfolio-page/live-demo" target='_blank' rel="noreferrer">this</a>.
                </div>
                <div>
                    {ShowPageTwoData.map((data, index) => (<TemplateTwo key={index} {...data} />))}
                </div>
            </section>
        </section>
    )
}

export default ShowPageOne
