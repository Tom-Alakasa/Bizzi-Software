import { BsHouse } from "react-icons/bs";
import Card from "../Card";
import "./features.css";
export default function Features() {
  return (
    <div className="cardArea">
      <div className="cardContainer">
      <Card description="asdasd" icon={<BsHouse></BsHouse>} title="aaa"></Card>
      <Card description="asdasd" icon={<BsHouse></BsHouse>} title="aaa"></Card>
      <Card description="asdasd" icon={<BsHouse></BsHouse>} title="aaa"></Card>
      <Card description="asdasd" icon={<BsHouse></BsHouse>} title="aaa"></Card>
      <Card description="asdasd" icon={<BsHouse></BsHouse>} title="aaa"></Card>
      <Card description="asdasd" icon={<BsHouse></BsHouse>} title="aaa"></Card>
      </div>
    </div>
  );
}
