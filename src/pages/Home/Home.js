import './Home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function Home() {
    return (
        <div>
            <Header/>
            <div>
                <h1>Bem-Vindo a Escola Borcelle</h1>
            </div>
            <div>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <Footer/>
        </div>
    )
}

export default Home