import styled from 'styled-components'

export const ErrorOverlayComp = styled.div `
   height: 60vh;
   width : 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
//    border: 1px solid blue;
`

export const ErrorImageContainer = styled.div `
   display: inline-block;
   background-image: ${({imageUrl})=> `url(${imageUrl})`};
   background-size: cover;
   background-position: center;
   width: 40vh;
   height: 40vh;
`

export const ErrorImageText = styled.h2 `
   font-size: 28px;
   color: #2f8e89;
`