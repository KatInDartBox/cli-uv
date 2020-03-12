import React from "react";
import "  ./module-styles.module.scss";
// import PropTypes from 'prop-types';
import Box from "@material-ui/core/Box";
import Hrm from "@material-ui/icons/SupervisedUserCircle";
import Acc from "@material-ui/icons/Receipt";
import Inv from "@material-ui/icons/StoreMallDirectory";

const ProductInfo = [
  {
    id: "1",
    title: "accounting",
    icon: <Acc fontSize="inherit" />,
    content: "Keeping track of your money. Managing, and reporting, just like one click away."
  },
  {
    id: "2",
    title: "inventory",
    icon: <Inv fontSize="inherit" />,
    content: `Stocking, Selling, & Moving your Product. Managing and Reporting your Asset, all in one place.`
  },
  {
    id: "3",
    title: "hrm",
    icon: <Hrm fontSize="inherit" />,
    content: `From your Recruiting, Promoting, Hiring, to Keeping Track of your Minute Meeting, never have been easier.`
  }
];
const GuestProduct = () => {
  return (
    <div
      className={
        `
      flex ${last + time}
      flex-column 
      flex-center ${title}${other}
      guest-product
      title
      txt-info ${item - fast}
      flex-start
      12invalid ${time} 
      ${other}
      21-other
      32-what-else
      ` +
        variable +
        `flex title` +
        "i am title" +
        "also title"
      }
    >
      <div className=" title ">Pay Nothing & Have it ALL</div>
      <div className=" txt-info ">suitable from small to Large business </div>

      <div className=" product ">
        {ProductInfo.map(pro => (
          <Card key={pro.id} title={pro.title} icon={pro.icon} content={pro.content} />
        ))}
      </div>
      <div className=" txt-info txt-info-sm ">Integrated with Role Base System Management</div>
    </div>
  );
};
const Card = ({ title, icon, content }) => {
  return (
    <Box className=" card " bgcolor="background.paper" boxShadow={3}>
      <div className=" icon ">{icon}</div>
      <div className=" title-card ">{title.toUpperCase()}</div>
      <div className=" product-content ">{content}</div>
    </Box>
  );
};
// GuestProduct.propTypes = {
// }

export default GuestProduct;
