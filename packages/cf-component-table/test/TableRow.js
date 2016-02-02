const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const TableRow = require('../src/TableRow');

describe('TableRow', function() {
  it('should render', function() {
    assertEqualJSX(
      <TableRow>TableRow</TableRow>,
      // should equal
      <tr className="cf-table__row cf-table__row--default">TableRow</tr>
    );
  });

  it('should render with type', function() {
    assertEqualJSX(
      <TableRow type="error">TableRow</TableRow>,
      // should equal
      <tr className="cf-table__row cf-table__row--error">TableRow</tr>
    );
  });

  it('should render with accent', function() {
    assertEqualJSX(
      <TableRow accent="orange">TableRow</TableRow>,
      // should equal
      <tr className="cf-table__row cf-table__row--default cf-table__row--accent-orange">TableRow</tr>
    );
  });
});
