import React from 'react'
import {renderRoutes} from "react-router-config";

const Root = (props) => {
  const { route }=props;
  console.error('props',props);
  return (
    <div>
      <h1 onClick={()=>{
        props.history.push('/child/1/grand-child')
      }}>Root</h1>
      {/* child routes won't render without this */}
      {renderRoutes(route.routes)}
    </div>
)};

export default Root
