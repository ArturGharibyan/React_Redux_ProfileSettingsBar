import { useSelector } from "react-redux"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { about } from "../store/data/action"

const Profile = () => {
    const info = useSelector(res => res.reducer)
    const [userInfo, setuserInfo] = useState({ first_name: "", surname: "", phone_number: "", address_line1: "", address_line2: "", postcode: "", state: "", area: "", email_ID: "", education: "", country: "", state_region: "" })
    const dispatch = useDispatch()
    
    

    return (
        <>
            <div>
                <div className="container text-secondary rounded bg-light mt-5 mb-5">
                    <div className="d-flex justify-content-around">
                        <div className="col-md-5 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Prrofile Settings</h4>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6"><label className="labels">Name</label><input onChange={(e) => { setuserInfo({ ...userInfo, first_name: e.target.value }) }} type="text" className="form-control" placeholder="first name" value={userInfo.first_name} /></div>
                                    <div className="col-md-6"><label className="labels">Surname</label><input onChange={(e) => { setuserInfo({ ...userInfo, surname: e.target.value }) }} type="text" className="form-control" value={userInfo.surname} placeholder="surname" /></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-16"><label className="form-label">Mobile Number</label><input onChange={(e) => setuserInfo({ ...userInfo, phone_number: e.target.value })} type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="form-control" placeholder="enter phone number" value={userInfo.phone_number} /></div>
                                    <div className="col-md-16"><label className="form-label">Address Line 1</label><input onChange={(e) => setuserInfo({ ...userInfo, address_line1: e.target.value })} type="text" className="form-control" placeholder="enter address line 1" value={userInfo.address_line1} /></div>
                                    <div className="col-md-16"><label className="form-label">Address Line 2</label><input onChange={(e) => setuserInfo({ ...userInfo, address_line2: e.target.value })} type="text" className="form-control" placeholder="enter address line 2" value={userInfo.address_line2} /></div>
                                    <div className="col-md-16"><label className="form-label">Postcode</label><input onChange={(e) => setuserInfo({ ...userInfo, postcode: e.target.value })} type="text" className="form-control" placeholder="enter address line 2" value={userInfo.postcode} /></div>
                                    <div className="col-md-16"><label className="form-label">State</label><input onChange={(e) => setuserInfo({ ...userInfo, state: e.target.value })} type="text" className="form-control" placeholder="enter address line 2" value={userInfo.state} /></div>
                                    <div className="col-md-16"><label className="form-label">Area</label><input onChange={(e) => setuserInfo({ ...userInfo, area: e.target.value })} type="text" className="form-control" placeholder="enter address line 2" value={userInfo.area} /></div>
                                    <div className="col-md-16"><label className="form-label">Email ID</label><input onChange={(e) => setuserInfo({ ...userInfo, email_ID: e.target.value })} type="email" className="form-control" placeholder="enter email id" value={userInfo.email_ID} /></div>
                                    <div className="col-md-16"><label className="form-label">Education</label><input onChange={(e) => setuserInfo({ ...userInfo, education: e.target.value })} type="text" className="form-control" placeholder="education" value={userInfo.education} /></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6"><label className="labels">Country</label><input onChange={(e) => setuserInfo({ ...userInfo, country: e.target.value })} type="text" className="form-control" placeholder="country" value={userInfo.country} /></div>
                                    <div className="col-md-6"><label className="labels">State/Region</label><input onChange={(e) => setuserInfo({ ...userInfo, state_region: e.target.value })} type="region" className="form-control" value={userInfo.state_region} placeholder="state" /></div>
                                </div>
                                <div className="mt-5 text-center"><button onClick={() => {  
                                    dispatch(about(userInfo))
                                    setuserInfo({ first_name: "", surname: "", phone_number: "", address_line1: "", address_line2: "", postcode: "", state: "", area: "", email_ID: "", education: "", country: "", state_region: "" })
                                    if(userInfo.first_name== "" || userInfo.surname== "" || userInfo.phone_number== "" || userInfo.address_line1== "" || userInfo.address_line2== "" || userInfo.postcode== "" || userInfo.state== "" || userInfo.area== "" || userInfo.email_ID== "" || userInfo.education== "" || userInfo.country== "" || userInfo.state_region== "" ){
                                        alert("please fill in all the fields")
                                    }
                                }} className="btn btn-primary profile-button" type="button">Save Profile</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Profile