import React, { useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from '../Input/Input.scss';

const Dropdown = ({
  className,
  width = '100%',
  style = {},
  dataHook,
  options,
  selectedId,
  onSelect,
  ...selectProps
}) => {
  const idToOptionMap = useMemo(() => {
    const map = {};
    options.forEach((option) => {
      if (option.id) {
        map[option.id] = option;
      }
    });
    return map;
  }, [options]);

  const handleOnChange =
    onSelect &&
    (({ target: { value: id } }) => {
      console.log(id, idToOptionMap);
      const selectedOption = idToOptionMap[id];
      onSelect(selectedOption);
    });

  return (
    <select
      data-hook={dataHook}
      className={classNames(className, styles.root)}
      style={{ ...style, width }}
      onChange={handleOnChange}
      {...selectProps}
    >
      {options.map(({ id, value }) => (
        <option value={id} key={id}>
          {value}
        </option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  style: PropTypes.object,
  dataHook: PropTypes.string,
  options: PropTypes.shape({
    id: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  }).isRequired,
  selectedId: PropTypes.string,
  onSelect: PropTypes.func,
};

export default Dropdown;
