const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const CardControl = require('../src/CardControl');

describe('CardControl', function() {
  it('should render', function() {
    assertEqualJSX(
      <CardControl>CardControl</CardControl>,
      // should equal
      <div className="cf-card__control">CardControl</div>
    );
  });
});
