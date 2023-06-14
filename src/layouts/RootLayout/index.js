import { Outlet } from 'react-router-dom';
import './index.css';
import { AiOutlineUser, AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai';
import { CgMenuRight } from 'react-icons/cg';

const RootLayout = () => {
    return (
        <div className="root-layout">
            <nav className="navbar">
                <div className="logo">LOGO</div>
                <div className="test">
                    <AiOutlineSearch className='search'/>
                    <div className="login">
                        <AiOutlineUser className='user' />
                        <p>Log In</p>
                    </div>
                    <div className="cart">
                        <AiOutlineShopping className='cart-icon' />
                    </div>
                    <CgMenuRight className='menu' />
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
 
export default RootLayout;
