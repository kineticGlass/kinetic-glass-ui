import React from 'react';
import styled from 'styled-components';
import { KGTheme } from "../../../theme/Theme";
import { sidePaddings, heights } from "../../../utils/utils";
import { withTheme } from "../../Theme/withTheme";

const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  width: ${(props) => props.theme.sizes[props.size]}px;
  height: ${(props) => props.theme.sizes[props.size]}px;
  border-radius: ${(props) => (props.shape === 'round' ? '50%' : 0)};
  background-color: ${(props) => props.src ? "none":
    (props.color
      ? { ...props.theme.colors[props.color] }[props.theme.mode]
      : KGTheme.colors.primary[KGTheme.mode])};
  `

 const AvatarImg = styled.img`
  
  width: 100%;
  height: 100%;
  border-radius: ${(props) => (props.shape === 'round' ? '50%' : 0)};
  background-color:  ${(props) =>
    props.color
      ? { ...props.theme.colors[props.color] }[props.theme.mode]
      : KGTheme.colors.primary[KGTheme.mode]};

  object-fit: cover;
`;
const Badge = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: ${(props) =>
    props.size ? props.theme.fontSizes[props.size] : "18px"};
  height: ${(props) =>
    props.size ? props.theme.fontSizes[props.size] : "18px"};
  background-color: ${(props) =>
    props.color ? props.color : KGTheme.colors.primary[KGTheme.mode]};
  border-radius: 50%;
  font-size: 12px;
  color: white;
  text-align: center;
  line-height: 20px;
  overflow: visible;
`;


const AvatarIcon = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  background-image: url(${({ icon }) => icon});
  background-size: contain;
  background-repeat: no-repeat;
`;

const AvatarLabel = styled.text`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: ${(props) => props.theme.sizes[props.size]/1.6}px;
  color:#fff;
  font-weight: bold;
`;

const StyledAvatar = ({ src, alt, size, shape, border, borderColor, icon, badge, color, childrens,letter }) => (
  <AvatarWrapper src={src} size={size} shape={shape} border={border} borderColor={borderColor} color={color}>
  
    {src ?   <AvatarImg src={src} alt={alt} shape={shape}   color={color}/>: 
     <AvatarLabel size={size}>{letter}</AvatarLabel>}
    {icon && <AvatarIcon icon={icon} />}
    {badge && <Badge color={badge.color} size={badge.size}>{badge.text}</Badge> }
    
    {childrens && <>{childrens}</>}
     {console.log(childrens)}
    
  </AvatarWrapper>
);



export default withTheme(StyledAvatar);


