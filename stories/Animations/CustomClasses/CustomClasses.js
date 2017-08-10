import React from 'react';
import CodeExample from '../../utils/Components/CodeExample';

import ExampleClasses from './ExampleClasses';
import ExampleClassesRaw from '!raw-loader!./ExampleClasses';
import ClassesChart from './ClassesChart';

const CustomClasses = () => {
  return (
    <div>
      <ClassesChart/>
      <CodeExample title="Classes Example"
                   code={ExampleClassesRaw}>
        <ExampleClasses/>
      </CodeExample>
    </div>);
};

export default CustomClasses;

