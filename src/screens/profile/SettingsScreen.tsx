import React from "react";

import Settings from "../../components/Settings";

function SettingsScreen({ route }: any) {
    const { data } = route.params;
    return (
        <>
            <Settings />
        </>
    );
}

export default SettingsScreen;
