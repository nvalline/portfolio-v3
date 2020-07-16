import React from 'react';
import moment from 'moment';

function Footer() {
    const currentYear = moment().format("YYYY");

    return (
        <footer>
            <div className="footerDiv">
                <h3>Providing All Of Your Web Design Needs</h3>
                <p>copyright &copy; {currentYear} | Nate Valline</p>
            </div>
        </footer>
    )
}

export default Footer;
