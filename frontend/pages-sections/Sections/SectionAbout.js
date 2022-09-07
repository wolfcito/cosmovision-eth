import { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

const initialData = [
  {name: "0"},{name: "1"},{name: "2"},{
    name: "Edmundo Salamanca",
    github: "https://github.com/edsadev",
    avatar: "https://avatars.githubusercontent.com/u/61200432?s=400&u=970e5c9616ffc1f322d693ef68677f96ba9f81b1&v=4"
  },{name: "3"},{name: "4"},
  {
    name: "Luis Fernando Ushiña",
    github: "https://github.com/wolfcito",
    avatar: "https://avatars.githubusercontent.com/u/791301?v=4"
  }
  ,{name: "5"},{name: "6"},{name: "7"},{name: "9"},{
    name: "Jose Rodriguez Ricardo",
    github: "https://github.com/josedev03",
    avatar: "https://avatars.githubusercontent.com/u/6017431?v=4"
  },{name: "8"},
  {name: "10"},{name: "11"},{name: "12"},{name: "14"},{name: "15"},{name: "16"},
  {name: "17"},{
    name: "Jose",
    github: "https://github.com/joselr7",
    avatar: "https://avatars.githubusercontent.com/u/107063980?v=4"
  },{name: "21"},{name: "22"},{name: "23"},{name: "24"},{name: "25"},{
    name: "Luis Fernando Méndez",
    github: "https://github.com/LuFernandoMG",
    avatar: "https://avatars.githubusercontent.com/u/37456799?v=4"
  },{name: "27"},{name: "28"},{name: "29"},
]

const useStyles = makeStyles(styles);

const SectionAbout = () => {
  const classes = useStyles();

  const [data, setData] = useState(initialData)
  return (
    <div style={{marginBottom: 94, display: "flex", flexFlow: "column", gap: 36, alignItems: "center"}}>
      <h2 className={classes.title} style={{color: "#3C4858"}}>Know our team</h2>
      <div className={classes.grid}>
        {data?.map(element => {
          if (element.avatar){
            return <a key={element.name}  href={element.github}>
              <img className={classes.grayBall} src={element.avatar} />
            </a>
          } else {
            return <div className={classes.grayBall} key={element.name}/>
          }
        })}
      </div>
    </div>
  )
}

export default SectionAbout