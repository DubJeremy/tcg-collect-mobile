import React from "react";

import Profile from "../components/Profile";

function ProfileScreen({ navigation }: any) {
    // const { data } = route.params;
    return (
        <>
            <Profile navigation={navigation} />
        </>
    );
}

export default ProfileScreen;
