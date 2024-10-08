import React from "react";

function Hello(props) {
    const {nama, pesan} = props;
    //props.nama = "Nelson Antonio Celo";
    return (
        <h1>
            Hello {nama}, {pesan}
        </h1>
    );
}

Hello.defaultProps = {
    nama : "Muhammad Fadly Ukhrowi Akhfir",
    pesan : "Semoga hari ini lebih baik dari sebelumnya"
};

export default Hello;
