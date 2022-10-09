import React from "react";

const SusciptionList = ({suscriptions}) => {
    return(
        <table border="0" style={{width: "50%", fontSize: "14px"}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>DESC.</th>
                    <th>COD.</th>
                </tr>
            </thead>
            <tbody>
                {suscriptions.map(suscription => (
                    <tr>
                        <td>{suscription.id}</td>
                        <td>{suscription.nombre}</td>
                        <td>{suscription.descripcion}</td>
                        <td>{suscription.codigo}</td>
                    </tr>
                ))}                
            </tbody>
        </table>
    )
}

export default SusciptionList;