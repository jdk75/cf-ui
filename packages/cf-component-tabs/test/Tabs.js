const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const Tabs = require('../src/Tabs');
const TabsPanel = require('../src/TabsPanel');

describe('Tabs', function() {
  it('should render', function() {
    assertEqualJSX(
      <Tabs
        activeTab="2"
        tabs={[{ id: '1', label: 'One' }, { id: '2', label: 'Two' }]}
        onChange={function() {}}>
        <TabsPanel id="1">One</TabsPanel>
        <TabsPanel id="2">Two</TabsPanel>
      </Tabs>,
      // should equal
      <section className="cf-tabs">
        <noscript/>
        <ul className="cf-tabs__group" role="tablist">
          <li role="tab" tabIndex="0" aria-controls="1" aria-selected="false" className="cf-tabs__item">One</li>
          <li role="tab" tabIndex="0" aria-controls="2" aria-selected="true" className="cf-tabs__item cf-tabs__item--active">Two</li>
        </ul>
        <div className="cf-tabs__panel" role="tabpanel" aria-labelledby="1" aria-hidden="true" style={{ display: 'none' }}>
          One
        </div>
        <div className="cf-tabs__panel" role="tabpanel" aria-labelledby="2" aria-hidden="false" style={{ display: 'block' }}>
          Two
        </div>
      </section>
    );
  });
});
