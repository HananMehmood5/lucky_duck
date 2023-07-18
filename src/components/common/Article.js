// import Accordion from 'react-bootstrap/Accordion';
import "./Article.scss";
import { useState } from "react";
import Plus from "../../images/plus.svg";
import Minus from "../../images/minus.svg";

const Article = (props) => {
  const { title, content } = props;
  const [open, setOpen] = useState(false);
  const toggle = () => {
    if (open) setOpen(false);
    else setOpen(true);
    console.log(open);
  };
  return (
    <div>
      <div className="accordion">
        <div
          className="accordion-title mx-4 py-4 d-flex justify-content-between align-items-center"
          onClick={() => setOpen(!open)}
        >
          {title}
          {open ? <img src={Minus}></img> : <img src={Plus}></img>}
        </div>
        {open && <div className="accordion-content  mx-4 py-4">{content}</div>}
      </div>
    </div>
  );
};

export default Article;
