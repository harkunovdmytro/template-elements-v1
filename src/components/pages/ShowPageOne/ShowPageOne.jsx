import TemplateOne from "../../TemplateOne/TemplateOne"
import { ShowPageOneData } from "../../../AppData"
const ShowPageOne = () => {
    return (
        <section className="show-page-one-container">
            <section className="show-page-one container">
                <div className="inspiration">
                    Inspired by <a href="https://www.elegantthemes.com/layouts/art-design/fashion-landing-page" target='_blank' rel="noreferrer">this</a>.
                </div>
                <div>
                    {ShowPageOneData.map(data => (<TemplateOne key={data.header} {...data} />))}
                </div>
            </section>
        </section>
    )
}

export default ShowPageOne
