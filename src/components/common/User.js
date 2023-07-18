import { Container, Row, Col, Card, Image } from "react-bootstrap";
import CopyIcon from "../../images/copy.svg";
import LinkIcon from "../../images/link.svg";
import LineIcon from "../../images/line.svg";
import DeleteIcon from "../../images/delete.svg";
import EditIcon from "../../images/edit.svg";

import "./User.scss";

const User = (props) => {
  const { WalletIcon, wallet, type, UserAvatar, username, address } = props;
  return (
    <div className="buyer-wrapper m-2 p-3 d-flex">
      <Col md={4} lg={4} xl={4} className="d-flex">
        <img src={WalletIcon} />
        <div className="descrition px-3 d-grid">
          <div>{wallet}</div>
          <div>{type}</div>
        </div>
        <div className="d-flex align-items-center">
          <img className="mx-1" src={LinkIcon} />
          <img className="mx-1" src={LineIcon} />
          <img className="mx-1" src={CopyIcon} />
        </div>
      </Col>
      <Col
        md={3}
        lg={3}
        xl={3}
        className="d-flex align-items-center descrition"
      >
        <img src={UserAvatar} />
        <div className="px-3">{username}</div>
      </Col>
      <Col
        md={3}
        lg={3}
        xl={3}
        className="descrition d-flex align-items-center"
      >
        <div>{address}</div>
      </Col>
      <Col md={2} lg={2} xl={2} className="d-flex justify-content-end px-2">
        <img src={EditIcon} className="mx-2" onClick={() => alert("click")} />
        <img src={DeleteIcon} className="mx-2" onClick={() => alert("click")} />
      </Col>
    </div>
  );
};

export default User;
