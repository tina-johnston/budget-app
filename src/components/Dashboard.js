import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  onEdit = expense => {
    this.props.startEditExpenses(expense);
  };
  onRemove = id => {
    this.props.startRemoveExpenses(id);
  };

  render() {
    return (
      <div>
        <h1>Budget App</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expenses: state.expenses,
});

export default connect(mapStateToProps)(Dashboard);
