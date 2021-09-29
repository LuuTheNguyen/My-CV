import { TransitionEnum } from "@enum";
import { CreateStyledComponent, dynamicTheme } from "style/ultis";
import styled from "styled-components";

export const StyledTitle1 = CreateStyledComponent(styled.h4`
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;    
    text-transform: uppercase;
    transition: ${TransitionEnum.DURATION};
`)

export const StyledTitle2 = CreateStyledComponent(styled.h5`
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    font-family: 'Source Sans Pro', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    transition: ${TransitionEnum.DURATION};
`)

export const StyledContent1 = CreateStyledComponent(styled.p.attrs( () => ({className: "StyledContent1"}) )`
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    font-family: 'Source Sans Pro', sans-serif;
    transition: ${TransitionEnum.DURATION};
`)

export const StyledContent2 = CreateStyledComponent(styled.p.attrs( () => ({className: "StyledContent2"}) )`
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    font-family: 'Source Sans Pro', sans-serif;    
    font-weight: 600;
    text-transform: uppercase;
    transition: ${TransitionEnum.DURATION};
`)

export const StyledContent3 = CreateStyledComponent(styled.p.attrs( () => ({className: "StyledContent3"}) )`
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    transition: ${TransitionEnum.DURATION};
`)

export const StyledContent4 = CreateStyledComponent(styled.p.attrs( () => ({className: "StyledContent4"}) )`
    color: ${dynamicTheme((theme) => theme.fontColor.secondary)};
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600px;
    text-transform: uppercase;
    transition: ${TransitionEnum.DURATION};
`)

export const StyledContent5 = CreateStyledComponent(styled.p.attrs( () => ({className: "StyledContent5"}) )`    
    color: ${dynamicTheme((theme) => theme.fontColor.primary)};
    font-family: 'Source Sans Pro', sans-serif;
    transition: ${TransitionEnum.DURATION};
`)