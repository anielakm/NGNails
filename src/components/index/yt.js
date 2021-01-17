import React from "react"
import styled from 'styled-components'
// import { theme } from "../../utilis/theme"
// import video from '../../images/yt/ngn.mp4'

const YtContainer = styled.section`
	padding: 0;
	position: relative;

	video {
		width: 100%;
		max-height: 900px;
		object-fit: cover;

		@media (max-width: 575.9px){
			height: 350px;
		}
	}

	.video__overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.35);
		display: flex;
		align-items: center;
		justify-content: center;

		.video__content {
			height: fit-content;
			width: fit-content;
			margin-top: 150px;
			@media (min-width: 1500px){
				margin-top: 200px;
			}
		}

	}
	
`

const Yt = ({ data, dictionary, lang }) => (
	<YtContainer id="yt">

	<video 
		loop 
		muted
		autoPlay 
		>
		<source src="https://ngnails.pl/wp-content/uploads/2021/01/ngn.mp4" type="video/mp4" />
	</video>

	<div className="video__overlay">
		<div className="video__content">
			<a href="https://www.youtube.com/channel/UCguUVgW3EHhh-Mqc7QQqeYw?view_as=subscriber" target="_blank" className="btn btn__beige">zobacz więcej</a>
		</div>
	</div>

	</YtContainer>
)

export default Yt