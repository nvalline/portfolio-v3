import React from 'react';
import moment from 'moment';

import FooterLinks from './FooterLinks';

function Footer() {
    const currentYear = moment().format("YYYY");

    return (
        <footer>
            <div className="footerDiv">
                <h2>Providing All Of Your Web Design Needs</h2>
                <FooterLinks />
                <p>copyright &copy; {currentYear} | Nate Valline</p>
            </div>
        </footer>
    )
}

export default Footer;
