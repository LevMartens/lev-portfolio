import styled from 'styled-components';

export const Bold = "font-family: 'Work Sans'; font-weight: 700;";
export const Light = "font-family:'Work Sans', sans-serif; font-weight: 700;";
export const CaveatNormal = "font-family: 'Caveat'; font-weight: 600;";
export const Caveat400 = "font-family: 'Caveat'; font-weight: 400;";
export const Sans500 = "font-family: 'Work Sans'; font-weight: 500;";
export const Normal = "font-family: 'Lora'; font-weight: 500;";

const generateFont = (size, lineHeight, font, tag, styles = {}) => styled(tag)`
    font-size: ${size}px;
    line-height: ${lineHeight}px;
    ${font};
    ${styles}
`;

export const PageTitle = generateFont(15, 20, Bold, 'p');
export const PageTitleMobile = generateFont(25, 20, Bold, 'p');
export const General = generateFont(11, 11, Bold, 'p');
export const Name = generateFont(25, 25, Normal, 'p');
export const FullName = generateFont(36, 36, CaveatNormal, 'p');
export const CaveatDescription = generateFont(20, 20, Caveat400, 'p');
export const SansDescription = generateFont(15, 15, Sans500, 'span');
export const SansDescriptionP = generateFont(15, 15, Sans500, 'p');
export const SansListItem = generateFont(13, 13, Sans500, 'li');

export const Banner = generateFont(36, 36, Bold, 'p');
