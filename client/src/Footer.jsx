import React from 'react'
import './footer.scss';

function Footer() {
    return (
        <div className = 'footer'>
            <div className = 'footer_section'>
                <div className = 'footer_links'>
                    <h4>Quick Links</h4>
                    <a href = './aboutus'>
                        <p>About Us</p>
                    </a>
                    <a href = './fitness'>
                        <p>Fitness</p>
                    </a>
                    <a href = './nutrition'>
                        <p>Nutrition</p>
                    </a>
                    <a href = './discussion'>
                        <p>Discussion</p>
                    </a>
                    <a href = './notes'>
                        <p>Notes</p>
                    </a>
                    <a href = './login'>
                        <p>Login</p>
                    </a>
                    <a href = './register'>
                        <p>Sign Up</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;