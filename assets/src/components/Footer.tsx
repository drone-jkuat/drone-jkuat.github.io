import React from 'react'
 
const Footer = () => {
    return (
    <footer className="footer">
    <div className="container">
        <div className="columns">
            <div className="column is-4">
                <h2><strong>DRG</strong></h2>
                <ul>
                    <li>is a drone research group at Jomo Kenyatta University of Agriculture and Technology (JKUAT).</li>
                </ul>
            </div>
            <div className="column is-4">
                <h2><strong>Contact</strong></h2>
                <ul>
                    <li>Email: drg@jkuat.ac.ke</li>
                </ul>
            </div>
            <div className="column is-4">
                <h2><strong>Links</strong></h2>
                <ul>
                    <li><a href="http://www.jkuat.ac.ke">Jomo Kenyatta University of Agriculture and Technology (JKUAT)</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
    )
}
 
export default Footer