import React from 'react';
import Dropdown from 'wix-style-react/dist/src/Dropdown';
import Input from 'wix-style-react/dist/src/Input';
import PropTypes from 'prop-types';

const directions = [
  { id: 'top', value: 'top' },
  { id: 'bottom', value: 'bottom' },
  { id: 'left', value: 'left' },
  { id: 'right', value: 'right' },
];

const DirectionDropDown = ({ title, selectedId, onSelect }) => (
  <div style={{ marginRight: '20px' }}>
    <div style={{ marginBottom: '3px' }}>{title}</div>
    <Dropdown
      width="80px"
      selectedId={selectedId}
      onSelect={(option) => onSelect(option.id)}
      options={directions}
    />
  </div>
);

DirectionDropDown.propTypes = {
  title: PropTypes.string,
  selectedId: PropTypes.string,
  onSelect: PropTypes.func,
};

const SizeInput = ({ title, value, onChange }) => (
  <div style={{ marginRight: '20px' }}>
    <div style={{ marginBottom: '3px' }}>{title}</div>
    <Input
      width="80px"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

SizeInput.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export { DirectionDropDown, SizeInput };
