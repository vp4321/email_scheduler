import { React } from 'react'
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';




const Home = ({ user }) => {



    return (
        <>
            <section className="Home mt-3">
                <div className="container-fluid">
                    <div className="row bg-transparent  vh-100 align-content-center align-items-center">
                        <div className="col-md-6 ">
                            <div className="content  py-3">
                                <div className="text-left px-5">
                                    <Zoom>
                                        <h4 className="  text-dark justify-content-lg-start  fst-italic">-Welcome to</h4>
                                        <h2 className=" fst-italic">Email Scheduling Application</h2>
                                        <h5 className="text-muted">An online application where you can schedule your E-mails </h5>
                                    </Zoom>
                                </div>

                                {
                                    user ? <Link to="/mail" className="btn btn-warning m-5 p-3" style={{ width: "110px" }}>Send Mail</Link> : null

                                }

                            </div>
                        </div>
                        <div className="col-md-6 order-first-md">
                            <img style={{ width: "100%" }} src="/images/bg.jpg" alt="img"></img>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home
