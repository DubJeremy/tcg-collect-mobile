import React from "react";
import Extensions from "../../components/Extensions";

function ExtensionsScreen({ route, navigation }: any) {
    const { data } = route.params;

    return (
        <>
            <Extensions props={[data, navigation]} />
        </>
    );
}

export default ExtensionsScreen;
