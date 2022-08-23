import { useState } from 'react';
import style from './navbar.module.css';

function NavBar() {
    const [visible, setVisibility] = useState(false);

    const clickHandler = () => {
        setVisibility(!visible);
    };

    return(
        <>  
        <div className={style.buttonContainer}>
            <button onClick={clickHandler}><img src={require('../../media/icons/menu.png')} alt='menu'/></button>
        </div>
        <nav className={`${style.linkContainer} ${visible ? style.flex : style.hidden}`}>
            <a href="#home" onClick={clickHandler}>Home</a>
            <a href="#about" onClick={clickHandler}>About</a>
            <a href="#skills" onClick={clickHandler}>Skills</a>
            <a href="#projects" onClick={clickHandler}>Projects</a>                
        </nav>
        </>

    )
}

export default NavBar