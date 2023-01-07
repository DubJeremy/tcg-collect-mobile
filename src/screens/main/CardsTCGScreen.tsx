import React from "react";
import CardsTCG from "../../components/CardsTCG";

function CardsTCGScreen({ route }: any) {
    const { data } = route.params;
    return (
        <>
            <CardsTCG props={data} />
        </>
    );
}

export default CardsTCGScreen;
