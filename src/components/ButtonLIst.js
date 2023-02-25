import Button from "./Button"
import buttonArr from '../utilit/component.js'

function ButtonList ({removeDiplay, hendelDisplay}) {

    function btnlog (textBtn) {
       if (textBtn === 'AC') {
        removeDiplay()
       }else if (textBtn === '+/-') {
        hendelDisplay('+/-')
       }else if (textBtn === '%') {
        hendelDisplay('%')
       }else if (textBtn === '÷') {
        hendelDisplay('/')
       } else if (textBtn === '7') {
        hendelDisplay('7')
       } else if (textBtn === '8') {
        hendelDisplay('8')
       } else if (textBtn === '9') {
        hendelDisplay('9')
       } else if (textBtn === 'x') {
        hendelDisplay('x')
       } else if (textBtn === '4') {
        hendelDisplay('4')
       } else if (textBtn === '5') {
        hendelDisplay('5')
       } else if (textBtn === '6') {
        hendelDisplay('6')
       } else if (textBtn === '-') {
        hendelDisplay('-')
       } else if (textBtn === '1') {
        hendelDisplay('1')
       } else if (textBtn === '2') {
        hendelDisplay('2')
       } else if (textBtn === '3') {
        hendelDisplay('3')
       } else if (textBtn === '+') {
        hendelDisplay('+')
       } else if (textBtn === '0') {
        hendelDisplay('0')
       } else if (textBtn === ',') {
        hendelDisplay(',')
       } else if (textBtn === '=') {
        hendelDisplay('=')
        } 
       }

       return (
        <div className="button-list">
       {buttonArr.map((item) => {
        return <Button 
            key={item.id} 
            text={item.textBtn} 
            colorBtn={item.colorBtn} 
            width={item.width} 
            height={item.height} 
            borderRadius={item.borderRadius}
            onClick={() => btnlog(item.textBtn)}
            />
       })}
        </div>
     )
    }

export default ButtonList