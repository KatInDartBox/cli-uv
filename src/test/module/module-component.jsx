import React from "react";
import "./module-styles.module.scss";
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
        `${last + time} ${title} ${other} ${item - fast} ${time} ${other} guestProduct title txtInfo 
          flex 
          flex-column 
          flex-center 
          
          flex-start
          12invalid 
          
          21-other
          32-what-else
        ` +
        variable +
        ` title flex` +
        ` title i am` +
        ` title also`
      }
    >
      <div className={` title `}>Pay Nothing & Have it ALL</div>
      <div className={` txtInfo `}>suitable from small to Large business </div>

      <div className={` product `}>
        {ProductInfo.map(pro => (
          <Card key={pro.id} title={pro.title} icon={pro.icon} content={pro.content} />
        ))}
      </div>
      <div className={` txtInfo txtInfoSm `}>Integrated with Role Base System Management</div>
    </div>
  );
};
const Card = ({ title, icon, content }) => {
  return (
    <Box className={` card `} bgcolor="background.paper" boxShadow={3}>
      <div className={` icon `}>{icon}</div>
      <div className={` titleCard `}>{title.toUpperCase()}</div>
      <div className={`  product-content`}>{content}</div>
    </Box>
  );
};
// GuestProduct.propTypes = {
// }

export default GuestProduct;
