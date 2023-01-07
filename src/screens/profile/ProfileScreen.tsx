import React from "react";

import Profile from "../../components/Profile";

function ProfileScreen({ route }: any) {
    const { data } = route.params;
    return (
        <>
            <Profile />
        </>
    );
}

export default ProfileScreen;
