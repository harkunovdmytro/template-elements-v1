import TemplateTree from "../../TamplateThree/TamplateThree"
import { ShowPageThreeData } from "../../../AppData"
import './ShowPageThree.scss'

const ShowPageOne = () => {
    return (
        <section className="show-page-tree-container" >
            <section className="show-page-tree container">
                <div className="inspiration">
                    Inspired by <a href="https://www.elegantthemes.com/layouts/business/saas-company-careers-page" target='_blank' rel="noreferrer">this</a>.
                </div>
                <div className="pre-card-text">
                    <h2>Teams & Open Positions</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
                    </p>
                </div>
                <div className="ShowPageThree-flex">
                    {ShowPageThreeData.map((data, index) => (<TemplateTree key={index} {...data} />))}
                </div>
            </section>
        </section>
    )
}

export default ShowPageOne
