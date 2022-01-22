import React from "react";
import "./Style.css";
const Card = (props) => {
    const { item } = props
    return (<div className="card">
        <img src={item?.links?.mission_patch_small} alt='' class="card__image"></img>
        <div className="card__content">
            <h4 className="card__title">{item?.mission_name} <span>#</span> {item?.flight_number}</h4>
            <div className="card__missionId">
                <h4 class="card__infoHeading">Mission Id:</h4>
                <ul class="mission__list"><li>{item?.mission_id[0] || "No Data"}</li></ul>
            </div>
            <div class="card__launchYear">
                <h4 class="card__infoHeading">Launch Year:<span class="launch_year"> {item?.launch_year}</span></h4>
            </div>
            <table class="card__successfulLaunch">
                <tbody>
                    <tr style={{ padding: "0px" }}>
                        <td class="card__infoHeading">
                            <h4 class="card__infoTitle">Successful Launch: </h4>
                        </td>
                        <td>
                            <h4 class="launch_success"> {item?.launch_success ? "true" : "false"}</h4>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table class="card__successfulLaunch">
                <tbody>
                    <tr style={{ padding: "0px" }}>
                        <td class="card__infoHeading">
                            <h4 class="card__infoTitle">Successful Landing: </h4>
                        </td>
                        <td>
                            <h4 class="launch_success"> {item?.rocket?.first_stage?.cores?.[0]?.land_success ? "true" : "false"}</h4>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>)
}

export default Card