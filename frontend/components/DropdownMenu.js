import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { View } from "react-native";

const DropdownMenu = ({ selectedName, setSelectedName, dropdownOptions }) => {
    console.log(selectedName);
    return (
        <View>
            <RNPickerSelect placeholder={{ label: "Select your name...", value: null }} items={dropdownOptions} onValueChange={value => setSelectedName(value)} />
        </View>
    );
};

export default DropdownMenu;
