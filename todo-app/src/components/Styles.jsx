import background from "../Images/todo-app-bg.jpg";
import todo1 from "../Images/todo1.jpg";

const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    height: "650px",
    paddingTop: "2%",

}

const boxStyle = {
    backgroundImage: `url(${todo1})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover", 
}

export {backgroundStyle, boxStyle};