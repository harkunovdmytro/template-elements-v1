import TemplateFour from "../../TemplateFour/TemplateFour"
import { ShowPageFourData } from "../../../AppData"
import './ShowPageFour.scss'

const ShowPageFour = () => {
    return (
        <section className="show-page-four-container" >
            <section className="show-page-four container">
                <div className="inspiration">
                    Inspired by <a href="https://www.elegantthemes.com/layouts/art-design/interior-design-company-portfolio-page/live-demo#top" target='_blank' rel="noreferrer">this</a>.
                </div>
                <div className="page-text">
                    <h2>
                        Case Studies
                    </h2>
                    <p>
                        Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est.
                    </p>
                </div>
                <div className="ShowPageFour-flex">
                    {ShowPageFourData.map((data, index) => (<TemplateFour key={index} {...data} />))}
                </div>
            </section>
        </section>
    )
}

export default ShowPageFour
