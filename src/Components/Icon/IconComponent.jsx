import Icon from "./Icon.jsx";


export function IconComponent({image, ...other})
{
    return (image ?? Icon.default)({...other})
}

export default IconComponent


