import React from "react"

const style = {
  background: "#EBA924",
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}

const imgStyle = {
  width: "250px",
  height: "250px",
  borderRadius: "50%",
  marginBottom: "2rem",
  boxShadow: `20px 20px 61px #966c17, 
             -20px -20px 61px #ffe631`,
}

const h1Style = {
  fontSize: '4em',
  color: '#fff',
  shadow: `20px 20px 61px #966c17`
}

const imgUrl = 'https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.0-9/12107114_875134992578289_2068778818543952015_n.jpg?_nc_cat=106&_nc_ohc=_1Yfg8nk6-sAX8Yv_MN&_nc_ht=scontent.fbkk2-7.fna&oh=f99495b03a37a95d0aabb0ccb33cb497&oe=5ED435E9';

const LandingPage = () => {
  return (
    <div style={style}>
      <img
        style={imgStyle}
        src={imgUrl}
      />
      <h1 style={h1Style}>Yutthana Yahan</h1>
    </div>
  )
}

export default LandingPage
