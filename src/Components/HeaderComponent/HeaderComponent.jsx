import { Link } from 'react-router-dom'
import "./headercomponent.css"

const HeaderComponent = () => {
    return (
        <header className='header'>
            <h1 className='rock'>Buy And Rock!</h1>
            <div className='headDiv'>
            <Link to="/"><p>HOME</p></Link>
            <p>COURSES </p>
            <p>ABOUT<link href='https://unpkg.com/css.gg@2.0.0/icons/css/arrow-down.css' rel='stylesheet'></link>
            <div class="gg-arrow-down"></div> </p>
            <p>TEAM </p>
            <p>BLOG </p>
            <p>CONTACT </p>
            </div>
            <div className='search'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M15.75 15.75L12.3855 12.3795M14.25 7.875C14.25 9.56576 13.5784 11.1873 12.3828 12.3828C11.1873 13.5784 9.56576 14.25 7.875 14.25C6.18424 14.25 4.56274 13.5784 3.36719 12.3828C2.17165 11.1873 1.5 9.56576 1.5 7.875C1.5 6.18424 2.17165 4.56274 3.36719 3.36719C4.56274 2.17165 6.18424 1.5 7.875 1.5C9.56576 1.5 11.1873 2.17165 12.3828 3.36719C13.5784 4.56274 14.25 6.18424 14.25 7.875Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg></div>
        </header>
    )
}

export default HeaderComponent