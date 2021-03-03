import React, { useEffect, useState } from "react";
import web from "../src/images/img2.svg";
import Common from "./Common";

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
            result.json().then((resp) => {
                console.warn("result", resp)
                setData(resp)
            })
        })
    }, [])

    console.warn(data)
    return (
        <>
            <Common
                name='Grow your business with'
                imgsrc={web}
                visit="/service"
                btname="Get Started"
            />
            <div className="col-10 mx-auto">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) =>
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Home; 