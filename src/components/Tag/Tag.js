import React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';

import './Tag.css';
const Tag = props => {
  return (
    <Link to={'/tag/' + _.kebabCase(props.tag)} className="tag is-rounded">
      {props.tag}
    </Link>
  )
}

export default Tag;