import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./Style.css";
import FilterSide from "./FilterSide"
import Card from "./Card"
import { getyears } from "./../Utils/Helper"
const Data = (props) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filterData, setFilterData] = useState({});
    useEffect(() => {
        if (props.Data) {
            setLoading(false);
            setUsers(props.Data);
        } else {
            alert("something went wrong")
        }
    }, [props.Data]);

    useEffect(() => {
        setLoading(true);
        const value = window.localStorage.getItem("urlendpoint")
        if (value) {
            setFilterData(JSON.parse(value))
        } else {
            const { dispatch } = props;
            dispatch({ type: "DO_DATA", payload: value });
        }
    }, []);
    const handleFilterButton = (name, value) => {
        if (filterData?.[name] === value) {
            const Data = { ...filterData }
            delete Data?.[name];
            setFilterData(Data)
        } else {
            setFilterData({ ...filterData, [name]: value })
        }
    }
    useEffect(() => {
        const { dispatch } = props;
        if (Object.keys(filterData).length) {
            window.localStorage.setItem("urlendpoint", JSON.stringify(filterData))
            const Data = Object.entries(filterData)
            const val = ""
            const value = Data.map(item => val + `&${item[0]}=${item[1]}`)?.join("")
            dispatch({ type: "DO_DATA", payload: value });
        } else {
            window.localStorage.setItem("urlendpoint", JSON.stringify(filterData))
            dispatch({ type: "DO_DATA" });
        }
    }, [filterData])
    if (loading) {
        return (
            <div id="root">
                <div className="loader-wrapper">
                    <div className="loader"></div>
                </div>
            </div>
        );
    }
    const YearsList = getyears()
    return (
        <div className="app">
            <div className="app__header">
                <h2>SpaceX Launch Programs</h2>
            </div>
            <div className="app__content">
                <div className="app__body">
                    <div className="app__filter">
                        <FilterSide YearsList={YearsList} handleFilterButton={handleFilterButton} filterData={filterData} />
                    </div>
                    <div className="app__cards">
                        <div className="card__container">
                            {
                                users.map(item => {
                                    return <Card item={item} />
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="app__footer">
                    <h2> Developed by : Vivek</h2>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    Data: state.Data.result,
});
export default connect(mapStateToProps)(Data);