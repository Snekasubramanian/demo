import React, { useState } from "react";
import { Col, Image } from "react-bootstrap";
import { ProfA, ProfB } from "../assets/img";

const data = [
    {
        age: 24,
        phone: "8987898789",
        email: "demo@gmail",
        city: "chennai",
        height: "189 cm",
        waist: "16 in",
        chest: "19 in",
        youtube: "www.youtube.in",
    }
];
const ProfileDetails = () => {
    const [adminData, setadminData] = useState(data);

    return (
        <div className="my-4 prof-detail w-90">
            <div className="d-flex-al">
                <Col md={5} xs={12} className="my-2 px-2">
                    <div className="profi-box text-center">
                        <Image src={ProfB} className="w-80" />
                    </div>
                </Col>
                <Col md={7} xs={12} className="my-2 px-2">
                    <div className="acto-table">
                        <h3>Rammodal</h3>
                        <p>Actor</p>
                        <table className="d-flex-wrap" >
                            <thead className=" px-3">
                                <tr className="d-grid">
                                    <th>Age</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>City</th>
                                    <th >Height</th>
                                    <th >Waist</th>
                                    <th >Chest / Bust</th>
                                    <th >Youtube</th>
                                </tr>
                            </thead>
                            <tbody className="px-3">
                                {adminData.map((list, index) => (
                                    <tr key={index} className="d-grid  ">
                                        <td>{list.age}</td>
                                        <td>{list.phone}</td>
                                        <td>{list.email}</td>
                                        <td>{list.city}</td>
                                        <td>{list.height}</td>
                                        <td>{list.waist}</td>
                                        <td>{list.chest}</td>
                                        <td>{list.youtube}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Col>
            </div>
            <div className="my-bio my-3">
                <h6>MY STORY</h6>
                <h3>Get to know a bit more about Christian</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli.</p>
                <div className="d-flex-wrap  ">
                    <Col lg={2} xs={6} sm={4} className="my-2 px-2">
                        <div className="box-design">
                            <h4>46</h4>
                            <h6>Awards</h6>

                        </div>
                    </Col>
                    <Col lg={2} xs={6} sm={4} className="my-2 px-2">
                        <div className="box-design">
                            <h4>46</h4>
                            <h6>Awards</h6>
                        </div>
                    </Col>


                </div>
            </div>
            <div className="my-4 ">
                <h3>Myphotos</h3>
                <div className="  d-flex-wrap">
                    <Col md={3} sm={6} xs={12} className="my-3 px-3">
                        <div className="profi-box">
                            <Image className="w-100" src={ProfB} />
                        </div>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="my-3 px-3">
                        <div className="profi-box">
                            <Image className="w-100" src={ProfA} />
                        </div>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="my-3 px-3">
                        <div className="profi-box">
                            <Image className="w-100" src={ProfA} />
                        </div>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="my-3 px-3">
                        <div className="profi-box">
                            <Image className="w-100" src={ProfB} />
                        </div>
                    </Col>
                </div>
            </div>
        </div>
    );
};
export default ProfileDetails;
