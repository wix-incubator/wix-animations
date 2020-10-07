import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tabs from '../../../../src/Tabs/Tabs';

class TabbedView extends Component {
  static propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.arrayOf(PropTypes.node)
  };

  constructor(props) {
    super(props);
    this.state = {activeTabId: props.tabs[0]};
    this.tabsProps = this.getTabsProps();
  }

  onTabClicked = tab => {
    this.setState({activeTabId: tab.id});
  };

  getTabsProps = () => {
    return {
      items: this.props.tabs.map(tab => {
        return {
          title: tab,
          id: tab
        };
      }),
      onClick: this.onTabClicked
    };
  };

  render() {
    const shouldHideForE2E = process.env.STORYBOOK_E2E;

    return (
      <div>
        {!shouldHideForE2E ? <Tabs activeId={this.state.activeTabId} {...this.tabsProps}/> : null}
        {this.props.children.map((child, index) => this.state.activeTabId === this.props.tabs[index] ? child : null)}
      </div>
    );
  }
}

export default TabbedView;
