import {TextInput, Text} from "react-native";
import Styles from "../../../globalStyles/Styles";
import {formatDayOrMonth} from "../../helperFunctions";
import React from "react";

function DetailsComponent (props) {
    return <>
        <Text>First Name</Text>
        <TextInput
            value={props.globalUser.firstname}
            placeholder={props.globalUser.firstname}
            style={Styles.inputV2}
            editable={false}
        />
        <Text>Last Name</Text>
        <TextInput
            value={props.globalUser.lastname}
            placeholder={props.globalUser.lastname}
            style={Styles.inputV2}
            editable={false}
        />
        <Text style={{textAlign: "left"}}>Birthday</Text>
        <TextInput
            value={formatDayOrMonth(props.globalUser.birtDate) + "-" + formatDayOrMonth(props.globalUser.birthMonth) + "-" + props.globalUser.birthYear}
            placeholder={formatDayOrMonth(props.globalUser.birtDate) + "-" + formatDayOrMonth(props.globalUser.birthMonth) + "-" + props.globalUser.birthYear}
            style={Styles.inputV2}
            editable={false}
        />
    </>;
}
export default DetailsComponent;