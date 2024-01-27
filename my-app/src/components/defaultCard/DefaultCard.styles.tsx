import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	margin-right: 10px;

	img { 
		width: 100%;
		height: auto;
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: #000000;
`

export const ImageLinkContainer = styled(Link)`
	margin-bottom: 10px;
	display: flex;
	text-wrap: wrap;
	text-decoration: none;
	position: relative;
	background: #1E1E1E;
	height: 250px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	color: #ffffff;
	text-transform: uppercase;
	
	b {
		font-size: 32px;
	}
`