import React from 'react';

const Icon = (props) => {
    const { icon, alt, width, height, style } = props;

    return <img src={icon} alt={alt} width={width ?? 30} height={height ?? 30} style={style} />;
};

export default Icon;
