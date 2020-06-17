import React from "react"
import styled from "@emotion/styled"
import profileImage from "../images/profile-image.jpg"
import backgroundImage from "../images/background-image.jpg"
import { GithubOutlined, FacebookOutlined } from "@ant-design/icons"

const SocialNetwork = styled.div`
  position: absolute;
  bottom: 2%;
  left: 50%;
`

const Link = styled.a`
  margin: 0.5em;
`

const Background = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
`

const Layout = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Img = styled.img`
  @keyframes scale-up-center {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.03);
    }
  }

  @keyframes scale-down-center {
    0% {
      transform: scale(1.03);
    }
    100% {
      transform: scale(1);
    }
  }

  width: 250px;
  height: 250px;
  margin: 4em;
  border-radius: 50%;
  filter: grayscale(50%);
  animation: scale-down-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  box-shadow: 20px 20px 61px #ccc, -20px -20px 61px #ccc;
  &:hover {
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
`

const H1 = styled.h1`
  font-size: 5em;
  color: #fff;
  shadow: 20px 20px 61px #333;
  font-weight: 400;
  letter-spacing: 24px;
`

const LandingPage = () => {
  return (
    <>
      <Background src={backgroundImage} />
      <Layout>
        <Img src={profileImage} alt={`profile`} />
        <H1>YUTTHANA YAHAN</H1>
        <SocialNetwork>
          <Link href="https://www.facebook.com/meitoey">
            <FacebookOutlined style={{ color: "#fff" }} />
          </Link>
          <Link href="https://www.github.com/thyahan">
            <GithubOutlined style={{ color: "#fff" }} />
          </Link>
        </SocialNetwork>
      </Layout>
    </>
  )
}

export default LandingPage
