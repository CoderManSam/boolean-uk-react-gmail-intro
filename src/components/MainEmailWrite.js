import '../styles/MainEmailWrite.css'

import backArrow from '../assets/icons/back-arrow.png'

function MainEmailWrite () {

    return (

        <section className="email-write">
            <div className="email-write-to">
                <img className="icon" src={backArrow} alt="reply button" />
                <p className="text">Freepik Company (no-reply@freepik.com)</p>
            </div>
            <div className="email-write-send">
                <button className="button">Send</button>
            </div>
        </section>
    )
}

export default MainEmailWrite