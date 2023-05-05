/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';


import { MdDeleteOutline } from 'react-icons/md'

import { Container, Selector, Cleaner } from './styles'

function Filter({ languages, currentLanguage, onClick }) {
  const selectors = languages.map(({name, count, color}) => (
    <Selector
      key={name.toLocaleLowerCase()}
      color={color}
      className={currentLanguage === name ? 'selected' : ''}
      onClick={() => onClick && onClick(name)}
      >
        <span>{name}</span>
        <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => onClick && onClick(undefined)}><MdDeleteOutline size={23} />Limpar</Cleaner>
    </Container>
  );
}

Filter.defaultProps = {
  currentLanguage: null,
  onClick: null,
}

Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
  onClick: PropTypes.func,
}

export default Filter;
