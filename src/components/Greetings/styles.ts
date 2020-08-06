import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
    height: 100vh;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    width: 30rem;
    animation: ${rotate} 15s linear infinite;
    opacity: 0.1;
`
export const Text = styled.p`
    margin-top: 3.5rem;
    font-size: 2.0rem;
    font-weight: bold;
`

export const Title = styled.h1`
    margin-top: 3.5rem;
    font-size: 5rem;
    font-weight: bold;
`
