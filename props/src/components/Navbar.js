import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props){
    return ( // gördüğünüz gibi props yapımızı bir parametre olarak aldık.
        <div>
            <h3>Props içerisindeki title değerimiz: {props.title}</h3>
        </div>
    )
}

Navbar.propTypes = { //title değerimizin gerekliliğini yani zorunluluğunu belirttik.
    title: PropTypes.string.isRequired
}

Navbar.defaultProps  = { //title değerimizin varsayılan değerini belirttik.
    title: "Default App"
}
export default Navbar