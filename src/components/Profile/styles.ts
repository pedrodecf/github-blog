import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  height: 13.25rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.profile};
  display: flex;
  gap: 2rem;
  margin-top: -6rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 9999;

  .loadingBar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ProfileContent = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.profile};
  display: flex;
  gap: 2rem;
`

export const ImgContainer = styled.div`
  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 0.5rem;
  }
`

export const InfoContainer = styled.div`
  width: 100%;
  .firstLineContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: ${(props) => props.theme.blue};
      font-family: Nunito;
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 160%;
      text-transform: uppercase;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      svg {
        margin-bottom: -0.15rem;
      }
    }
  }

  h1 {
    color: ${(props) => props.theme.title};
    font-family: Nunito;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme.text};
    font-family: Nunito;
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
    margin-bottom: 1.5rem;

    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme.subtitle};
    font-family: Nunito;
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
  }
`

export const UserInfoContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`
