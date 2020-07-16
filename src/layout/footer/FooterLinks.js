import React from 'react';

function FooterLinks() {
    return (
        <div>
            <ul className="socialUL">
                <li>
                    <a href="https://www.linkedin.com/in/nvalline/">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/nvalline">
                        <i class="fab fa-github-square"></i>
                    </a>
                </li>
                <li>
                    <a href="mailto: nate@natevalline.com">
                        <i class="fas fa-envelope-square"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default FooterLinks;
