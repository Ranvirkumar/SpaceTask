import React from "react";
import "./Style.css";
const Boolean = ["true", "false"]
const FilterSide = (props) => {
    const { YearsList, handleFilterButton, filterData } = props
    return (<div className="filterPanel">
        <div className="filter__header">
            <h4 class="filter__title">Filters</h4>
        </div>
        <div className="filter__launchYear">
            <div className="subPanel">
                <div className="subPanel__header">
                    <h4 className="subPanel__title">
                        Launch year
                    </h4>
                </div>
                <div className="subPanel__years">
                    {
                        YearsList.map(item => {
                            return (<div id={item.id} className="button__container">
                                <div className={filterData?.["launch_year"] === item.name ? "year__button__active" : "year__button"}>
                                    <button className="MuiButton-text MuiButton-root MuiButtonBase-root" onClick={() => handleFilterButton("launch_year", item.name)}>
                                        <span class="MuiButton-label">{item.name}</span>
                                        <span class="MuiTouchRipple-root"></span>
                                    </button>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
        </div>
        <div className="filter__launchYear">
            <div className="subPanel__header">
                <h4 className="subPanel__title">
                    Successful Launch
                </h4>
            </div>
            <div className="subPanel__header">
                <div className="subPanel__years">
                    {
                        Boolean.map(item => {
                            return (<div id="item" className="button__container">
                                <div className={filterData?.["launch_success"] === JSON.parse(item) ? "year__button__active" : "year__button"}>
                                    <button className="MuiButton-text MuiButton-root MuiButtonBase-root" onClick={() => handleFilterButton("launch_success", JSON.parse(item))}>
                                        <span class="MuiButton-label">{item}</span>
                                        <span class="MuiTouchRipple-root"></span>
                                    </button>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
        </div>
        <div className="filter__launchYear">
            <div className="subPanel__header">
                <h4 className="subPanel__title">
                    Successful Landing
                </h4>
            </div>
            <div className="subPanel__header">
                <div className="subPanel__years">
                    {
                        Boolean.map(item => {
                            return (<div id="item" className="button__container">
                                <div className={filterData?.["landing_success"] === JSON.parse(item) ? "year__button__active" : "year__button"}>
                                    <button className="MuiButton-text MuiButton-root MuiButtonBase-root" onClick={() => handleFilterButton("landing_success", JSON.parse(item))}>
                                        <span class="MuiButton-label">{item}</span>
                                        <span class="MuiTouchRipple-root"></span>
                                    </button>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
        </div>
    </div>)
}

export default FilterSide