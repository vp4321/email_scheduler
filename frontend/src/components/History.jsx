import SingleMail from './SingleMail'
import { useState, useEffect } from 'react'
import axios from "axios"
import ReactLoading from 'react-loading';

const History = () => {
    const LH = "https://powerful-oasis-11367.herokuapp.com/";
    const [arr, sentMails] = useState([]);
    const [load, setload] = useState(false)
    const noitem = 0;
    useEffect(() => {
        getdata()
    }, [arr])
    useEffect(() => {
        setTimeout(() => {
            setload(true)
        }, 3000)
    }, [])
    const getdata = () => {
        const user = localStorage.getItem('user');
        if (user!=="0") {
            const url2 = LH + "sent_mails/" + user;
            axios.get(url2).then((res) => {
                sentMails(res.data.mails)
            })
        }
    }
    return (
        <>

            <div className="row text-center px-5">

                {

                    (load) ? arr.map((item) =>

                        <SingleMail key={item._id} id={item._id} body={item.body} sub={item.subject} to={item.to} />

                    ) : <div className="col-md-6 col-lg-12 pb-4 top-50" ><div className="item align-items-center top-50 " style={{ marginLeft: "45%" }}><ReactLoading type={'spinningBubbles'} color="#FFC107" height={'20%'} width={'20%'} /></div></div>



                }
                {
                    (arr.length !==0 || !load) ? <h1> </h1> : <SingleMail body={noitem}></SingleMail>

                }
            </div>
        </>
    )
}

export default History