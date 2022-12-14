import React from "react";
import Extensions from "../components/Extensions";

function ExtensionsScreen({ route, navigation }: any) {
    const { data } = route.params;

    return (
        <>
            <Extensions props={[route, data]} />
        </>
    );
}

export default ExtensionsScreen;
