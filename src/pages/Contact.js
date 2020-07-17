import React from 'react';

import '../styles/contact.css';

function Contact() {
    return (
        <main className="container">
            <div className="contact-content">
                <h1>Let's Work Together!</h1>
                <h2>Connect Socially Here</h2>
                <div>
                    <ul className="socialUL socialContact">
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
                <h3>Or, click the button below to connect with me by email.</h3>
                <button type="button">Yes, Let's Connect!</button>

            </div>
        </main>
    )
}

export default Contact;
