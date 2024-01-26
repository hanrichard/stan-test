import styled from 'styled-components';

export const Container = styled.header`
	background: rgb(2,151,255);
	background: linear-gradient(180deg, rgba(2,151,255,1) 0%, rgba(1,103,253,1) 100%);
	padding: 30px 10px;
`;

export const ContainerInner = styled.div`
	display: flex;
	max-width: 1280px;
	width: 100%;
	margin: 0 auto;
	justify-content: space-between;
	align-items: center;

	a {
		color: #ffffff;
		text-decoration: none;
		margin-right: 20px;
	}
`;

export const Logo = styled.b`
	margin-right: auto;
	color: #ffffff;
	font-size: 38px;
`;
