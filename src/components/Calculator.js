import style from './Calculator.modules.css'
import Display from './Display'
import ButtonList from './ButtonLIst'

function Calculator ({display, removeDiplay, hendelDisplay}) {

    return (
        <div className="list">
            <Display display={display} />
            <ButtonList removeDiplay= {removeDiplay} hendelDisplay={hendelDisplay}/>
        </div>
    )
}

export default Calculator