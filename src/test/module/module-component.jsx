import React from "react";
import "./module-styles.module.scss";

const GuestProduct = () => {
  return (
    <div
      className = { 
        `${last + time} ${title} ${other} ${item - fast} ${time} ${other} guestProduct title txtInfo  flex  flex-column  flex-center   flex-start 12invalid   21-other 32-what-else` +
        variable +
        ` title flex` +
        `title i am` +
        `title also`
       }
    >
      <div className = { `title ` }>Pay Nothing & Have it ALL</div>
      <div className = { `txtInfo ` }>suitable from small to Large business </div>

      <div className = { `product ` }>
        {ProductInfo.map(pro => (
          <Card key={pro.id} title={pro.title} icon={pro.icon} content={pro.content} />
        ))}
      </div>
      <div className = { `txtInfo txtInfoSm ` }>Integrated with Role Base System Management</div>
    </div>
  );
};

const Card = ({ title, icon, content }) => {
  return (
    <Box className = { `card ` } bgcolor="background.paper" boxShadow={3}>
      <div className = { `icon ` }>{icon}</div>
      <div className = { `titleCard ` }>{title.toUpperCase()}</div>
      <div className = { ` product-content` }>{content}</div>
    </Box>
  );
};

export default GuestProduct;
