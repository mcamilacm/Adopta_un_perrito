import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Tags = ({ Badgetext }) => {
  return (
    <Badge bg={Badgetext}>New</Badge>
  );
}

export default Tags;