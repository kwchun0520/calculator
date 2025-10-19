import { useState } from 'react'
import '../styles/Calculator.css'

function Display() {
    const [value, setValue] = useState<string>("");

    

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        setValue(value + event.currentTarget.value);
        console.log(event.currentTarget.value);
        event.preventDefault();
    }
    function clear(event: React.MouseEvent<HTMLButtonElement>) {
        setValue('');
        event.preventDefault();
    }
    function backspace(event: React.MouseEvent<HTMLButtonElement>) {
        if (value) {
            setValue(value.slice(0, -1));
        }
        event.preventDefault();
    }

    function calculateResult(event: React.MouseEvent<HTMLButtonElement>) {
        try {
            setValue(eval(value).toString());
        } catch (error) {
            setValue('Error');
        }
        event.preventDefault();
    }
        

    return (
        <div className="calculator">
            <div className='display'>
                <input type="text" value={value} readOnly/>
            </div>
            <div className='keys'>
                <button onClick={handleClick} className="key" value="7">7</button>
                <button onClick={handleClick} className="key" value="8">8</button>
                <button onClick={handleClick} className="key" value="9">9</button>
                <button onClick={backspace} className="key" value="<">{'<'}</button>
                
                <button onClick={handleClick} className="key" value="4">4</button>
                <button onClick={handleClick} className="key" value="5">5</button>
                <button onClick={handleClick} className="key" value="6">6</button>
                <button onClick={handleClick} className="key" value="+">+</button>

                <button onClick={handleClick} className="key" value="1">1</button>
                <button onClick={handleClick} className="key" value="2">2</button>
                <button onClick={handleClick} className="key" value="3">3</button>
                <button onClick={handleClick} className="key" value="-">-</button>

                <button onClick={clear} className="key" value="C">C</button>
                <button onClick={handleClick} className="key" value="0">0</button>
                <button onClick={handleClick} className="key" value="/">/</button>
                <button onClick={handleClick} className="key" value="*">*</button>
                
                <button onClick={handleClick} className="key" value="(">(</button>
                <button onClick={handleClick} className="key" value=")">)</button>
                <button onClick={handleClick} className="key" value=".">.</button>
                <button onClick={calculateResult} className="key equal" value="=">=</button>

            </div>
        </div>
    )

}


export default Display;